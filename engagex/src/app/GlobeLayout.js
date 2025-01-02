"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Users, Plus } from "lucide-react";
import { drawThreeGeo } from "./threeGeoJSON";
import getStarfield from "./geoStarField";
import * as TWEEN from "@tweenjs/tween.js";
import { userData } from "../../public/UserData";

const GlobeLayout = () => {
  const canvasRef = useRef(null);
  const [visibleProfile, setVisibleProfile] = useState(null);
  const [popupPosition, setPopupPosition] = useState([{ x: 0, y: 0 }]);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("#2c2c2c");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.01,
      1000
    );
    camera.position.z = 2;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;

    controls.minDistance = 1.2;
    controls.maxDistance = 3;
    controls.addEventListener("start", () => setIsInteracting(true));
    controls.addEventListener("end", () => setIsInteracting(false));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeGeometry = new THREE.SphereGeometry(0.6, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: "white",
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globe);

    const markerGeometry = new THREE.SphereGeometry(0.01, 24, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: "red" });
    const markers = [];
    userData.forEach((user) => {
      const { latitude, longitude } = user;
      const position = getPositionFromLatLon(latitude, longitude);
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(position.x, position.y, position.z);
      marker.userData = user;
      markers.push(marker);
      globeGroup.add(marker);
    });

    const stars = getStarfield({ numStars: 1000, fog: false });
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isInteracting) {
        globeGroup.rotation.y += 0.002;
      }

      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);

      const visibleMarker = markers.find((marker) => {
        const markerPosition = marker.position
          .clone()
          .applyMatrix4(globeGroup.matrixWorld);
        const dotProduct = cameraForward.dot(markerPosition.normalize());
        return dotProduct < -0.085;
      });

      if (visibleMarker) {
        setVisibleProfile(visibleMarker.userData);

        const screenPosition = visibleMarker.position
          .clone()
          .applyMatrix4(globeGroup.matrixWorld)
          .project(camera);
        const x = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;
        setPopupPosition({ x, y });
      } else {
        setVisibleProfile(null);
      }

      controls.update();
      renderer.render(scene, camera);
      TWEEN.update();
    };

    fetch("./geojson/ne_110m_land.json")
      .then((response) => response.json())
      .then((text) => {
        const countries = drawThreeGeo({
          json: text,
          radius: 0.6,
          shape: "sphere",
          materialOptions: {
            color: "#0282f2",
            wireframe: true,
          },
        });
        globeGroup.add(countries);
      });

    animate();

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  const handleMarkerClick = (user) => {
    alert("Marker clicked");
    if (isRotating) return; // Prevent multiple rotations at the same time
    setIsRotating(true);

    const { latitude, longitude } = user;
    const targetPosition = getPositionFromLatLon(latitude, longitude);

    const targetRotation = new THREE.Euler(
      0,
      Math.atan2(targetPosition.x, targetPosition.z),
      0
    );
    // new TWEEN.Tween(globeGroup.rotation)
    //   .to({ y: targetRotation.y }, 1000) // Rotate to the marker position smoothly
    //   .easing(TWEEN.Easing.Quadratic.Out)
    //   .onComplete(() => {
    //     setIsRotating(false);
    //     setVisibleProfile(user); // Show the profile after rotation
    //   })
    //   .start();
  };

  const getPositionFromLatLon = (lat, lon, radius = 0.6) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    return {
      x: -radius * Math.sin(phi) * Math.cos(theta),
      y: -radius * Math.cos(phi),
      z: -radius * Math.sin(phi) * Math.sin(theta),
    };
  };

  return (
    <div className="flex flex-row justify-between bg-[#2c2c2c] px-10 relative w-full h-screen">
      <div className="flex justify-between items-center h-[100vh] w-[20%] px-4 bg-transparent text-white">
        <div className="border-t-4"></div>
        <div className="flex justify-between items-center w-full border-t-[1px] border-[#6f6e6e] py-2">
          <p>Total Users</p>
          <p>{userData.length}</p>
        </div>
      </div>

      <div className="flex items-center justify-center h-[100vh] w-[60%]">
        <canvas ref={canvasRef} className="w-full h-full" />
        {visibleProfile && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-[#2c2c2c] border border-sky-500 shadow-lg"
            style={{
              left: `${popupPosition.x}px`,
              top: `${popupPosition.y}px`,
            }}
          >
            <div className="flex flex-row justify-start items-center">
              <Plus className="w-full h-full bg-sky-500 text-sky-50 sm:w-full p-1 sm:h-full" />
              <p className="sm:w-full min-w-[150] w-full p-1 sm:h-full text-sky-50">
                {visibleProfile.name}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center h-[100vh] w-[20%] px-4 bg-[#2c2c2c] text-white">
        <h1 className="text-xl font-bold">Globe Layout</h1>
        <Users className="text-xl text-gray-300" />
      </div>
    </div>
  );
};

export default GlobeLayout;

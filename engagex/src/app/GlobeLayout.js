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

    // const bordersMaterial = new THREE.LineBasicMaterial({
    //   color: "#6f6e6e",
    //   linewidth: 2,
    // });

    // const bordersGeometry = new THREE.EdgesGeometry(globeGeometry);
    // const borders = new THREE.LineSegments(bordersGeometry, bordersMaterial);
    // globeGroup.add(borders);

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

    const updateVisibleMarkers = (markers, camera, globeGroup) => {
      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);

      const visibleMarkers = markers.filter((marker) => {
        const markerPosition = marker.position
          .clone()
          .applyMatrix4(globeGroup.matrixWorld);
        const dotProduct = cameraForward.dot(markerPosition.normalize());
        return dotProduct < -0.65; // Threshold for visibility
      });

      const popupPositions = visibleMarkers.map((marker) => {
        const worldPosition = marker.position
          .clone()
          .applyMatrix4(globeGroup.matrixWorld);
        const screenPosition = worldPosition.clone().project(camera);

        const isVisibleOnScreen =
          screenPosition.x >= -1 &&
          screenPosition.x <= 1 &&
          screenPosition.y >= -1 &&
          screenPosition.y <= 1;

        if (!isVisibleOnScreen) return null;

        return {
          userData: marker.userData,
          x: (screenPosition.x * 0.5 + 0.5) * canvas.clientWidth + 10,
          y: (-screenPosition.y * 0.5 + 0.5) * canvas.clientHeight + 10,
        };
      });

      const validPopups = popupPositions.filter(
        (position) => position !== null
      );

      setVisibleProfile(visibleMarkers.map((marker) => marker.userData));
      setPopupPosition(validPopups);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isInteracting) {
        globeGroup.rotation.y += 0.002;
      }

      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);

      updateVisibleMarkers(markers, camera, globeGroup);

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

  const getPositionFromLatLon = (lat, lon, radius = 0.6) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    return {
      x: -radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.cos(phi),
      z: radius * Math.sin(phi) * Math.sin(theta),
    };
  };

  const groupUsersByContinent = (users) => {
    return users.reduce((acc, user) => {
      if (!acc[user.continent]) {
        acc[user.continent] = [];
      }
      acc[user.continent].push(user);
      return acc;
    }, {});
  };

  return (
    <div className="flex flex-row justify-between bg-[#2c2c2c] px-10 relative w-full h-screen">
      <div className="flex justify-between items-center h-[100vh] w-[20%] px-4 bg-transparent text-white">
        <div className="flex justify-between text-lg items-center w-full border-t-[1px] border-[#6f6e6e] py-2">
          <p>Total Users</p>
          <p>{userData.length}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center h-[100vh] rounded-full w-[60%]">
        <canvas ref={canvasRef} className="w-full h-full" />
        {visibleProfile &&
          popupPosition &&
          popupPosition.map((position, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 rounded-full opacity-[5] -translate-y-1/2 bg-[#2c2c2c] border border-sky-500 shadow-lg"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: `${position.zDepth}`,
              }}
            >
              <div className="flex flex-row justify-start rounded-full items-center">
                {visibleProfile[index]?.profilePicture ? (
                  <img
                    className="w-[40] rounded-full h-[40] text-sky-50 sm:w-[40] p-1 sm:h-[40]"
                    src={visibleProfile[index]?.profilePicture}
                    alt={visibleProfile[index]?.name}
                  />
                ) : (
                  <Plus className="w-full h-full bg-sky-500 text-sky-50 sm:w-full p-1 sm:h-full" />
                )}
                <p className="sm:w-max w-max p-1 min-w-[100] sm:h-max text-sky-50">
                  {visibleProfile[index]?.name || "Unknown"}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col justify-center items-center h-[100vh] w-[20%] px-4 bg-[#2c2c2c] text-white">
        <div className="flex w-full flex-row justify-between items-center border-b-[1px] border-[#6f6e6e] py-2">
          <h1 className="text-xl">Globe Count</h1>
        </div>

        <div className="w-full">
          {Object.keys(groupUsersByContinent(userData)).map((continent) => (
            <div
              className="flex flex-row justify-between items-center border-b-[1px] border-[#6f6e6e] py-2"
              key={continent}
            >
              <h2 className="text-white ">{continent}</h2>
              <ul>{groupUsersByContinent(userData)[continent].length}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobeLayout;

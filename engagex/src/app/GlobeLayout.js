"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Users, Plus } from "lucide-react";
import { drawThreeGeo } from "./threeGeoJSON";
import getStarfield from "./geoStarField";
import * as TWEEN from "@tweenjs/tween.js"; // Import tween.js for smooth animations

const GlobeLayout = () => {
  const canvasRef = useRef(null);
  const [visibleProfile, setVisibleProfile] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [isRotating, setIsRotating] = useState(false); // Flag to prevent multiple rotations

  const userData = [
    { id: 1, name: "Alice", latitude: 37.7749, longitude: -122.4194 },
    { id: 2, name: "Bob", latitude: 51.5074, longitude: -0.1278 },
    { id: 3, name: "Charlie", latitude: 35.6895, longitude: 139.6917 },
    { id: 4, name: "Diana", latitude: -33.8688, longitude: 151.2093 },
    { id: 5, name: "Ethan", latitude: 55.7558, longitude: 37.6173 },
    { id: 6, name: "Fiona", latitude: -22.9068, longitude: -43.1729 },
    { id: 7, name: "George", latitude: 40.6128, longitude: -74.006 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("#2c2c2c");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true; // Enable zoom for touch devices

    // Interaction event listeners
    controls.addEventListener("start", () => setIsInteracting(true));
    controls.addEventListener("end", () => setIsInteracting(false));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeGeometry = new THREE.SphereGeometry(0.6, 24, 16);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: "#2c2c2c",
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globe);

    const bordersMaterial = new THREE.LineBasicMaterial({
      color: "#6f6e6e",
      linewidth: 2,
    });
    const bordersGeometry = new THREE.EdgesGeometry(globeGeometry);
    const borders = new THREE.LineSegments(bordersGeometry, bordersMaterial);
    globeGroup.add(borders);

    const markerGeometry = new THREE.SphereGeometry(0.01, 24, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: "#7CF5FF" });
    const markers = [];

    userData.forEach((user) => {
      const { latitude, longitude } = user;
      const position = getPositionFromLatLon(latitude, longitude);
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(position.x, position.y, position.z);
      marker.userData = user;
      markers.push(marker);
      globeGroup.add(marker);

      // Add click event listener on each marker
      marker.addEventListener("click", () => handleMarkerClick(user));
    });

    const stars = getStarfield({ numStars: 1000, fog: false });
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isInteracting) {
        globeGroup.rotation.y += 0.002; // Rotate only when not interacting
      }

      const cameraForward = new THREE.Vector3();
      camera.getWorldDirection(cameraForward);

      const visibleMarker = markers.find((marker) => {
        const markerPosition = marker.position
          .clone()
          .applyMatrix4(globeGroup.matrixWorld);
        const dotProduct = cameraForward.dot(markerPosition.normalize());
        return dotProduct < -0.85;
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
      TWEEN.update(); // Update tween animations
    };

    fetch("./geojson/ne_110m_land.json")
      .then((response) => response.json())
      .then((text) => {
        const countries = drawThreeGeo({
          json: text,
          radius: 0.6,
          shape: "sphere",
          materialOptions: {
            color: "#7CF5FF",
            wireframe: true,
          },
        });
        globeGroup.add(countries);
      });

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

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
    console.log({ user });
    new TWEEN.Tween(globeGroup.rotation)
      .to({ y: targetRotation.y }, 1000) // Rotate to the marker position smoothly
      .easing(TWEEN.Easing.Quadratic.Out)
      .onComplete(() => {
        setIsRotating(false);
        setVisibleProfile(user); // Show the profile after rotation
      })
      .start();
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
    <div
      className={`relative w-full h-screen ${
        isInteracting ? "overflow-hidden" : "overflow-hidden"
      }`}
    >
      <div className="absolute left-[10] flex justify-between items-center h-16 px-4 bg-gray-800 text-white">
        <div className="border-t-4"></div>
        <div className="flex justify-between items-center w-full    ">
          <p>Total Users</p>
          <p>{userData.length}</p>
        </div>
      </div>

      <div>
        <canvas ref={canvasRef} className="w-full h-full" />

        {visibleProfile && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
            style={{
              left: `${popupPosition.x}px`,
              top: `${popupPosition.y}px`,
            }}
          >
            <Plus className="w-6 h-6 text-green-500 sm:w-8 sm:h-8" />
            <p className="text-sm sm:text-lg font-semibold text-center">
              {visibleProfile.name}
            </p>
          </div>
        )}
      </div>

      <div className="absolute right-[100] top-[100] flex justify-between items-center h-16 px-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Globe Layout</h1>
        <Users className="text-xl text-gray-300" />
      </div>
    </div>
  );
};

export default GlobeLayout;

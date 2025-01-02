"use client";
import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/96394e0900c8983c.jpg?q=20",
];

const Dummy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverSide, setHoverSide] = useState(""); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rippleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midPoint = rect.width / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setHoverSide(mouseX < midPoint ? "left" : "right");
    setMousePos({ x: mouseX, y: mouseY });
    if (rippleRef.current) {
      const xPercent = (mouseX / rect.width) * 100;
      const yPercent = (mouseY / rect.height) * 100;

      rippleRef.current.style.left = `${e.clientX}px`;
      rippleRef.current.style.top = `${e.clientY}px`;
      rippleRef.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    }
  };

  const handleClick = () => {
    if (hoverSide === "left") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 bg-contain bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="absolute inset-0 flex justify-between items-center">
        <div className="flex items-center justify-center h-full w-1/2 text-3xl font-bold text-white opacity-80">
          {hoverSide === "left" && <span>&larr; Prev</span>}
        </div>
        <div className="flex items-center justify-center h-full w-1/2 text-3xl font-bold text-white opacity-80">
          {hoverSide === "right" && <span>Next &rarr;</span>}
        </div>
      </div>

      <div
        ref={rippleRef}
        className="absolute w-40 h-40 bg-cover bg-center rounded-full pointer-events-none ripple-effect"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${
            hoverSide === "left"
              ? images[(currentIndex - 1 + images.length) % images.length]
              : images[(currentIndex + 1) % images.length]
          })`,
        }}
      ></div>

      <style jsx>{`
        .ripple-effect {
          border: 5px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: ripple-wave 2s infinite ease-in-out;
        }

        @keyframes ripple-wave {
          0% {
            transform: scale(1);
            border-radius: 50%;
            border-color: rgba(255, 255, 255, 0.7);
          }
          10% {
            transform: scale(1.11);
            border-radius: 45%;
            border-color: rgba(200, 200, 255, 0.7);
          }
          20% {
            transform: scale(1.12);
            border-radius: 40%;
            border-color: rgba(150, 150, 255, 0.8);
          }
          30% {
            transform: scale(1.13);
            border-radius: 35%;
            border-color: rgba(255, 255, 200, 0.8);
          }
          40% {
            transform: scale(1.14);
            border-radius: 30%;
            border-color: rgba(200, 200, 255, 0.9);
          }
          50% {
            transform: scale(1.15);
            border-radius: 25%;
            border-color: rgba(150, 150, 255, 0.9);
          }
          60% {
            transform: scale(1.14);
            border-radius: 30%;
            border-color: rgba(255, 255, 200, 0.8);
          }
          70% {
            transform: scale(1.13);
            border-radius: 35%;
            border-color: rgba(200, 200, 255, 0.7);
          }
          80% {
            transform: scale(1.12);
            border-radius: 40%;
            border-color: rgba(150, 150, 255, 0.8);
          }
          90% {
            transform: scale(1.11);
            border-radius: 45%;
            border-color: rgba(200, 200, 255, 0.7);
          }
          100% {
            transform: scale(1);
            border-radius: 50%;
            border-color: rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default Dummy;

/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { GradualSpacing } from "./TextAnimationLeft";
import { RightAnimation } from "./TextAnimationRight";
import { motion } from "framer-motion";

export default function HomeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const videoRef = useRef(null);
  const slides = [
    {
      text1: "An Exclusive",
      text2: "Experience App!",
      video: "./popcorn.mp4",
    },
    {
      text1: "Spotlighting Craft,",
      text2: "Fueling Stardom",
      video: "./spotlight.mp4",
    },
    {
      text1: "Only fan are",
      text2: "STARMAKERS!",
      video: "./Onlyfans.mp4",
    },
    {
      text1: "Stars rewards",
      text2: "True Fans!",
      video: "./money.mp4",
    },
    {
      text1: "EngageX App ",
      text2: "For Every Moment!",
      video: "./HomeBannerTwo.mp4",
    },
  ];

  const handleVideoEnd = () => {
    if (isAnimating) return;
    nextSlide();
  };

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsAnimating(false);
    }, 1000);
  });

  const handleStarClick = () => {
    if (!isAnimating) {
      nextSlide();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, isAnimating, nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        key={slides[currentIndex].video}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover lg:object-cover transition-opacity duration-1000 `}
        src={slides[currentIndex]?.video}
        ref={videoRef}
        onEnded={handleVideoEnd}
      ></video>
      <div className={`absolute inset-0 flex items-center justify-center`}>
        <svg
          onClick={handleStarClick}
          viewBox="0 0 408 362"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-1000 ease-in ${
            isScaled && "scale-[17]"
          } cursor-pointer lg:w-[360px] w-[300px] lg:h-[310px] h-[300px]`}
          style={{ pointerEvents: "auto" }}
          width={468}
          height={362}
        >
          <defs>
            <clipPath
              id="starClip"
              // className={`transition-transform duration-1000 ease-in ${
              //   isScaled && "scale-[17]"
              // } translate-x-100 cursor-pointer lg:w-[360] w-[300] lg:h-[310] h-[300]`}
            >
              <path
                // className={`transition-transform translate-x-100 duration-1000 ease-in ${
                //   isScaled && "scale-[17]"
                // } transition-transform duration-1000 cursor-pointer lg:w-[360] w-[300] lg:h-[310] h-[300]`}
                d="M2.97802 349.139C-0.604362 353.312 1.48536 357.833 2.97802 359.572C7.15746 364.17 14.3151 360.352 17.3715 357.868L65.6696 324.975L134.652 277.71L203.847 230.446L269.951 264.723L293.087 276.859L314.41 287.93C320.466 292.018 324.468 289.633 325.712 287.93C329.806 283.416 326.707 278.243 324.646 276.22L316.863 267.598L286.583 233.64L264.3 208.411C254.747 195.466 255.273 181.159 256.73 175.623C258.009 165.063 266.077 155.611 269.951 152.204L273.895 147.946L287.009 134.64L314.624 106.324L338.4 82.1591L374.97 44.6881L392.668 26.5914C396.045 23.043 403.224 15.5417 404.929 13.9237C407.062 11.9011 408.341 7.43013 404.716 3.17207C401.816 -0.234378 397.395 1.11401 395.547 2.21401L389.47 6.36561L299.91 67.4688L248.094 102.811L204.06 132.724L122.497 90.0365C114.074 85.6365 96.1838 76.2617 92.0044 73.9623C87.825 71.6629 84.2213 73.643 82.9418 74.9204C77.6536 79.5191 80.7384 84.7849 82.9418 86.8429L120.152 128.572L141.902 153.056C146.806 160.188 151.497 164.978 151.711 182.011C151.881 195.636 141.689 208.127 136.571 212.669L84.861 265.362C59.0593 291.549 6.5604 344.966 2.97802 349.139Z"
              />
            </clipPath>
          </defs>
          <foreignObject
            x="0"
            y="0"
            width="408"
            height="362"
            clipPath="url(#starClip)"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`inset-0 h-full w-full object-none lg:object-none transition-opacity duration-1000`}
              src={slides[(currentIndex + 1) % slides.length]?.video}
            ></video>
          </foreignObject>
        </svg>
      </div>
      <div className="absolute bottom-[230px] lg:bottom-8 m-auto w-full">
        <div className="w-[90%] m-auto">
          <motion.div
            key={`text1-${currentIndex}`}
            initial={{
              x: -230,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex justify-center lg:justify-start">
              <h1 className="text-white text-[20px] lg:text-[125px] font-medium">
                <GradualSpacing text={slides[currentIndex].text1} />
              </h1>
            </div>
          </motion.div>
          <motion.div
            key={`text2-${currentIndex}`}
            initial={{
              x: 230,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex justify-center lg:justify-end mt-[0px] lg:mt-[-20px]">
              <h1 className="text-white text-[30px] lg:text-[125px] font-medium">
                <RightAnimation text={slides[currentIndex].text2} />
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

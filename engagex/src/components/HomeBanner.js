// "use client";
// import { useState, useRef, useEffect } from "react";

// export default function HomeBanner() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showStarVideo, setShowStarVideo] = useState(false);
//   const [textAnimation, setTextAnimation] = useState(false);
//   const [isScaled, setIsScaled] = useState(false);
//   const videoRef = useRef(null);

//   const slides = [
//     {
//       text1: "EngageX App ",
//       text2: "For Every Moment!",
//       video: "./HomeBannerTwo.mp4",
//     },
//     {
//       text1: "Spotlighting Craft,",
//       text2: "Fueling Stardom",
//       video: "./spotlight.mp4",
//     },
//     // Additional slides can be added here
//   ];

//   const handleVideoEnd = () => {
//     if (isAnimating) return;
//     setShowStarVideo(true);
//     setIsAnimating(true);
//     setTextAnimation(true);
//     setIsScaled(true); // Enlarge instantly when video ends

//     // After a short delay, reset the scaling and prepare for the next video
//     setTimeout(() => {
//       setIsScaled(false); // Reset scale to normal
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//       setShowStarVideo(false);
//       setTextAnimation(false);
//       setIsAnimating(false);
//     }, 2000); // After 2 seconds, reset and move to next video
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <video
//         key={slides[currentIndex].video}
//         autoPlay
//         muted
//         playsInline
//         className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//           isAnimating ? "opacity-50" : "opacity-100"
//         }`}
//         src={slides[currentIndex]?.video}
//         ref={videoRef}
//         onEnded={handleVideoEnd}
//       ></video>

//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
//         <div
//           className={`relative transition-transform duration-500 ease-in ${
//             isScaled ? "scale-[50] opacity-100" : "scale-[100%] opacity-100"
//           }`}
//         >
//           <svg
//             width="326px"
//             height="361px"
//             viewBox="0 0 408 362"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <clipPath id="customClip">
//                 <path d="M2.97802 349.139C-0.604362 353.312 1.48536 357.833 2.97802 359.572C7.15746 364.17 14.3151 360.352 17.3715 357.868L65.6696 324.975L134.652 277.71L203.847 230.446L269.951 264.723L293.087 276.859L314.41 287.93C320.466 292.018 324.468 289.633 325.712 287.93C329.806 283.416 326.707 278.243 324.646 276.22L316.863 267.598L286.583 233.64L264.3 208.411C254.747 195.466 255.273 181.159 256.73 175.623C258.009 165.063 266.077 155.611 269.951 152.204L273.895 147.946L287.009 134.64L314.624 106.324L338.4 82.1591L374.97 44.6881L392.668 26.5914C396.045 23.043 403.224 15.5417 404.929 13.9237C407.062 11.9011 408.341 7.43013 404.716 3.17207C401.816 -0.234378 397.395 1.11401 395.547 2.21401L389.47 6.36561L299.91 67.4688L248.094 102.811L204.06 132.724L122.497 90.0365C114.074 85.6365 96.1838 76.2617 92.0044 73.9623C87.825 71.6629 84.2213 73.643 82.9418 74.9204C77.6536 79.5191 80.7384 84.7849 82.9418 86.8429L120.152 128.572L141.902 153.056C146.806 160.188 151.497 164.978 151.711 182.011C151.881 195.636 141.689 208.127 136.571 212.669L84.861 265.362C59.0593 291.549 6.5604 344.966 2.97802 349.139Z" />
//               </clipPath>
//             </defs>
//             <foreignObject
//               x="0"
//               y="0"
//               width="558"
//               height="362"
//               clipPath="url(#customClip)"
//             >
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className={`absolute inset-0 ${
//                   isAnimating ? "object-contain" : "object-none"
//                 } object-center`}
//                 src={slides[(currentIndex + 1) % slides.length]?.video}
//               ></video>
//             </foreignObject>
//           </svg>
//         </div>
//       </div>

//       <div className="self-baseline w-[95%] absolute bottom-8 left-10">
//         <div className="flex justify-start">
//           <h1 className="text-white md:text-[125px] font-medium">
//             {slides[currentIndex].text1}
//           </h1>
//         </div>

//         <div className="flex justify-end mt-[-20px]">
//           <h1 className="text-white text-[64px] md:text-[125px] font-medium  ">
//             {slides[currentIndex].text2}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useRef } from "react";

export default function HomeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showStarVideo, setShowStarVideo] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    {
      text1: "EngageX App ",
      text2: "For Every Moment!",
      video: "./HomeBannerTwo.mp4",
    },
    {
      text1: "Spotlighting Craft,",
      text2: "Fueling Stardom",
      video: "./spotlight.mp4",
    },
  ];

  const handleVideoEnd = () => {
    if (isAnimating) return;
    setShowStarVideo(true);
    setIsAnimating(true);
    setTextAnimation(true);
    setIsScaled(true);

    setTimeout(() => {
      setIsScaled(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setShowStarVideo(false);
      setTextAnimation(false);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        key={slides[currentIndex].video}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isAnimating ? "opacity-50" : "opacity-100"
        }`}
        src={slides[currentIndex]?.video}
        ref={videoRef}
        onEnded={handleVideoEnd}
      ></video>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in ${
          isScaled ? "scale-[16]" : "scale-[1]"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <svg
          width="358"
          height="332"
          viewBox="0 0 408 362"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="starClip">
              <path d="M2.97802 349.139C-0.604362 353.312 1.48536 357.833 2.97802 359.572C7.15746 364.17 14.3151 360.352 17.3715 357.868L65.6696 324.975L134.652 277.71L203.847 230.446L269.951 264.723L293.087 276.859L314.41 287.93C320.466 292.018 324.468 289.633 325.712 287.93C329.806 283.416 326.707 278.243 324.646 276.22L316.863 267.598L286.583 233.64L264.3 208.411C254.747 195.466 255.273 181.159 256.73 175.623C258.009 165.063 266.077 155.611 269.951 152.204L273.895 147.946L287.009 134.64L314.624 106.324L338.4 82.1591L374.97 44.6881L392.668 26.5914C396.045 23.043 403.224 15.5417 404.929 13.9237C407.062 11.9011 408.341 7.43013 404.716 3.17207C401.816 -0.234378 397.395 1.11401 395.547 2.21401L389.47 6.36561L299.91 67.4688L248.094 102.811L204.06 132.724L122.497 90.0365C114.074 85.6365 96.1838 76.2617 92.0044 73.9623C87.825 71.6629 84.2213 73.643 82.9418 74.9204C77.6536 79.5191 80.7384 84.7849 82.9418 86.8429L120.152 128.572L141.902 153.056C146.806 160.188 151.497 164.978 151.711 182.011C151.881 195.636 141.689 208.127 136.571 212.669L84.861 265.362C59.0593 291.549 6.5604 344.966 2.97802 349.139Z" />
            </clipPath>
          </defs>
          <foreignObject
            x="1"
            y="1"
            width="408"
            height="362"
            clipPath="url(#starClip)"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-fill"
              src={slides[(currentIndex + 1) % slides.length]?.video}
            ></video>
          </foreignObject>
        </svg>
      </div>

      <div className="absolute bottom-8 left-10 w-[95%]">
        <div className="flex justify-start">
          <h1 className="text-white text-[125px] font-medium">
            {slides[currentIndex].text1}
          </h1>
        </div>

        <div className="flex justify-end mt-[-20px]">
          <h1 className="text-white text-[125px] font-medium">
            {slides[currentIndex].text2}
          </h1>
        </div>
      </div>
    </div>
  );
}

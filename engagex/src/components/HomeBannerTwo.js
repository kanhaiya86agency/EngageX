"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import comingSoonImage from "../../public/ComingSoon.png";

export default function HomeBannerTwo() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 50% of the video is in or out of view
  });

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-indigo-600 bg-opacity-25">
        <div className="absolute inset-0 h-full w-full" ref={ref}>
          {inView ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="https://hypegymapp.s3.ap-south-1.amazonaws.com/ladies.mp4"
            ></video>
          ) : null}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-5">
          <h3 className="text-white text-2xl md:text-[55px] mb-2">
            Stars Are Rehearsing....
          </h3>
          <div className="mt-5 mb-5">
            <Image
              src={comingSoonImage}
              alt="commit soon"
              className="w-[600px]"
            />
          </div>
          <button className="gradient-border-button mt-6">
            <span className="button-text">Join now</span>
          </button>
        </div>

        <style>{`
        .gradient-border-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          border-radius: 50px;
          cursor: pointer;
          overflow: hidden;
        }
        .gradient-border-button:hover {
          box-shadow: 2px 4px 8px rgba(137, 135, 135, 0.5);
        }
        .gradient-border-button::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50px;
          padding: 3px;
          background: linear-gradient(
            90deg,
            rgb(66, 235, 237),
            rgb(8, 51, 241),
            rgba(131, 131, 131, 0.75)
          );
          background-size: 200% 200%;
          animation: gradientAnimation 2s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          z-index: 0;
        }

        .button-text {
          position: relative;
          z-index: 1;
          color: white;
          font-size: 20px;
          font-weight: bold;
          border-radius: 50px;
          padding: 0.5rem 1rem;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      </div>
    </>
  );
}

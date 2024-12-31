"use client"
// components/NextVideoSlide.js
import { useEffect, useState } from 'react';
import styles from "./NextVideoSlide.module.css";

const NextVideoSlide = ({ videoSrc, svgFilePath }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnlarged(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${isEnlarged ? styles.enlarged : ''}`}>
      <div className={styles.svgBackground}>
        <img src={svgFilePath} alt="SVG Background" />
      </div>

      <div className={styles.videoWrapper}>
        <video className={styles.video} autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default NextVideoSlide;

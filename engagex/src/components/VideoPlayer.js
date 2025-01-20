"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useIsVisible } from "@/hooks/useIsVisible";

const VideoPlayer = ({ src, poster, style, alt }) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef(null);
  console.log({ videoRef });

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      console.log("play it on the hover");
      await videoRef.current.play();
    } catch (e) {
      // do nothing
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      console.log("pause it on the hover");
      videoRef.current.pause();
    } catch (e) {
      // do nothing
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        minHeight: "50px",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload="none"
        playsInline
        poster={poster}
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
};

export default VideoPlayer;

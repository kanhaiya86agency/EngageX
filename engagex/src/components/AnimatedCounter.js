"use client";

import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ from, to, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return;
    }

    const controls = animate(from, to, {
      duration: 3,
      ease: "easeInOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = Number(value)
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCounter;

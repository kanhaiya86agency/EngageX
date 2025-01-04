"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";

export function GradualSpacing({ text }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i, arr) => (
          <motion.h1
            ref={ref}
            key={i}
            initial={{
              WebkitTextStroke: "1px white",
              color: "transparent",
            }}
            animate={
              isInView
                ? {
                    WebkitTextStroke: "0px",
                    color: "white",
                  }
                : {}
            }
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className=""
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

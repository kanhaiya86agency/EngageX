"use client";
import { useState, useEffect } from "react";
import HomeBanner from "@/components/HomeBanner";
import HomeBannerTwo from "@/components/HomeBannerTwo";
import Navbar from "@/components/Navbar";
import Earth from "./world/Earth";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["#section1", "#section2", "#section3"];

  const handleScroll = () => {
    let nextSection;

    if (currentSection === sections.length - 1) {
      nextSection = 0;
    } else {
      nextSection = currentSection + 1;
    }

    const targetElement = document.querySelector(sections[nextSection]);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setCurrentSection(nextSection);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newSection = Math.round(scrollPosition / windowHeight);
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  return (
    <div className="relative h-screen w-full">
      <button
        className="fixed bottom-10 left-10 z-10 animate-bounce"
        onClick={handleScroll}
      >
        <ArrowDown
          size={35}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 5,
            borderRadius: "20px",
            cursor: "pointer",
            transform:
              currentSection === sections.length - 1
                ? "rotate(180deg)"
                : "none",
          }}
        />
      </button>

      <Navbar />

      {/* Sections */}
      <div id="section1" className="h-screen">
        <HomeBanner />
      </div>
      <div id="section2" className="h-screen">
        <Earth />
      </div>
      <div id="section3" className="h-screen">
        <HomeBannerTwo />
      </div>
    </div>
  );
}

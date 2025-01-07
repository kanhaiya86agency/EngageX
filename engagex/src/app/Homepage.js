"use client";
import { useState, useEffect } from "react";
import HomeBanner from "@/components/HomeBanner";
import HomeBannerTwo from "@/components/HomeBannerTwo";
import Navbar from "@/components/Navbar";
import Earth from "./world/Earth";
import { ArrowDown } from "lucide-react";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["section1", "section2", "section3"];

  const handleScroll = () => {
    let nextSection;

    if (currentSection === sections.length - 1) {
      nextSection = 0;
    } else {
      nextSection = currentSection + 1;
    }

    const targetElement = document.getElementById(sections[nextSection]);

    if (targetElement) {
      if (nextSection === sections.length - 1) {
        const footerHeight =
          document.querySelector("footer")?.offsetHeight || 0;
        const scrollOffset =
          targetElement.offsetTop + targetElement.offsetHeight - footerHeight;

        window.scrollTo({ top: scrollOffset, behavior: "smooth" });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    setCurrentSection(nextSection);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newSection = Math.round(scrollPosition / windowHeight);

      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [currentSection]);

  return (
    <div className="relative h-screen w-full">
      {/* Scroll Button */}
      <button
        className="fixed bottom-10 left-10 z-10 animate-bounce"
        onClick={handleScroll}
      >
        <ArrowDown
          size={45}
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
      <div id="section1" className="h-screen">
        <HomeBanner />
      </div>
      <div id="section2" className="h-screen">
        <Earth />
      </div>
      <div id="section3" className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          <HomeBannerTwo />
        </div>
        <Footer />
      </div>
    </div>
  );
}

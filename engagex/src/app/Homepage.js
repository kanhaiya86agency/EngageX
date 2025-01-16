// "use client";
// import { useState, useEffect, useRef } from "react";
// import HomeBanner from "@/components/HomeBanner";
// import HomeBannerTwo from "@/components/HomeBannerTwo";
// import Navbar from "@/components/Navbar";
// import Earth from "./world/Earth";
// import Footer from "@/components/Footer";
// import { ArrowDown } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function HomePage() {
//   const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
//   const sectionsRef = useRef([]);
//   const arrowRef = useRef(null);

//   // Register the plugin
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionsRef.current.forEach((section) => {
//       const content = section.querySelector(".content");

//       gsap.fromTo(
//         content,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top center", // When the section comes into view
//             end: "bottom center", // When it leaves the view
//             toggleActions: "play none none reverse",
//           },
//         }
//       );

//       // Pin sections and create scroll effect
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top", // When the top of the section hits the top of the viewport
//         end: "bottom top", // When the bottom of the section hits the top of the viewport
//         pin: true, // Pin this section while scrolling
//         pinSpacing: false, // Prevent adding extra space after pinning
//         scrub: true, // Smooth scrolling
//       });
//     });

//     // Control arrow rotation across the entire scroll
//     ScrollTrigger.create({
//       trigger: sectionsRef.current[sectionsRef.current.length - 1],
//       start: "top top", // When the first section reaches the top of the viewport
//       end: "bottom bottom", // When the last section hits the bottom of the viewport
//       scrub: true,
//       onUpdate: ({ progress }) => {
//         if (arrowRef.current) {
//           // Arrow rotates progressively based on the overall scroll progress
//           const rotation = progress > 0.5 ? 180 : 0; // Rotate upwards on last section
//           gsap.to(arrowRef.current, { rotation, duration: 0.3 });
//         }
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   // Handle navbar scroll effect
//   useEffect(() => {
//     const handleScrollEvent = () => {
//       setIsNavbarScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScrollEvent);
//     return () => window.removeEventListener("scroll", handleScrollEvent);
//   }, []);

//   return (
//     <div className="relative h-auto w-full">
//       {/* Scroll Button */}
//       <button
//         className="fixed bottom-5 lg:bottom-10 left-5 lg:left-10 z-10 animate-bounce"
//         onClick={() => {
//           const nextSection =
//             sectionsRef.current.find(
//               (section) =>
//                 section.getBoundingClientRect().top > window.innerHeight * 0.2
//             ) || sectionsRef.current[0];

//           nextSection.scrollIntoView({ behavior: "smooth" });
//         }}
//       >
//         <ArrowDown
//           size={45}
//           ref={arrowRef}
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             padding: 5,
//             borderRadius: "20px",
//             cursor: "pointer",
//             transformOrigin: "center", // Ensure smooth rotation from the center
//           }}
//         />
//       </button>

//       <Navbar isNavbarScrolled={isNavbarScrolled} />

//       {/* Section 1 */}
//       <div
//         id="section1"
//         className="h-screen bg-black"
//         ref={(el) => (sectionsRef.current[0] = el)}
//       >
//         <div className="content">
//           <HomeBanner />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div
//         id="section2"
//         className="lg:h-screen bg-black md:h-auto h-auto"
//         ref={(el) => (sectionsRef.current[1] = el)}
//       >
//         <div className="content">
//           <Earth />
//         </div>
//       </div>

//       <div
//         id="section3"
//         className=""
//         ref={(el) => (sectionsRef.current[2] = el)}
//       >
//         <div className="">
//           <HomeBannerTwo />
//         </div>
//       </div>

//       <div
//         id="section4"
//         className="min-h-screen bg-black flex flex-col justify-between "
//         ref={(el) => (sectionsRef.current[3] = el)}
//       >
//         <div className="content flex-grow">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import HomeBanner from "@/components/HomeBanner";
import HomeBannerTwo from "@/components/HomeBannerTwo";
import Navbar from "@/components/Navbar";
import Earth from "./world/Earth";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurKeyValue from "@/components/OurKeyValue/OurKeyValue";

export default function HomePage() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const sectionsRef = useRef([]);
  const arrowRef = useRef(null);

  // Register the plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionsRef.current.forEach((section, index) => {
      const content = section.querySelector(".content");

      gsap.fromTo(
        content,
        { opacity: 1 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center", // When the section comes into view
            end: "bottom center", // When it leaves the view
            toggleActions: "play none none reverse",
          },
        }
      );

      // Pin all sections except the last one
      if (index !== sectionsRef.current.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top", // When the top of the section hits the top of the viewport
          end: "bottom top", // When the bottom of the section hits the top of the viewport
          pin: true, // Pin this section while scrolling
          pinSpacing: false, // Prevent adding extra space after pinning
          scrub: true, // Smooth scrolling
        });
      }
    });

    // Control arrow rotation across the entire scroll
    ScrollTrigger.create({
      trigger: sectionsRef.current[sectionsRef.current.length - 1],
      start: "top top", // When the first section reaches the top of the viewport
      end: "bottom bottom", // When the last section hits the bottom of the viewport
      scrub: true,
      onUpdate: ({ progress }) => {
        if (arrowRef.current) {
          // Arrow rotates progressively based on the overall scroll progress
          const rotation = progress > 0.5 ? 180 : 0; // Rotate upwards on last section
          gsap.to(arrowRef.current, { rotation, duration: 0.3 });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsNavbarScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="relative h-auto w-full">
      {/* Scroll Button */}
      <button
        className="fixed bottom-5 lg:bottom-10 left-5 lg:left-10 z-10 animate-bounce"
        onClick={() => {
          const nextSection =
            sectionsRef.current.find(
              (section) =>
                section.getBoundingClientRect().top > window.innerHeight * 0.2
            ) || sectionsRef.current[0];

          nextSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDown
          size={45}
          ref={arrowRef}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 5,
            borderRadius: "20px",
            cursor: "pointer",
            transformOrigin: "center", // Ensure smooth rotation from the center
          }}
        />
      </button>

      <Navbar isNavbarScrolled={isNavbarScrolled} />

      <div
        id="section1"
        className="h-screen bg-black"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="content">
          <HomeBanner />
        </div>
      </div>

      <div
        id="section2"
        className="lg:h-screen bg-black md:h-auto h-auto"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="content">
          <Earth />
        </div>
      </div>

      <div
        id="section3"
        className="lg:h-screen bg-black md:h-auto h-auto"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="content">
          <OurKeyValue />
        </div>
      </div>

      <div
        id="section4"
        className="h-[110%]"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="content flex-grow">
          <HomeBannerTwo />
          <Footer />
        </div>
      </div>
    </div>
  );
}

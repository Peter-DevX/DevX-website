import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Handle window resize to detect mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let rafId = null;
    const animate = () => {
      if (isMobile) return; // Skip animation on mobile

      // easing toward mouse
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative overflow-x-hidden">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <Blog />
      <ContactUs />
      <Footer theme={theme} />

      {/* custom cursor ring (hidden on mobile) */}
      {!isMobile && (
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-8 w-8 rounded-full border border-primary pointer-events-none z-[9999]"
          style={{ transform: "transform 0.1s ease-out" }}
        ></div>
      )}

      {/* custom cursor dot (hidden on mobile) */}
      {!isMobile && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        ></div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOPen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <div className="flex justify-center">
        <img
          src={theme === "dark" ? assets.logo : assets.logo}
          alt="logo"
          className="w-32 sm:w-20 sm:h-10"
        />
        <h2 className="pt-2 dark:text-white">DevX Solutions</h2>
      </div>
      {/* Desktop links */}
      <div className="hidden sm:flex text-gray-700 dark:text-white sm:text-sm items-center gap-5">
        <a href="#" className="hover:border-b">
          Home
        </a>
        <a href="#services" className="hover:border-b">
          Services
        </a>
        <a href="#our-work" className="hover:border-b">
          Our Work
        </a>
        <a href="#blog" className="hover:border-b">
          Blog
        </a>
        <a href="#contact-us" className="hover:border-b">
          Contact Us
        </a>
      </div>

      {/* Mobile sidebar (renders when open) */}
      {sidebarOpen && (
        <div className="lg:hidden fixed overflow-hidden top-0 right-0 bottom-0 w-60 h-199 bg-primary text-white p-8 z-50 flex flex-col gap-6">
          <img
            src={assets.close_icon}
            alt="close"
            className="w-5 self-end static"
            onClick={() => setSidebarOPen(false)}
          />
          <a onClick={() => setSidebarOPen(false)} href="#">
            Home
          </a>
          <a onClick={() => setSidebarOPen(false)} href="#services">
            Services
          </a>
          <a onClick={() => setSidebarOPen(false)} href="#our-work">
            Our Work
          </a>
          <a onClick={() => setSidebarOPen(false)} href="#blog">
            Blog
          </a>
          <a onClick={() => setSidebarOPen(false)} href="#contact-us">
            Contact Us
          </a>
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSidebarOPen(true)}
          className="w-8 sm:hidden"
          alt="menu"
        />
        <a
          href="mailto:info@devxsolutions.co"
          className="text-sm hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} alt="contact us" width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;

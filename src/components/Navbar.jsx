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
          className="2-32 sm:w-20 sm:h-10"
        />
        <h2 className="pt-2 dark:text-white">DevX Solutions</h2>
      </div>
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-fulll max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="close-icon"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOPen(false)}
        />

        <a
          onClick={() => setSidebarOPen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOPen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOPen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOPen(false)}
          href="#blog"
          className="sm:hover:border-b"
        >
          Blog
        </a>
        <a
          onClick={() => setSidebarOPen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
        
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSidebarOPen(true)}
          className="w-8 sm:hidden"
          alt=""
        />
        <a
          href="mailto:info@devxsolutions.co"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} alt="contact us" width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;

import React, { useRef, useState } from "react";
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);
  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientReact();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, delay: index*0.2}}
    viewport={{once: true}}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseDown={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 w-75 h-75 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div className="flex items-center gap-10 hover:p-0.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className=" flex p-8 bg-gray-100 dark:bg-gray-700 pl-4 w-xl">
          <img
            src={service.icon}
            alt=""
            className="max-w-24 bg-white border-[8.5px] border-gray-300 dark:bg-gray-900 rounded-full m-2"
          />
          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

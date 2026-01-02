import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden w-full sm:w-80 m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 w-[260px] h-[260px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          top: Math.max(0, position.y - 120),
          left: Math.max(0, position.x - 120),
        }}
      />

      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6">
          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <img
              src={service.icon}
              alt=""
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

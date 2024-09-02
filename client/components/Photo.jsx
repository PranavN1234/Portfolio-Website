"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative z-20 flex justify-center items-center"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[400px] h-[400px] xl:w-[506px] xl:h-[506px] flex justify-center items-center"
        >
          <Image
            src="/assets/edited.png" // Ensure the image path is correct
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="absolute w-[410px] xl:w-[510px] h-[410px] xl:h-[510px] z-10"
          fill="transparent"
          viewBox="0 0 526 526"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="263"
            cy="263"
            r="260"
            stroke="#A2707A" // Pinkish color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

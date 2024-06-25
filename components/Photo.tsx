"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full max-h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="absolute w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </motion.div>
        <motion.div>
          <motion.svg
            viewBox="0 0 506 506"
            xmlns={"http://www.w3.org/2000/svg"}
            fill="transparent"
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
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
          >
            <motion.circle cx={"250"} cy={"250"} r="270" stroke={"#00ff99"} />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

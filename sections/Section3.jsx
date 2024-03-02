"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { left } from "@/utils/motion";

const Section3 = () => {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <Image
        src="/girl1.jpg"
        width={1000}
        height={1000}
        className="md:w-[50vw] sm:w-[100vw] md:h-[100vh] sm:h-[50vh]"
      />
      <Image
        src="/girl2.jpg"
        width={1000}
        height={1000}
        className="md:w-[50vw] sm:w-[100vw] md:h-[100vh] sm:h-[50vh]"
      />
      <motion.div
        variants={left}
        initial="initial"
        whileInView="exit"
        className="absolute mt-[550px] md:right-40 sm:right-20 z-[100]"
      >
        <Image 
          src="/glass.jpg"
          width={1000}
          height={1000}
          className="w-[200px]"
        />
      </motion.div>
    </div>
  );
};

export default Section3;

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Nails = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["3000%", "-1000%"]
  );
  const backgroundY2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-3000%", "1000%"]
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/girl6.jpg" width={300} height={400} className="absolute" />
      <h1 className="text-red-400 text-[60px] font-dancing -rotate-12 mt-[440px] mr-40 absolute">
        Cure
      </h1>
      <motion.h1
        style={{ y: backgroundY }}
        className="text-white text-[40px] sm:text-[30px] font-bold font-playfair leading-[30px] md:mb-0 sm:mb-80 ml-6 z-[100]"
      >
        Life is too short
      </motion.h1>
      <hr className="md:flex sm:hidden bg-red-400 border-none w-[150px] h-[2px] z-[100] mx-4" />
      <motion.h1
        style={{ y: backgroundY2 }}
        className="text-white text-[40px] sm:text-[30px] font-bold font-playfair leading-[30px] md:mt-0 sm:mt-80 mr-6 flex text-end z-[100]"
      >
        for unpolished nails.
      </motion.h1>
    </div>
  );
};

export default Nails;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { textUp, textZoomOut } from "@/utils/motion";
import Image from "next/image";

const Services = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["100%", "-40%"]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.h1
        variants={textZoomOut}
        initial="initial"
        whileInView="exit"
        className="text-white text-[40px] font-playfair font-bold mb-10"
      >
        Our Services
      </motion.h1>

      <div className="">
        <Image
          src="/hand.jpg"
          width={1000}
          height={1000}
          className="w-[300px] h-[400px]"
        />
        <h1 className="text-[#8c9a65] font-bold mt-2">Manis</h1>
      </div>

      <motion.div 
        className="absolute flex md:flex-row sm:flex-col md:mb-0 sm:mb-80"
        style={{y: backgroundY}}
      >
        <div className="mx-28 my-10 mt-[150px]">
          <Image
            src="/legs.jpg"
            width={1000}
            height={1000}
            className="w-[180px] h-[200px]"
          />
          <h1 className="text-[#8c9a65] font-bold mt-2">Pedis</h1>
        </div>
        <div className="mx-28 my-10 mb-[1000px]">
          <h1 className="text-[#8c9a65] font-bold mb-2 flex justify-end">
            Waxing
          </h1>
          <Image
            src="/skin.jpg"
            width={1000}
            height={1000}
            className="w-[160px] h-[180px]"
          />
        </div>
      </motion.div>

      <motion.div
        variants={textUp}
        initial="initial"
        whileInView="exit"
        className="md:ml-[550px]"
      >
        <h1 className="text-white text-[40px] leading-[40px] font-playfair font-bold w-[300px]">
          Nails. Wax. We are Cure.
        </h1>
        <button className="text-red-400 mt-4">
          See Our Menu
        </button>
      </motion.div>
    </div>
  );
};

export default Services;

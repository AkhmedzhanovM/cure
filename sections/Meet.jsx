"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { textUp, up } from "@/utils/motion";
import { useRef } from "react";
import Image from "next/image";

const Meet = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["200%", "-1000%"]);

  return (
    <motion.section>
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="md:mb-0 sm:mb-40"
          variants={up}
          initial="initial"
          whileInView="exit"
        >
          <Image src="/hands2.jpg" width={300} height={300} className="" />
        </motion.div>
        
        <motion.div
          className="absolute md:mr-80 sm:mr-40 md:mt-0 sm:mt-60 z-[100]"
          style={{ y: backgroundY }}
        >
          <motion.div 
            variants={up}
            initial="initial"
            whileInView="exit"
          >
            <Image
              src="/earring.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[200px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute md:ml-80 sm:ml-0 md:mb-60 sm:mt-20 z-[100]"
          style={{ y: backgroundY }}
        >
          <motion.h1
            className="text-white font-playfair font-bold w-[200px] text-[40px] leading-[40px]"
            variants={textUp}
            initial="initial"
            whileInView="exit"
          >
            Hi, meet Cure.
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="absolute md:ml-80 sm:ml-10 md:mt-60 sm:mt-[500px]"
          style={{ y: backgroundY }}
        >
          <p className="text-white w-[300px] font-bold">
            A CUSTOMIZABLE, NATURAL PRODUCT-BASED, NAIL & WAX BOUTIQUE FOCUSED
            ON YOU.
          </p>
        </motion.div>
        <div className="absolute md:mr-80 sm:mr-64 md:mt-44 sm:mt-80">
          <h1 className="text-red-400 font-dancing text-[50px] -rotate-12">
            Cure
          </h1>
        </div>
      </div>
    </motion.section>
  );
};

export default Meet;

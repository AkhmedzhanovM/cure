"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { zoomOut } from "@/utils/motion";
import { useRef } from "react";
import backgroundImage from "/public/hands.jpg";
import { Navbar } from "../sections";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <motion.section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      variants={zoomOut}
      initial="initial"
      whileInView="enter"
      viewport={{once: true}}
    >
      <Navbar />
      <motion.h1
        className="text-white h-[80%] flex items-center justify-center md:text-[40px] sm:text-[15px]"
        ref={ref}
        style={{ y: textY }}
      >
        Build{" "}
        <span className="text-red-400 -rotate-12 font-dancing md:text-[40px] sm:text-[20px]">
          your own
        </span>{" "}
        type of nail, wax & facial boutique.
      </motion.h1>
    </motion.section>
  );
};

export default Hero;

"use client";

import backgroundImage from "/public/invite.jpg";
import { motion } from "framer-motion";
import { up } from "@/utils/motion";

const Invite = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2 className="text-white text-[15px] pt-10 md:pl-20 sm:pl-6">
        CALLING ALL NAIL TECHS AND WAXING SPECIALISTS
      </h2>
      <motion.h1
        className="text-white text-[40px] font-bold font-playfair w-[300px] md:mt-52 sm:mt-10 md:pl-20 sm:pl-6"
        variants={up}
        initial="initial"
        whileInView="exit"
      >
        We invite you to join Team Cure.
      </motion.h1>
      <div className="flex md:flex-row sm:flex-col justify-between pt-10 md:px-20 sm:px-6">
        <div className="">
          <button className="text-white w-[100px]">Apply Now</button>
        </div>
        <div className="md:pt-0 sm:pt-52">
          <h1 className="text-red-500 text-[40px] font-dancing -rotate-12 absolute">
            Write Us
          </h1>
          <button className="text-white z-[-100]">
            akhmedzhanovmohammed@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invite;

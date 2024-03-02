"use client";

import { motion } from "framer-motion";
import { textUp } from "@/utils/motion";
import Image from "next/image";

const Culture = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <motion.div
        variants={textUp}
        initial="initial"
        whileInView="exit"
        className="z-[100]"
      >
        <h1 className="text-white font-playfair font-bold text-[40px] leading-[40px] w-[370px]">
          Clean is the culture.{" "}
          <span className="text-red-400 font-dancing -rotate-12">Cure</span> is
          the name.
        </h1>
        <p className="text-gray-500 w-[250px] mt-10 ml-16">
          We focus on what others don’t: your health & your happiness. Cure uses
          hospital grade sanitation methods, including sterilizing all metal
          tools used in services in our Autoclave and offering customers the
          option to take all single use tools home after each service.
        </p>
        <button className="text-white mt-10 ml-16">Book an Appointment</button>
      </motion.div>

      <div className="absolute md:mr-[820px] sm:mr-40 md:mb-0 sm:mb-96">
        <Image
          src="/hands3.jpg"
          width={1000}
          height={1000}
          className="md:w-[500px] sm:w-[220px] md:h-[500px] sm:h-[220px]"
        />
      </div>

      <div className="absolute md:ml-[800px] sm:ml-40 md:mt-0 sm:mt-[600px] z-[100]">
        <Image
          src="/girl3.jpg"
          width={1000}
          height={1000}
          className="w-[180px]"
        />
      </div>

      <div className="absolute md:mt-80 sm:mt-[700px] md:ml-[500px] sm:-ml-32">
        <Image
          src="/girl4.jpg"
          width={1000}
          height={1000}
          className="w-[200px]"
        />
      </div>
    </section>
  );
};

export default Culture;

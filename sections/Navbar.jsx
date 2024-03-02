"use client";

import { navbar } from "../constants";
import Image from "next/image";
import menu from "../public/menu.svg";
import close from "../public/close.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { navbarOpacity } from "@/utils/motion";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="flex justify-between pt-4 md:mx-20 sm:mx-4 items-center text-center">
      <div className="z-[100]">
        <button className="text-white font-playfair text-[40px] font-bold">
          Cure
        </button>
      </div>

      <div className="md:flex sm:hidden">
        {navbar.map((navbar) => (
          <a
            href={`#${navbar.id}`}
            className="mx-10 text-white rounded-full transition-all p-2"
          >
            {navbar.title}
          </a>
        ))}
      </div>

      <div className="md:flex sm:hidden">
        <a
          href="#"
          className="text-white rounded-full transition-all p-2"
        >
          Book an Appointment
        </a>
      </div>

      <div className="md:hidden sm:flex">
        <Image
          src={toggle ? close : menu}
          onClick={() => settoggle((prev) => !prev)}
          className="w-[50px] z-[100]"
        />
        <motion.div
          variants={navbarOpacity}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${
            toggle ? "flex" : "hidden"
          } bg-gray-400 flex-col fixed h-[100vh] w-[100vw] left-0 top-0 z-[99] justify-center items-center`}
        >
          {navbar.map((navbar) => (
            <motion.a
              href={`#${navbar.id}`}
              className="p-4 text-white text-[20px]"
            >
              {navbar.title}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

'use client'

import { motion } from "framer-motion"
import { slideUp, opacity } from "@/utils/motion"
import { useEffect, useState } from "react";

const Preloader = () => {
  
  const [index, setIndex] = useState(0);
  const words = ["Cure"]

  useEffect( () => {
    if(index == words.length - 1) return;

    setTimeout( () => {
        setIndex(index + 1);
    }, index == 0 ? 1000 : 150)
  }, [index])

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className="h-[100vh] w-[100vw] bg-white fixed top-0 left-0 z-[99] flex items-center justify-center">
      <motion.p variants={opacity} initial="initial" animate="enter" exit="exit" className="font-dancing text-[100px] text-red-400">{words[index]}</motion.p>
    </motion.div>
  )
}

export default Preloader

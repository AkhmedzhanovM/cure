"use client";

import { useEffect, useState, useRef } from "react";
import { Preloader, Hero, Meet, Section3, Culture, Services, Section6, Products, Nails, Invite, Footer } from "../sections";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {
          isLoading && <Preloader />
        }
      </AnimatePresence>
      <Hero />
      <div className="bg-secondary">
        <Meet />
      </div>
      <Section3/>
      <div className="bg-primary w-[100vw] h-[120vh]">
        <Culture />
      </div>
      <div className="bg-secondary w-[100vw] h-[100vh]">
        <Services />
      </div>
      <Section6 />
      <div className="bg-thirdly w-[100vw] h-[100vh]">
        <Products />
      </div>
      <div className="bg-secondary">
        <Nails />
      </div>
      <Invite />
      <div className="bg-secondary w-[100vw] h-[50vh]">
        <Footer />
      </div>
    </motion.div>
  );
};

export default page;

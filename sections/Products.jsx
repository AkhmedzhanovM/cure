import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/constants";
import { textZoomOut, textUp, longLeft } from "@/utils/motion";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-40">
        <motion.h1
          variants={textZoomOut}
          initial="initial"
          whileInView="exit"
          className="text-[40px] text-white font-bold font-playfair text-center"
        >
          We're different
        </motion.h1>
        <motion.h2
          variants={textUp}
          initial="initial"
          whileInView="exit"
          className="text-gray-300 w-[400px] text-center mt-4"
        >
          Our products focus on preventing aging in the places that matter most:
          hands & feet.
        </motion.h2>
      </div>

      <motion.div
        variants={longLeft}
        initial="initial"
        whileInView="exit"
        className="flex md:flex-row sm:flex-col"
      >
        <div className="md:absolute md:ml-[800px] sm:ml-[1100px]">
          <h1 className="text-[30px] text-white font-bold font-playfair w-[200px] md:mt-14 sm:mb-10 ml-14">
            Check All Products
          </h1>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          whileTap={{ cursor: "grabbing" }}
          className="flex w-[1500px] ml-[1200px] cursor-grab"
        >
          {products.map((products) => (
            <Image
              src={products.imgUrl}
              width={180}
              height={280}
              className="pointer-events-none mx-2"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;

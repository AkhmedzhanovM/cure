"use client";

import Image from "next/image";

const Section6 = () => {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <Image
        src="/plant.jpg"
        width={1000}
        height={1000}
        className="md:w-[50vw] sm:w-[100vw] md:h-[100vh] sm:h-[50vh]"
      />
      <Image
        src="/girl5.jpg"
        width={1000}
        height={1000}
        className="md:w-[50vw] sm:w-[100vw] md:h-[100vh] sm:h-[50vh]"
      />
    </div>
  );
};

export default Section6;

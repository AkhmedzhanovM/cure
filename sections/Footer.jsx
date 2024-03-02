"use client";

const Footer = () => {
  return (
    <div className="flex md:flex-row sm:flex-col justify-between items-center">
      <div className="md:pt-20 sm:pt-10 md:pl-20 sm:pr-28">
        <h2 className="text-[30px] text-white font-bold font-playfair">
          Have Questions?
        </h2>
        <button className="text-[25px] text-red-400 font-playfai font-bold">
          Tell us more.
        </button>
      </div>

      <div className="flex justify-between pt-20 md:pr-20 sm:pr-2">
        <div className="flex flex-col pr-20">
          <button className="text-white text-[20px] flex justify-start">
            Privacy Policy
          </button>
          <button className="text-white text-[20px]">
            Terms of Services
          </button>
        </div>
        <div className="flex flex-col">
          <button className="text-white text-[20px]">Instagram</button>
          <button className="text-white text-[20px]">Facebook</button>
          <h2 className="text-[25px] text-white font-bold font-playfair absolute pt-20">
            Nailed it.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

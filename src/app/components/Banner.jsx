"use client"
import React from 'react';
import { motion } from 'framer-motion';
const Banner = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  viewport={{ once: true }}
      className="relative h-[450px] w-full mt-5"
      style={{
        backgroundImage: "url('/images/banner bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute inset-0 bg-[#656e7d] opacity-70"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        <h1 className="text-4xl font-bold ">Buy 1 Get 1 50% OFF Everything*</h1>
        <p className="mt-2 text-lg text-[#cecece]">* Does not include Pergolas. Not to be combined with other offers. New estimates only. Must meet minimum order requirement. Offer Ends September 30th.</p>
         <button className="w-full max-w-md bg-[#535fab] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
          Claim Discount and Shedule Consultation
        </button>

      </div>
    </motion.div>
  );
};

export default Banner;
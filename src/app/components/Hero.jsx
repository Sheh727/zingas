"use client"
import React from 'react';
import Title from './Title';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-[120vh] w-full py-10 "
      style={{
        backgroundImage: "url('/images/h-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
  
      <motion.div
        className="w-full mt-24 lg:mt-[200px] lg:w-2/3 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
          <h1
        className='font-bold text-4xl sm:text-3xl xs:text-2xl md:text-[50px] text-white   '
      >
      Expertly Shaded - <br/>Inside & Out
      </h1>
        <Title
        
          subtitle="Zinga’s delivers expert indoor & outdoor shading through in-home design consultations. As America’s largest shading company, we back every project with the best warranty and a 30-day price match guarantee—for premium style, protection, and peace of mind."
          align="left"
        />
      </motion.div>
  <div className="absolute inset-0 bg-[#656e7d] opacity-30 z-0"></div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="w-full lg:absolute lg:top-0 lg:right-0  lg:w-1/2 xl:w-1/3 h-auto lg:h-full md:h-[350px]  bg-yellow-50/70 flex items-center justify-center  lg:mt-0  z-11"
      >
        <div className="flex flex-col px-6 py-10  md:px-8 lg:px-10 xl:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center leading-tight">
            Request Free<br />
            In-Home<br />
            Consultation
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-center font-semibold text-black">
            Schedule Two Ways
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 hover:text-black transition duration-300 text-sm sm:text-base"
          >
            Call 844-494-6427
          </motion.button>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-center font-semibold text-black">or</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-[#c9b60c] text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-100 hover:text-black transition duration-300 text-sm sm:text-base"
          >
            Book Online
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
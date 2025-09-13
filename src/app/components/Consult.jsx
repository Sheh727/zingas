"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Consult = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  viewport={{ once: true }}

      className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 mt-10 mb-10 text-black h-[800px] w-full"
      style={{
        backgroundImage: "url('/images/consult bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute top-0 right-0 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-full bg-yellow-300 flex items-center justify-center">
        <div className="flex flex-col px-6 py-10 md:px-10 lg:px-12 xl:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center mt-10">
            Zinga's Custom Window Coverings
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-center font-semibold text-black">
            STEP 1: Complimentary In-Home Consultation
          </p>
          <p className="mt-2 text-sm md:text-base text-center font-semibold text-black">
            We bring sample products & fabrics directly to your home so you can see and feel the products in your home.
          </p>

          <p className="mt-6 text-xl md:text-2xl text-center font-semibold text-black">
            STEP 2: Precise Measuring & No Pressure Quote
          </p>
          <p className="mt-2 text-sm md:text-base text-center font-semibold text-black">
            We take precise measurements of all your windows and provide you a no pressure quote at the time of your consultation.
          </p>

          <p className="mt-6 text-xl md:text-2xl text-center font-semibold text-black">
            STEP 3: Hassle Free Installation
          </p>
          <p className="mt-2 text-sm md:text-base text-center font-semibold text-black">
            Installation completed by Zinga's employees who are experts in their craft. Free yourself of the stress of installing.
          </p>

          <button className="w-full max-w-xs mx-auto mt-8 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Consult;
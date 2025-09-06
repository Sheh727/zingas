import React from 'react';
import Image from 'next/image';
import Title from './Title';

const Hero = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-[145vh] w-full py-10"
      style={{
        backgroundImage: "url('/images/Herosection bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Expertly Shaded - Inside & Out"
          subtitle="Zinga’s delivers expert indoor & outdoor shading through in-home design consultations. As America’s largest shading company, we back every project with the best warranty and a 30-day price match guarantee—for premium style, protection, and peace of mind."
          align="left"
        />
      </div>

      
      <div className="w-full lg:w-1/3 bg-[#7096d5]/70 mt-10 lg:mt-[100] lg:right-0 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-tight">
            Request Free<br />
            In-Home<br />
            Consultation
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-center font-semibold text-white">
            Schedule Two Ways
          </p>

          <button className="w-full mt-4 bg-[#535fab] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300 text-sm sm:text-base">
            Call 844-494-6427
          </button>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center font-semibold text-white">or</p>

          <button className="w-full mt-4 bg-[#c9b60c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300 text-sm sm:text-base">
            Book Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
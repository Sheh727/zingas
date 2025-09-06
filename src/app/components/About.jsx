import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-7 mb-7 px-4 md:px-8 lg:px-16 pt-8">
      
      <div className="flex flex-col justify-start items-start text-left flex-1">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-[50px]">
          Who Is Zinga’s?
        </h1>
        <p className="text-sm md:text-base lg:text-[20px] text-gray-500/90 mt-2 max-w-full lg:max-w-[600px]">
          Zinga’s has been offering window treatments for 25 years and has grown 25% year over year! How did we do that? Simple, we’ve put our customer first. We genuinely love our customers and giving them great service. We want to wow our customers and when you wow your customers they give great referrals. See our over 2000+ reviews, our customers speak for themselves!
        </p>
      </div>

    
      <div
        className="h-[200px] w-full sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px] mx-auto lg:mx-0"
        style={{
          backgroundImage: "url('/images/zingas-team.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default About;
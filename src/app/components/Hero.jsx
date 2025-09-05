import React from 'react'
import Image from 'next/image'
import Title from './Title'
const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-black h-[145vh] w-full"
    style={{ backgroundImage: "url('/images/Herosection bg.jpg')",backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",}}
>

      <Title title="Expertly Shaded - Inside & Out" subtitle="Zinga’s delivers expert indoor & outdoor shading through in-home design consultations. As America’s largest shading company, we back every project with the best warranty and a 30-day price match guarantee—for premium style, protection, and peace of mind."
        align="left"/>
        
<div className="absolute top-0 right-0 w-1/3 h-[145vh]  bg-[#7096d5]/70 ">
    <h1 className="mt-[370px] text-4xl font-bold text-white text-center ">Request Free<br/>
In-Home<br/> Consultation</h1>
        <p className="mt-2 text-2xl text-center font-semibold text-white mt-2">Schedule Two Ways</p>
         <button className="w-full max-w-xs ml-[70px] mt-2 bg-[#535fab] text-white items-center justify-center font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
          Call  844-494-6427
        </button>
        <p className="mt-2 text-2xl text-center font-semibold text-white mt-2">or</p>
          <button className="w-full max-w-xs ml-[70px] mt-2 bg-[#c9b60c] text-white items-center justify-center font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
          Book Online
        </button>
</div>

    </div>
  )
}

export default Hero
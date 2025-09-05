import React from 'react'

const About = () => {
  return (
    <div className=' lg:flex md:flex-1 gap-6 mt-7 mb-7'>
         <div className="flex flex-col justify-left  items-left text-left">
      <h1 className='font-semibold text-4xl md:text-[50px]'>Who Is Zinga’s?</h1>
      <p className='text-md md:text-[20px] text-gray-500/90 mt-2
      max-w-156 mr-[250px]'>Zinga’s has been offering window treatments for 25 years and has grown 25% year over year! How did we do that? Simple, we’ve put our customer first. We genuinely love our customers and giving them great service. We want to wow our customers and when you wow your customers they give great referrals. See our over 2000+ reviews, our customers speak for themselves!</p>
    </div>
   
    <div className='lg:h-[300px] lg:w-[300px] md:h-[190px] md:w-[190px] sm:h-[100px] sm:h-[100px]  ' style={{backgroundImage: "url('/images/zingas-team.png')",backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"}}> </div>
    </div>
  )
}

export default About

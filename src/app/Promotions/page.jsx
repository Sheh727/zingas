"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import About from '../components/About'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import Products from '../components/Products'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <div>
  
    <Navbar/>
    
    <motion.div 
     initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
    className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10 "
      style={{
        backgroundImage: "url('/images/Promotions bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        

      <motion.div
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full mt-[200px] lg:w-2/3 z-10">
        <Title
          title="All Window Treatments Buy 1 Get 1 50% OFF"
          subtitle="
                      Act fast, these promotions won't last long!"
          align="left"
        />
      </motion.div>
      
      
        
   <div className="absolute inset-0 bg-[#656e7d] opacity-35 z-5"></div>

    </motion.div>
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-8 md:p-16  ">
      
      <div className="max-w-xl mt-8">
        <h2 className="text-3xl md:text-3xl font-bold text-black mb-6">
          Buy 1 Get 1 50% OFF Everything*
        </h2>
        <p className='text-gray-500'>* Does not include Pergolas. Not to be combined with other offers. New estimates only. Must meet minimum order requirement. Offer Ends September 30th</p>
        </div>
        </div>
    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page

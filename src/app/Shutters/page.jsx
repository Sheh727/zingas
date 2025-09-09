"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import ShuttersProducts from '../components/Shuttersproduct'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
     className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Shutters-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <motion.div
       initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }} className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Shutters"
          subtitle="Made in America by the finest craftsman but still cost less than any other competitor, including the big box stores. We even stand behind them with a true lifetime warranty on both the frame and finish..
"
          align="left"
        />
      </motion.div>
      
    </motion.div>
  
    <ShuttersProducts/>      
    <Consult/>
    <Banner/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page

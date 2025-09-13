"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import About from '../components/About'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import Products from '../components/Products'
import { motion } from 'framer-motion'

import Title from '../components/Title'
import GallerySwitcher from '../components/GallerySwitcher'
import Custom from '../components/Custom'
const page = () => {
  return (
    <div>
    
    <Navbar/>
     <motion.div 
      initial={{ opacity: 0, scale: 1.05 }}
animate={{ opacity: 1, scale: 1 }}

  transition={{ duration: 1.2, ease: 'easeOut' }}
     className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen  h-[120vh]  w-full py-10"
      style={{
        backgroundImage: "url('/images/Service Request bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       <div className="absolute inset-0 bg-[#656e7d] opacity-30 z-0"></div>
      <motion.div 
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full mt-[200px] lg:w-2/3 z-5">
        <Title
          title="A Little Inspiration"
          subtitle="Browse through some of the popular trends and ideas, but if you don’t see something you’re specifically looking for we can still bring your ideas to life. There isn’t a window treatment we haven’t seen or done!"
          align="left"
        />
      </motion.div>
      </motion.div>
      
   <GallerySwitcher/>
    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    <Testomials/>
    <Custom/>
    <Footer/>
    </div>
  )
}

export default page

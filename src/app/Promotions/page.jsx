"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
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
    <Navbuttons/>
    <Navbar/>
    <motion.div 
     initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
    className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
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
      className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Book FREE In-Home Consultation"
          subtitle="Find a date & time that works best for your schedule! Book a No-Pressure, In-Home Appointment that is designed to find the perfect products for your home"
          align="left"
        />
      </motion.div>
      
      
    </motion.div>
    
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

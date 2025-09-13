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
import Content from '../components/Content'

const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}

  transition={{ duration: 1.2, ease: 'easeOut' }}
     className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Shutters-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       <div className="absolute inset-0 bg-[#656e7d] opacity-30 z-0"></div>
      <motion.div
       initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }} className="w-full mt-[200px] lg:w-2/3 z-5">
        <Title
          title="Shutters"
          subtitle="Made in America by the finest craftsman but still cost less than any other competitor, including the big box stores. We even stand behind them with a true lifetime warranty on both the frame and finish..
"
          align="left"
        />
      </motion.div>
      
    </motion.div>

<Content
  heading="Upgrade Your Home with Zinga’s Shutters"
  content="Add a touch of elegance and functionality to your living spaces with our stunning window shutters, designed to offer exceptional light control, privacy, and a classic aesthetic. Zinga’s presents a vast selection of premium shutters to accommodate your tastes and harmonize with your interior design. Experience the transformative impact of our exquisite window shutters and elevate your home’s aesthetics and comfort. Schedule a Consultation today to schedule a complimentary in-home consultation!"
  heading2="Why Opt for Zinga’s Shutters?"
  listItems={[
    "Remarkable assortment of shutters: Delve into our diverse collection of materials, colors, and designs to discover the ideal window shutters for your residence.",
    "Energy-conscious shutters: Our shutters contribute to energy efficiency by insulating your home and reducing dependence on artificial lighting.",
    "Long-lasting and simple to maintain: Constructed from superior materials, our window shutters offer durability and ease of cleaning.",
    "Adaptable shutters: Tailor your window shutters with a variety of customization options to reflect your unique style and requirements.",
    "Expert assistance for your shutters: Our team of skilled professionals supports you throughout the process, from consultation to installation."
  ]} content2="Discover the transformative power of our exceptional window Shades and enhance your home’s aesthetics and comfort. Schedule a Consultation today to schedule a free in-home consultation!"
/>
    <ShuttersProducts/>   
     <Banner/>   
    <Consult/>
    <Testomials/>
   
    <Footer/>
    </div>
  )
}

export default page

"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import Custom from '../components/Custom'
import BlindsProducts from '../components/Blindsproduct'
import Content from '../components/Content'

import { motion } from 'framer-motion'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <motion.div 
     initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
    className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Blinds bg.jpg')",
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
          title="Blinds"
          subtitle="Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.
"
          align="left"
        />
      </motion.div>
      
    </motion.div>
  <Content
  heading="Transform Your Home with Zinga’s Luxury Drapes"
  content="Revamp your living spaces with our elegant drapery solutions, designed to offer superior light control, enhanced privacy, and a sophisticated aesthetic. Zinga’s offers a vast collection of premium drapes to match your individual tastes and seamlessly blend with your interior decor. Experience the transformative power of our luxurious drapery solutions and uplift your home’s aesthetics and comfort. Schedule a Consultation today to schedule a free in-home consultation!"
  heading2="Why Choose Zinga’s Drapes?"
  listItems={[
    "Expansive collection: Browse our comprehensive selection of fabrics, colors, and styles to find the ideal drapes for your home.",
    "Energy efficiency: Our drapes contribute to energy savings by providing excellent insulation, thus reducing the need for artificial heating and cooling.",
    "Durability and ease of maintenance: Crafted from superior materials, our drapes promise longevity and easy care.",
    "Personalization: Customize your drapes with a variety of options to reflect your unique style and needs.",
    "Professional support: Our team of experienced professionals guide you throughout the process, from consultation to installation."
  ]} content2="Discover the transformative power of our exceptional window blinds and enhance your home’s aesthetics and comfort. Schedule a Consultation today to schedule a free in-home consultation!"
/>
     <BlindsProducts/>       
    <Consult/>
    <Banner/>
    
    <Testomials/>
    <Custom/>
    <Footer/>
    </div>
  )
}

export default page

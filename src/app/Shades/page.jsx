"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import ShadesProducts from '../components/Shadesproduct'
import Content from '../components/Content'
import { motion } from 'framer-motion'
import Custom from '../components/Custom'
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
        backgroundImage: "url('/images/Shades bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       <div className="absolute inset-0 bg-[#656e7d] opacity-30 z-0"></div>
      <motion.div
       initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
       className="w-full mt-[200px] lg:w-2/3 z-5">
        <Title
          title="Shades"
          subtitle="Zinga’s offers the highest quality shades with a true lifetime warranty, all at prices that beat the big box stores. Let us meet you at your home and show you options that fit your style and needs."
          align="left"
        />
      </motion.div>
      
    </motion.div>
      <Content heading="Discover the Perfect Shades at Zinga’s" content="Upgrade your home with our stylish and versatile window shades, designed to elevate your living spaces while providing optimal light control and privacy. At Zinga’s, we offer an extensive collection of high-quality shades to match your preferences and complement your interior design."
      heading2="Why Choose Zinga’s for Your Window Shades?" 
      listItems={["Remarkable assortment of shutters: Delve into our diverse collection of materials, colors, and designs to discover the ideal window shutters for your residence.",
  "Energy-conscious shutters: Our shutters contribute to energy efficiency by insulating your home and reducing dependence on artificial lighting.",
  "Long-lasting and simple to maintain: Constructed from superior materials, our window shutters offer durability and ease of cleaning.",
  "Adaptable shutters: Tailor your window shutters with a variety of customization options to reflect your unique style and requirements.",
  "Expert assistance for your shutters: Our team of skilled professionals supports you throughout the process, from consultation to installation."
      ]} content2="Experience the transformative impact of our exquisite window shutters and elevate your home’s aesthetics and comfort. Schedule a Consultation today to schedule a complimentary in-home consultation!"/>
    <ShadesProducts/>        
    <Banner/>
    <Consult/>
    
    <Testomials/>

    <Footer/>
    </div>
  )
}

export default page

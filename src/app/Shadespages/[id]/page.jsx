"use client"
import React from 'react'
import Navbar from '@/app/components/Navbar'
import Navbuttons from '@/app/components/Navbuttons'
import Title from '@/app/components/Title'
import Consult from '@/app/components/Consult'
import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'
import Testomials from '@/app/components/Testomials'
import { motion } from 'framer-motion'

const contentMap = {
  '1': {
    title: 'Motorized Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: "/images/Shadespagesimages/Motorized-Shades-1.jpeg",
  },
  '2': {
    title: 'Solar Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: "/images/Shadespagesimages/Solar-Shades-2.png",
  },
  '3': {
    title: 'Horizontal Sheer Shade',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shadespagesimages/Horizontal-Sheer-Shades-3.png',
  },
    '4': {
    title: 'Dual Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shadespagesimages/Dual-Shades-4.png',
  },
  '5': {
    title: 'Zebra Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shadespagesimages/Roman-Shades-5.png',
  },


  '6': {
    title: 'Zebra Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shadespagesimages/Dual-Shades-4.png',
  },
}


export default function Page({ params }) {
  const content = contentMap[params.id]

  if (!content) {
    return (
      <div className="p-10 text-center text-red-500">
        Product not found
      </div>
    )
  }

  return (
    <div>
      <Navbuttons />
      <Navbar />
      <motion.div
       initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
        style={{
          backgroundImage: `url('${content.background}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#656e7d] opacity-30 z-0"></div>
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full mt-[200px] lg:w-2/3 z-5">
          <Title
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />
        </motion.div>
      </motion.div>

      <Banner />
      <Consult />
      <Testomials />
      <Footer />
    </div>
  )
}
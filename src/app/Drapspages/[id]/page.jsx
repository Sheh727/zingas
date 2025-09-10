"use client"
import React from 'react'
import Navbar from '@/app/components/Navbar'
import Title from '@/app/components/Title'
import Consult from '@/app/components/Consult'
import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'
import Testomials from '@/app/components/Testomials'
import { motion } from 'framer-motion'
import Custom from '@/app/components/Custom'
const contentMap = {
  '1': {
    title: 'Custom Drapes',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: "/images/Drapspagesimages/Motorized-Drapes-1.jpg",
  },
  '2': {
    title: 'Motorized Drapes',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: "/images/Drapspagesimages/Motorized-Drapes-2.jpg",
  },
  '3': {
    title: 'Valances',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: '/images/Drapspagesimages/Valances-3.png',
  },
    '4': {
    title: 'Cornice',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: '/images/Drapspagesimages/Cornices-4.png',
  },
  '5': {
    title: 'Custom Curtains',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: '/images/Drapspagesimages/Custom-Drapes-5.png',
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
      
      <Navbar />
      <div
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
         initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
         className="w-full mt-[200px] lg:w-2/3 z-5">
          <Title
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />
        </motion.div>
      </div>

      <Banner />
      <Consult />
      <Testomials />
      <Custom/>
      <Footer />
    </div>
  )
}
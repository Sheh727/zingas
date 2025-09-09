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
    title: 'Vertical Blinds',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: "/images/Blindspagesimages/Vertical-Blinds-1.jpg",
  },
  '2': {
    title: 'Cellular Blinds',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: "/images/Blindspagesimages/Cellular-Blinds-2.jpg",
  },
  '3': {
    title: 'Vinyl Blinds',
    subtitle: 'Sleek design with modern functionality...',
    background: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
  },
    '4': {
    title: 'Mini Blinds',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: '/images/Blindspagesimages/Mini-Blinds-4.jpg',
  },
  '5': {
    title: 'Blackout Blinds',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: 'public/images/Blindspagesimages/Blackout-Blinds-5.jpg',
  },


  '6': {
    title: 'Insulated Blinds',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: '/images/Blindspagesimages/Insulated-Shades-6.jpeg',
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
        <motion.div
         initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
         className="w-full mt-[200px] lg:w-2/3">
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
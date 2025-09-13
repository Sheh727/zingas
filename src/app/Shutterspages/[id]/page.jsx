"use client"
import React from 'react'
import { use } from 'react'
import Navbar from '@/app/components/Navbar'
import Navbuttons from '@/app/components/Navbuttons'
import Title from '@/app/components/Title'
import Consult from '@/app/components/Consult'
import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'
import Testomials from '@/app/components/Testomials'
import Content from '@/app/components/Content'
import { motion } from 'framer-motion'

const contentMap = {
  '1': {
    title: 'Wood Shutters',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.',
    background: "/images/Shutterspagesimages/wood-shutters-1.jpeg",
  },
  '2': {
    title: 'Plantation Shutters',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: "/images/Shutterspagesimages/Plantation-Shutters-2.jpeg",
  },
  '3': {
    title: 'Wood Shutters',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shutterspagesimages/Faux-Wood-Shutters-3.jpeg',
  },
    '4': {
    title: 'Height Shutters',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shutterspagesimages/Cafe-Height-Shutters-4.jpeg',
  },
  '5': {
    title: 'Roman Shades',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shutterspagesimages/Bi-Fold-Shutters-5.jpg',
  },


  '6': {
    title: 'Insulated Shade',
    subtitle: 'Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget',
    background: '/images/Shutterspagesimages/Sidelight-Shutters-6.jpeg',
  },
}


export default function Page({ params }) {
   const { id } = use(params); 
   const content = contentMap[id]

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
  animate={{ opacity: 1, scale: 1 }}

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
<Content heading="Have a room full of windows and want to open/close them all with the touch of a button? We have several types of motorized shades available"
listItems={[ 'Battery/Solar Powered – No electrical wiring required',
    'Motorized Shades – Roller, Honeycomb, Zebra & more',
    'Smart Home Compatible – Works with Alexa & Google Home',
    'Effortless Control – Remote, Phone, Voice',
    '"Lifetime Warranty" – Peace of mind, guaranteed'
]} Customheading="Custom Home & Whole Home Automation Systems" content2="We work with custom home builders and their customers to integrate their window treatments into their whole home automation systems. Our team will work with your electrical teams to construct window treatments that are hardwired and installed during the home building process.

You won’t find a better quality window treatment or pricing anywhere else. Contact us to help with your project and see how we can perfect your project with over 23 years experience in the industry.

 Book a complimentary in-home design consultation and see why over 20,000 homeowners have turned to Zinga’s for superior value, outstanding customer service, and quick start-to-finish completion for custom motorized blinds."/>
      <Banner />
      <Consult />
      <Testomials />
   
      <Footer />
    </div>
  )
}
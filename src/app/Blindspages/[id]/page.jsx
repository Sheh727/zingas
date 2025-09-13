"use client"
import React from 'react'
import { use } from 'react'
import Navbar from '@/app/components/Navbar'
import Navbuttons from '@/app/components/Navbuttons'
import Title from '@/app/components/Title'
import Consult from '@/app/components/Consult'
import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'
import Custom from '@/app/components/Custom'
import Testomials from '@/app/components/Testomials'
import { motion } from 'framer-motion'
import Content from '@/app/components/Content'

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
      <Custom/>
      <Footer />
    </div>
  )
}
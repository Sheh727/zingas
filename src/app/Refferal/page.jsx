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
    className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen  h-[120vh]  w-full py-10"
      style={{
        backgroundImage: "url('/images/Service Request bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}> 
       <div className="absolute inset-0 bg-[#656e7d] opacity-35 z-5"></div>

      <motion.div 
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full mt-[200px] lg:w-2/3 z-10">
        <Title
          title="Service Request"
          subtitle="Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget."
          align="left"
        />
      </motion.div>
  
  
      
    
    </motion.div>
    
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16">
      
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
          Multiple Referral Options
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-black mb-2">
            EARN CASH BY RECOMMENDING ZINGA’S
          </h3>
          <p className="text-gray-700">
            For every homeowner you refer who receives a quote from Zinga’s, we
            will reward you <span className="font-semibold">$100</span> – every time!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">
            REFERRALS ARE UNLIMITED!
          </h3>
          <p className="text-gray-700">
            We send you an Amazon gift card for{" "}
            <span className="font-semibold">$100</span> for every person you
            refer who received a quote.
          </p>
          
        </div>
       
      </div>
      </div>

     <form className="flex flex-col items-center text-sm text-blue-800 bg-gray-100 ">
          
                
                
            
            <h1 className="text-4xl font-semibold text-slate-700 pb-4 mt-8">Your Information</h1>

            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
        
          
        </form>
        
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

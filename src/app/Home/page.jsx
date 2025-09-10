"use client"
import React from 'react'
import Navbar from '../components/Navbar'
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
    
    <Navbar/>
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
     className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Home Builders bg.jpeg')",
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
          title="Book FREE In-Home Consultation"
          subtitle="Find a date & time that works best for your schedule! Book a No-Pressure, In-Home Appointment that is designed to find the perfect products for your home"
          align="left"
        />
      </motion.div>
      

      
    </motion.div>
     <div className="bg-gray-100 p-6 md:p-10 max-w-8xl mx-auto ">
    
      <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800 mb-4">
        Building a Home?
      </h2>

      
      <p className="text-gray-700 mb-4">
       If you are building with one of these builders, you may be entitled to substantial home builder discounts that can save you hundreds of dollars on your window coverings! As discounts change frequently, if your builder isn’t listed please contact us to see if you are still eligible!
      </p>
 <h2 className="text-lg md:text-xlv xl:text-2xl  font-semibold text-gray-800 mb-4">
        When Should You Schedule Your Free Estimate?

      </h2>

      
      <p className="text-gray-700 mb-4">
        We would love to meet with you in your home being built as soon as it has windows! The earlier you meet with us the better as it allows you to budget your window treatments into the many other expenses you have in your home. It also insures we can order and install your window treatments as soon as you close on your home, ensuring privacy right away!
      </p>
<h2 className="text-lg md:text-xl xl:text-2xl  font-semibold text-gray-800 mb-4">
      Contact us to find out your discount and schedule a free in-home estimate!
      </h2>

      
   
     </div>

     <form className="flex flex-col items-center mb-8 bg-gray-100 text-sm">
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="Email">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
                 <div className="w-full">
                    <label className="text-black/70" htmlFor="Builder">Builder</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 mb-8 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Submit</button>
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

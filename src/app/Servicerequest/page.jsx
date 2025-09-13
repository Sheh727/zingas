"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import Products from '../components/Products'
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
       <Content heading="WARRANTY" content="All blinds, shades, and shutters come with a lifetime warranty from the manufacturer against defective parts or materials, this excludes normal wear and tear. Manufacturers will repair defective blinds under warranty; however, the customer will be responsible for any labor and shipping & handling charges beginning one year after initial installation. Zinga’s charges a minimum service fee of $150 for Indoor and $300 for Outdoor service appointments. This will vary depending on the size, quantity, and the type of product. Should the product or product parts be discontinued, this warranty will be voided and a prorated credit towards the purchase of a new window covering will be issued."/>
     <form className="flex flex-col items-center text-sm text-gray bg-gray-100">
            <h6 className="text-5xl mt-8 font-bold py-4 text-center">Service Request</h6>
             <p className="max-md:text-sm text-gray pb-10 text-center">
         Filling out our service request form is the easiest and fastest way to get the process started.<br/> That way we have all of the correct information and can decide what is the fastest way to get your window treatments working properly again! You can even upload pictures of your issue!
            </p>
            <div className="max-w-96 w-full px-4">
                
                <label htmlFor="Did you purchase your product from Zinga's?" className="font-medium mt-4">Did you purchase your product from Zinga's?</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-gray rounded-md focus-within:ring-2 focus-within:ring-black transition-all overflow-hidden">
                   <select id="choice" className='ml-[270px]' >
  <option value=""></option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>


                </div>
                
                <div className="flex flex-col items-center text-sm">
            <p className="text-lg text-gray font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-500 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
            
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
            
        </div>
        
            </div>
            
        </form>
    <Products/>
       <Banner/>
    <Consult/>
 
  
    <Testomials/>
  
    <Footer/>
    </div>
  )
}

export default page

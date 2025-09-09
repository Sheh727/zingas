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
  viewport={{ once: true }}
    className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Scheduleconsult bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <motion.div
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Book FREE In-Home Consultation"
          subtitle="Find a date & time that works best for your schedule! Book a No-Pressure, In-Home Appointment that is designed to find the perfect products for your home"
          align="left"
        />
      </motion.div>
      
    </motion.div>
    <div className='mt-4 bg-gray-100'>
        <form className="flex flex-col items-center text-sm text-slate-800">
            <h1 className="text-4xl font-bold py-4 text-center">Let’s give your number.</h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
                Or just reach out manually to us at <a href="#" className="text-indigo-600 hover:underline">www.zingashome.com</a>
            </p>
            
            <div className="max-w-96 w-full px-4">
                
                <label htmlFor="Phone Number" className="font-medium mt-4">PHONE</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                   
                    <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter Phone Number" required />
                    
                </div>

 <input type="radio" id="YES" name="yes" value=""/>
  <label for="Yes" className='ml-2'>Yes</label>
<h1 className="text-xs text-gray-500 pb-10 text-center">By checking this box, I consent to receive SMS messages from Zinga's related to Appts at the phone number provided above. Message frequency may vary. Data rates may apply. For assistance, reply HELP. Reply STOP to opt out of receiving text messages. Please review our Privacy Policy and Terms & Conditions.</h1>
        
              
                
                <button type="Next" className="flex items-center justify-center gap-1 mt-5 mb-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                    Next:Provide Address
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>
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

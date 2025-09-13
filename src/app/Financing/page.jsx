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
import Custom from '../components/Custom'
const page = () => {
  return (
    <div>
  
    <Navbar/>
    <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
 animate={{ opacity: 1, scale: 1 }}

  transition={{ duration: 1.2, ease: 'easeOut' }}

     className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Promotions bg.png')",
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
          title="Financing"
          subtitle="We offer competitive financing offers to fit your budget and project"
          align="left"
        />
      </motion.div>
      
    
      
    </motion.div>
     <section className="bg-gra-100 p-6 md:p-10 max-w-8xl mx-auto ">
    
      <h2 className="text-lg md:text-xl xl:text-3xl  font-semibold text-gray-800 mb-4">
        Wells Fargo Financing
      </h2>

      
      <p className="text-gray-700 mb-4">
        Buy today and pay over time with the Wells Fargo Home Projects® credit
        card, which is issued with approved credit by Wells Fargo Bank, N.A. an
        Equal Housing Lender.
      </p>

      <p className="text-gray-700 mb-4">
        With approved credit from Wells Fargo, you’ll enjoy:
      </p>

      
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>Convenient monthly payments</li>
        <li>Flexible financing options</li>
        <li>Easy online account management</li>
      </ul>

      <p className="text-gray-700 mb-4">
        Plus, by taking advantage of financing, you won’t use up your existing
        funding sources, like a home equity line of credit, other credit card or
        bank account. They’ll still be available when you need them.
      </p>

      <p className="text-gray-700 mb-6">
        Please contact us to find out which financing options are available to
        you, or to learn about special financing promotions. Click the image
        below to apply online.
      </p>

      
      <div className="flex justify-center">
        <a
          href="https://wellsfargo.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Financing-page.png" // 
            alt="Special Financing Available"
            className="w-full max-w-2xl rounded-md border shadow-md hover:scale-105 transition-transform duration-300"
          />
        </a>
         
      </div>
      <div className='ml-[450px]'>
       <button
                    className="w-70 h-13 text-center mt-8  bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 hover:text-black hover:scale-1.05 transition duration-300 text-sm sm:text-base"
                  >
                    Financing Application
                  </button> </div>
    </section>
    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    <Testomials/>
    <Custom/>
    <Footer/>
    </div>
  )
}

export default page

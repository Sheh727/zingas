"use client"
import React from 'react'
import { motion } from 'framer-motion'

const galleryItems = [
  { title: "Shades", image: "Images/Shades-1.png" },
  { title: "Shutter", image: "Images/Shutters-1.jpeg" },
  { title: "Blinds", image: "Images/Blinds-1.jpg" },
  { title: "Drapes", image: "Images/Drapes-1.png" },
  { title: "Patio Screen", image: "Images/Screens-1.jpg" },
  
]

const Gallery = () => {
  return (
    <div className='mt-8 mb-8'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold text-center mx-auto">Our Latest Creations</h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent works – each piece crafted with intention, emotion, and style.
        </p>
      </motion.div>

      <motion.div 
       initial={{opacity: 0, y:100 }}
            whileInView={{opacity: 1, y:0 }}
             transition={{delay:0.5,duration: 1}}
      className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="size-56 object-cover object-top" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                Show More
                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Gallery
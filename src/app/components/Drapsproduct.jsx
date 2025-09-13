"use client";
import React from 'react'
import { assets, DrapesproductsData} from '@/assets/assets'
import Drapscard from './Drapscard'
import { motion } from 'framer-motion';


const DrapsProducts = () => {

  return (
    <div>
      <motion.div 
        initial={{opacity: 0, y:40 }}
      whileInView={{opacity: 1, y:0 }}
       transition={{duration: 1, ease: "easeOut"}}
      className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
       <h6 className='text-4xl font-semibold'> Related Products</h6> 
      </motion.div>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'></div>
      <motion.div 
         initial={{opacity: 0, y:100 }}
            whileInView={{opacity: 1, y:0 }}
             transition={{delay:0.5,duration: 1}}
      className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 justify-center
            xs: px-4 sm:px-7 md:px-7 lg:px-10 xl:px-10 max-w-7xl mx-auto'>
      {DrapesproductsData.map((product,index)=>(
        <div key={index}>
          <Drapscard product={product}/>
          </div>
      ))}
          </motion.div>
      
    </div>
  )
}

export default DrapsProducts


"use client";
import React from 'react'
import { assets, productsData} from '@/assets/assets'
import ProductCard from './ProductCard'
import { delay, motion } from 'framer-motion';

const Products = () => {

  return (
    <motion.div>
      <motion.div 
      initial={{opacity: 0, y:40 }}
      whileInView={{opacity: 1, y:0 }}
       transition={{duration: 1, ease: "easeOut"}}
      className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
       <h6 className='text-4xl font-semibold'> What Products Are You Interested In?</h6> 
      </motion.div>
    
      
      <motion.div
      initial={{opacity: 0, y:100 }}
      whileInView={{opacity: 1, y:0 }}
       transition={{delay:0.5,duration: 1}}
       className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 justify-center
            xs: px-4 sm:px-7 md:px-7 lg:px-10 xl:px-10 max-w-7xl mx-auto  '>
              
      {productsData.map((product,index)=>(
        <div key={index}>
          <ProductCard product={product}/>
          </div>
      ))}
          </motion.div>
      
    </motion.div>
  )
}

export default Products

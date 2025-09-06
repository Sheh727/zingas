"use client";
import React from 'react'
import { assets, DrapesproductsData} from '@/assets/assets'
import Drapscard from './Drapscard'

const DrapsProducts = () => {

  return (
    <div>
      <div className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
       <h6 className='text-4xl font-semibold'> Related Products</h6> 
      </div>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'></div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4
      xl:px-20 max-w-7xl mx-auto'>
      {DrapesproductsData.map((product,index)=>(
        <div key={index}>
          <Drapscard product={product}/>
          </div>
      ))}
          </div>
      
    </div>
  )
}

export default DrapsProducts


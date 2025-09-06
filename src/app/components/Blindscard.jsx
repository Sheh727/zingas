'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const BlindsCard = ({ product }) => {
  const router = useRouter()

  const routes = {
    '1': '/Shutters',
    '2': '/Shades',
    '3': '/Blinds',
    '6': '/Draps',
  
  }

  const handleOptionClick = (_id) => {
    const path = routes[_id]
    if (path) {
      router.push(path)
    } else {
      console.warn(`No route found for id: ${_id}`)
    }
  }

  return (
    <div
      onClick={() => handleOptionClick(product._id)}
      className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 bg-[#7096d5] cursor-pointer'
    >
      <div className='h-48'>
        <img
          src={product.image}
          alt='Product'
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='mb-2'>
        <h3 className='text-2xl text-white text-center font-medium'>
          {product.title}
        </h3>
      </div>
    </div>
  )
}

export default BlindsCard
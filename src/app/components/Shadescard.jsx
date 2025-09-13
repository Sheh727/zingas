'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const ShadesCard = ({ product }) => {
  const router = useRouter()

  const routes = {
    '1': '/Shadespages/1',
    '2': '/Shadespages/2',
    '3': '/Shadespages/3',
    '4': '/Shadespages/4',
    '5': '/Shadespages/5',
    '6': '/Shadespages/6',
  
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
   <div onClick={() => handleOptionClick(product._id)} className=' relative h-60 w-95  group overflow-hidden rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>
        <img
          src={product.image}
          alt='Product'
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 group-hover:h-full bg-yellow-50/70 z-10 transition-all duration-500 ease-in-out flex items-end group-hover:items-center">
          <h3 className='text-2xl text-black text-center font-medium w-full'>
            {product.title}
          </h3>
        </div>
      </div>
  )
}

export default ShadesCard
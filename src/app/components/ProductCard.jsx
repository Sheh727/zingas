
import React from 'react'
import { assets } from '@/assets/assets'


const ProductCard = ({product}) => {
  
    
  return (
    <div onClick={()=>{(`${product._id}`)}} className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 bg-[#7096d5] 
    cursor-pointer'>
      <div className=' h-48 '>
        <img src={product.image}  alt='Carimage' className='w-full h-full object-cover transition-transform duration-500
        group-hover:scale-105'/>
        </div>
         <div className=' mb-2 '>
      <div className='flex justify-between items-start'> </div>
      <div className='bg-[#7096d5]'>
        <h3 className='text-2xl text-white text-center font-medium '>{product.title}</h3>
      
  

    </div >
      </div>
      
    </div>
    
    
  )
}

export default ProductCard

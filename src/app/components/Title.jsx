import React from 'react'

const Title = ({title,subtitle,align}) => {
  return (
    <div className={`flex flex-col justify-left  items-center text-left ${align === "left" && "md:items-start md:text-left"
    }`}>
      <h1 className='font-bold text-6xl text-white md:text-[50px]'>{title}</h1>
      <p className='text-md md:text-[20px] text-white text-gray-500/90 mt-2
      max-w-156 mr-[200px]'>{subtitle}</p>
    </div>
  )
}

export default Title

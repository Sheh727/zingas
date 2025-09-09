import React from 'react'

const Title = ({ title, subtitle, align }) => {
  return (
    <div
      className={`flex flex-col justify-left items-center text-left ${
        align === 'left' ? 'md:items-start md:text-left' : ''
      }`}
    >
      <h1
        className='font-bold text-4xl sm:text-3xl xs:text-2xl md:text-[50px] text-white'
      >
        {title}
      </h1>
      <p
        className='text-sm sm:text-xs xs:text-[12px] md:text-[20px] text-white mt-2 max-w-156 mr-[200px]'
      >
        {subtitle}
      </p>
    </div>
  )
}

export default Title
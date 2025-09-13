import React from 'react'

const Title = ({ title, subtitle, align }) => {
  return (
    <div
      className={`flex flex-col ${
        align === 'left' ? 'items-start text-left' : 'items-center text-center'
      }`}
    >
      <div className="space-y-2 sm:space-y-1 xs:space-y-0">
        <h1 className="font-bold text-4xl sm:text-3xl xs:text-2xl md:text-[50px] text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-xs xs:text-[12px] md:text-[20px] text-white max-w-[90vw]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Title
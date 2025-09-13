import React from 'react'

const Content = ({heading,content,heading2,Customheading,content3,heading3,content2,listItems=[]}) => {
    
  return (
    
       <div className="bg-gra-100 p-6 md:p-10 max-w-8xl mx-auto ">
    
      <h2 className="text-lg md:text-xl xl:text-3xl  font-semibold text-gray-800 mb-4">
        {heading}
      </h2>

      
      <p className="text-gray-700 mb-4">
      {content}
      </p>
     

 <h2 className="text-lg md:text-xl xl:text-3xl  font-semibold text-gray-800 mb-4">
        {heading2}
      </h2>

       <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
      {listItems.map((item, index) => (
          <li key={index} >{item}</li>
      ))}
      </ul> 
       <h2 className="text-lg md:text-xl xl:text-3xl  font-semibold text-gray-800 mb-4">
        {Customheading}
      </h2>
  <p className="text-gray-700 mb-4">
      {content2}
      </p>
          <h2 className="text-lg md:text-xl xl:text-3xl  font-semibold text-gray-800 mb-4">
        {heading3}
      </h2> 
  <p className="text-gray-700 mb-4">
      {content3}
      </p>
       </div>
 
  )
}

export default Content

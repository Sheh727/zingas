import React from 'react';

const Cards = () => {
  const data = [
   {title:"Outdoor Screen Shades" ,image: "/images/Self-service-card/17-1-300x225.jpg",  },
  {title:"Outdoor Awning" , image: "/images/Self-service-card/awning-300x200.jpeg",  },
  { title:"Shutters" ,image: "/images/Self-service-card/Composite-Shutters-3-1-300x199.jpg", },
  { title:"Faux Wood Blinds" ,image: "/images/Self-service-card/Faux-Wood-Blinds-17-300x205.jpg",  },
  { title:"Horizontal Sheer Shades" ,image: "/images/Self-service-card/Horizontal-Sheer-Shades-25-300x180.png",  },
  {title:"Motorized Shades" , image: "/images/Self-service-card/Motorized-Blinds-4.png",  },
  {title:"Panel Track" , image: "/images/Self-service-card/Sliding-Door-Shutters-13-300x191.jpg",  },
  {title:"Vertical Blinds" , image: "/images/Self-service-card/Vertical-Blinds-12-300x249.jpg", },
  {title:"Window Shading" , image: "/images/Self-service-card/windows-300x198.jpeg",  },
 
];



  return (
    <div className=" py-12">
      <h1 className="text-2xl font-semibold text-center mx-auto">Click the Various products below to learn more about its care, operation, product information, and how to troubleshoot potential problems.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12 pl-[70px]">
        {data.map((item, index) => (
          <div key={index} className="hover:-translate-y-0.5 transition duration-300">
            <img
              src={item.image}
              alt={`image-${index}`}
              className="rounded-xl w-80 h-40 object-cover"
            />
            <h3 className="text-xl pl-8 text-slate-900 font-medium mt-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

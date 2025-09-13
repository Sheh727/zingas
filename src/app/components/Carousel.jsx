"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  const images = [
    "/images/Carouselimages/dmdeancustomhomes.png",
  "/images/Carouselimages/GL-Homes-Logo.jpeg",
  "/images/Carouselimages/zingas-drees-custom-homes.jpeg",
  "/images/Carouselimages/zingas-mi-homes.jpeg",
  "/images/Carouselimages/zingas-pulte-homes.jpeg",
  "/images/Carouselimages/zingas-pyatt-builders-e1584142363948.jpeg",
  "/images/Carouselimages/zingas-ryan-homes.jpeg"


  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 relative mb-8">
      <h2 className="text-center text-4xl font-bold mb-4 ">Building a Home?</h2>
        <p className="text-gray-700 mb-20">Building a home can be stressful enough, let us take the burden of window treatments off your hands. We will meet with you after your drywall is complete and can install as soon as you move in!</p>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2 ml-[75px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-40 h-25  rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>

      <style jsx>{`
        :global(.slick-prev),
        :global(.slick-next) {
          width: 40px;
          height: 40px;
          z-index: 10;
        }

        :global(.slick-prev:before),
        :global(.slick-next:before) {
          font-size: 40px;
          color: #4b5563;
        }

        :global(.slick-prev) {
          left: -50px;
        }

        :global(.slick-next) {
          right: -50px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;

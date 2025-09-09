"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Galleryslider = ({ title, currentImageData }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="mt-8 mb-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-[#cfd4f3] mt-12 w-full">
        {currentImageData.images.map((image, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(image)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image}
              alt={`${title} ${idx + 1}`}
              width={300}
              height={160}
              className="h-50 w-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-xl font-medium">{title}</h1>
              <p className="text-sm text-white/70">Image {idx + 1}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeZoom}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative max-w-4xl w-full px-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={zoomedImage}
                alt="Zoomed"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <button
                onClick={closeZoom}
                className="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galleryslider;
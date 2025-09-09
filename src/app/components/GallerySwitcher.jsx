"use client";

import React, { useState } from 'react';
import { imageData } from '../../assets/assets';
import Image from 'next/image';
import Galleryslider from './Galleryslider';
import { motion, AnimatePresence } from 'framer-motion';

const buttonsData = ['Shades', 'Shutter', 'Blinds', 'Drapes', 'MotorizedScreens'];

const GallerySwitcher = () => {
  const [currentButton, setCurrentButton] = useState(buttonsData[0]);
  const currentImageData = imageData[currentButton];

  return (
    <div className="p-6 mt-8 mb-8">
      <h1 className="text-4xl font-semibold text-center mx-auto">
        Explore Options For Your Unique Style
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Explore Options For Your Unique Style
      </p>

     <div className="flex flex-wrap justify-center gap-2 mb-6 mt-8">
  {buttonsData.map((Button, index) => (
    <motion.button
      key={index}
      onClick={() => setCurrentButton(Button)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      
      
      className={`px-4 py-2 rounded font-semibold hover:cursor-pointer ${
        currentButton === Button
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-gray-200 text-black'
      }`}
    >
      {Button}
    </motion.button>
  ))}
</div>

      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Galleryslider currentImageData={currentImageData} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GallerySwitcher;
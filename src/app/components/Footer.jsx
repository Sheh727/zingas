'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const linkSections = [
    {
      title: 'products',
      links: ['Shutter', 'Shades', 'Blinds', 'MotorScreens', 'Retractable Awings', 'Draps'],
    },
    {
      title: 'Zinga’s Oklahama City',
      links: [
        'Zinga’s West Palm Beach',
        'Zinga’s Vero Beach',
        'Zinga’s Dallas',
        'Zinga’s Fort Myers',
        'Zinga’s Sarasota',
        'Zinga’s Tampa',
        'Zinga’s Nashville',
        'Zinga’s Indianapolis',
      ],
    },
    {
      title: 'Follow Us',
      links: ['Instagram', 'Twitter', 'Facebook', 'YouTube'],
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="px-6 bg-[#535fab] md:px-16 lg:px-24 xl:px-32"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 text-white">
        <div>
          <img className="w-34 md:w-32" src="images/zingas-logo.png" alt="ZingasLogoColored" />
          <div className="flex items-center gap-4 mt-5">
          <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

<a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

<a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

<a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></a>
          </div>
          <p className="max-w-[200px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul className="text-[20px] space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © <a href="https://zingashome.com/">Zingas</a> All Right Reserved.
      </p>
    </motion.div>
  );
};

export default Footer;
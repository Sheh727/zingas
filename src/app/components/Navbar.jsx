'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion, scale } from 'framer-motion';
import Link from 'next/link';
const Navbar = () => {
  const router = useRouter();
  const sideMenuRef = useRef(null);
  const desktopDropdownRef = useRef(null);
const mobileDropdownRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);



  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleOptionClick = (menuName, option) => {
    console.log(`Selected "${option}" from "${menuName}"`);
    if (option === 'Promotions') router.push('/Promotions');
    if (option === 'Financing') router.push('/Financing');
        if (option === 'Home Builder Discount') router.push('/Home');
         if (option === 'Self-Service') router.push('/Selfservice');
          if (option === 'Service Request') router.push('/Servicerequest');
              if (option === 'Shades') router.push('/Shades');
               if (option === 'Shutter') router.push('/Shutters');
                if (option === 'Draps') router.push('/Draps');
                 if (option === 'Blinds') router.push('/Blinds');
                  if (option === 'Gallery') router.push('/Gallery');
    setActiveMenu(null);
  };
const handleSelect = (menuName, option) => {
    console.log(`Selected "${option}" from "${menuName}"`);
    if (option === 'Promotions') router.push('/Promotions');
    if (option === 'Financing') router.push('/Financing');
        if (option === 'Home Builder Discount') router.push('/Home');
         if (option === 'Self-Service') router.push('/Selfservice');
          if (option === 'Service Request') router.push('/Servicerequest');
              if (option === 'Shades') router.push('/Shades');
               if (option === 'Shutter') router.push('/Shutters');
                if (option === 'Draps') router.push('/Draps');
                 if (option === 'Blinds') router.push('/Blinds');
                  if (option === 'Gallery') router.push('/Gallery');
    setActiveDropdown(null);
      
  };

  // [click outside button closed]

  useEffect(() => {
  
     const handleClickOutside = (event) => {
    const clickedOutsideDesktop =
      desktopDropdownRef.current &&
      !desktopDropdownRef.current.contains(event.target);

    const clickedOutsideMobile =
      mobileDropdownRef.current &&
      !mobileDropdownRef.current.contains(event.target);

    if (clickedOutsideDesktop && clickedOutsideMobile) {
      setActiveMenu(null);
      setActiveDropdown(null);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);


  const MotionImage = motion(Image);

  
  const menuItems = [
    
    { name: 'Products', options: ['Shades', 'Shutter', 'Blinds','Draps'] },
    { name: 'Promotions', options: ['Promotions', 'Financing', 'Home Builder Discount'] },
    { name: 'Need Services', options: ['Self-Service', 'Service Request'] },
    { name: 'About US', options: ['Contact Us', 'Gallery', 'Refferal','We Support'] },
  ];

  return (
    <motion.div
    initial={{y: -20, opacity:0 }}
     animate={{y:0 , opacity:1 }}
      transition={{ duration: 0.2}}>
      <nav className='w-full fixed pt-[30px] px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between bg-white z-999'>
        <Link href='/'>
          <MotionImage whileHover={{scale: 1.05}} src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </Link>

        <ul  ref={desktopDropdownRef} className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 px-3 bg-white sadow-s bg-opacity-50'>
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <motion.button  whileHover={{scale: 1.05 }} className="font-Ovo px-3 py-2 hover:cursor-pointer" onClick={() => toggleMenu(item.name)}>
                {item.name}
              </motion.button>

              {activeMenu === item.name && (
                <motion.ul whileHover={{scale: 1.05}} className="absolute top-full left-0 mt-2 w-48 hover:cursor-pointer bg-white border border-gray-300 rounded shadow-lg z-10">
                  {item.options.map((option) => (
                    <motion.li whileHover={{scale: 1.05}}
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(item.name, option)}
                    >
                      {option}
                    </motion.li>
                  ))}
                  <li
                    className="px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                    onClick={() => toggleMenu(item.name)}
                  >
                    Close
                  </li>
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
          <div className='flex gap-2 items-center'>
      <button
        onClick={() => router.push("/Scheduleconsultion")}
        className='px-2 h-[32px] bg-[#535fab] hover:bg-blue-800 text-white text-xs font-medium rounded transition duration-300'
      >
        Schedule
      </button>
      <button
        className='px-2 h-[32px] bg-[#535fab] hover:bg-blue-800 text-white text-xs font-medium rounded transition duration-300'
      >
        Pay
      </button>
      <button
        className='px-2 h-[32px] bg-[#535fab] hover:bg-blue-800 text-white text-xs font-medium rounded transition duration-300'
      >
        844-494-6427
      </button>
    </div>
        <div className='flex items-center gap-4'>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-100 transition duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
        <div className="flex flex-col w-44 text-sm relative" ref={mobileDropdownRef}>
      {menuItems.map((item) => (
        <div key={item.name} className="mb-2">
          <button
            type="button"
            onClick={() =>
              setActiveDropdown((prev) => (prev === item.name ? null : item.name))
            }
            className="w-full text-left px-4 pr-2 py-2 border rounded bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 cursor-pointer focus:outline-none"
          >
            <span>{item.name}</span>
            <svg
              className={`w-5 h-5 inline float-right transition-transform duration-200 ${
                activeDropdown === item.name ? "rotate-0" : "-rotate-90"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6B7280"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeDropdown === item.name && (
            <ul className="w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
              {item.options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                  onClick={() => handleSelect(item.name, option)}
                >
                  {option}
                </li>
              ))}
              <li
                className="px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                onClick={() => setActiveDropdown(null)}
              >
                Close
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>

    
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
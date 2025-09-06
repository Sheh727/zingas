'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const router = useRouter();
  const sideMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

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
    setActiveMenu(null);
  };

  
  
  const menuItems = [
    
    { name: 'Products', options: ['Shades', 'Shutter', 'Blinds','Draps'] },
    { name: 'Promotions', options: ['Promotions', 'Financing', 'Home Builder Discount'] },
    { name: 'Need Services', options: ['Self-Service', 'Service Request'] },
    { name: 'About US', options: ['Contact Us', 'Careers', 'Refferal','We Support'] },
  ];

  return (
    <div>
      <nav className='w-full fixed pt-[50px] px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between bg-white z-999'>
        <a href=''>
          <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 px-3 bg-white sadow-s bg-opacity-50'>
          {menuItems.map((item) => (
            <li key={item.name} className="relative" ref={dropdownRef}>
              <button className="font-Ovo px-3 py-2" onClick={() => toggleMenu(item.name)}>
                {item.name}
              </button>

              {activeMenu === item.name && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                  {item.options.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(item.name, option)}
                    >
                      {option}
                    </li>
                  ))}
                  <li
                    className="px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                    onClick={() => toggleMenu(item.name)}
                  >
                    Close
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Locations</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#">Products</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#">Promotions</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#">Need Services?</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#">About us</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
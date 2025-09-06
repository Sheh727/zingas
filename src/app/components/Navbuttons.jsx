"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbuttons = () => {
    const router = useRouter();
  return (
    <nav className='w-full fixed bottom-0 md:top-0 md:bottom-auto flex flex-col md:flex-row items-center justify-between border bg-white z-[1000]'>
      <ul className='flex md:flex-col lg:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-gray-600'>
        <li className='flex-1'>
          <button onClick={() => router.push("/Scheduleconsultion")} className='w-full md: h-[40px] bg-[#535fab] hover:bg-blue-800 text-white font-semibold transition duration-300 text-sm md:text-base'>
            Schedule Consultation
          </button>
        </li>
        <li className='flex-1'>
          <button className=' w-full h-[40px] bg-[#535fab] hover:bg-blue-800 text-white font-semibold transition duration-300 text-sm md:text-base'>
            Make Payment
          </button>
        </li>
        <li className='flex-1'>
          <button className='w-full  h-[40px] bg-[#535fab] hover:bg-blue-800 text-white font-semibold transition duration-300 text-sm md:text-base'>
            844-494-6427
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbuttons;
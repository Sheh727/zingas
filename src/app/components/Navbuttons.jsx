import React from 'react';

const Navbuttons = () => {
  return (
    <nav className='w-full fixed  flex items-center justify-between border bg-white z-1000'>
      <ul className='flex divide-x divide-gray-600'>
        <li className='flex-1'>
          <button className='w-[450px] h-[50px] bg-[#535fab]  hover:bg-blue-800 text-white font-semibold  transition duration-300'>
            Schedule Consultation
          </button>
        </li>
        <li className='flex-1'>
          <button className='w-[450px] h-[50px] bg-[#535fab] hover:bg-blue-800 text-white font-semibold  transition duration-300'>
            Make Payment
          </button>
        </li>
        <li className='flex-1'>
          <button className='w-[450px] h-[50px] bg-[#535fab] hover:bg-blue-800 text-white font-semibold transition duration-300'>
            844-494-6427
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbuttons;
import React from 'react';
import { AiOutlineHome, AiOutlineAppstore, AiOutlineHeart } from 'react-icons/ai'; 
import { HiOutlineShoppingBag } from 'react-icons/hi'; 
import { IoMenuOutline } from 'react-icons/io5';

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline /> 
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white text-[10px] flex justify-center items-center translate-x-2 -translate-y-2">
            12
          </div>
        </div>
        <AiOutlineHome />
        <div className="relative">
          <AiOutlineHeart /> 
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white text-[10px] flex justify-center items-center translate-x-2 -translate-y-2">
            8
          </div>
        </div>
        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobNavbar;

import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiSamsung } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiIntel } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { GrHpi } from "react-icons/gr";
const Popular = () => {
  return (
    <div className='shadow-black shadow-xl bg-orange-100 w-[1350px] mx-auto'>
        <h2 className='text-center text-7xl mt-10  font-bold'>Popular Brand</h2>
        <div className='flex gap-2 mb-10 mt-10 justify-center'>
        <FcGoogle  className='text-7xl' />
        <FaApple className='text-7xl' />
        <SiIntel className='text-7xl' />
        <GrHpi className='text-7xl' />
        <SiSamsung className='text-7xl' />
        <FaMicrosoft className='text-7xl' />
        </div>
        <div></div>
    </div>
  )
}

export default Popular
import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='w-full  h-fit bg-[#2D2E32] flex flex-col gap-5 py-20 md:flex-row md:justify-between md:px-10 lg:pl-28 lg:pr-28'>
        <p className='w-fit h-fit text-white font-bold text-xl text-center '>Copyright © 2024. All rights are reserved</p>
        <div className='w-full h-full md:w-fit md:h-fit flex justify-center  lg:justify-start gap-2 text-white items-center '>
            <Link  href="https://www.linkedin.com/in/roshanali-dev/" className='hover:text-blue-500 font-bold hover:scale-105 transition-all ease-in duration-300 cursor-pointer'><CiLinkedin className='text-3xl  lg:text-5xl'/></Link>
            <Link  href="https://github.com/RoshancodeWeb/" className='hover:text-blue-500 font-bold hover:scale-105 transition-all ease-in duration-300 cursor-pointer'><FiGithub className='text-2xl  lg:text-4xl'/></Link>
        </div>
    </div>
  )
}

export default Footer
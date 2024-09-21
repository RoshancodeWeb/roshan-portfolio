"use client"
import Link from 'next/link';
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


const Hero = () => {
  return (
    <div id='Home' className='w-full min-h-screen flex flex-col gap-4 pt-[100px] lg:flex-row-reverse lg:min-h-fit    pb-20 lg:pb-0 lg:pl-28 lg:pr-28'>
        <div className='image-section w-full min-h-[60%]  lg:min-h-fit    flex items-center justify-center  lg:w-[50%] '>
            <div 
            className='hero-img h-[250px] w-[250px] md:w-[350px] md:h-[350px] bg-[#B8B4B1] overflow-hidden rounded-full border-2 border-[#2D2E32]'>
                <img src="/profile.png" className='w-[600px] h-[600px] object-cover object-top ' alt='' />
            </div>
        </div>
        <div className='text-section w-full h-fit flex flex-col gap-4 lg:w-[50%] lg:gap-10 lg:pt-10'>
               <div className='main-text w-full  text-4xl  md:text-[42px] font-extrabold '>
                <p className='tracking-wider text-center lg:text-start'>Mern-Stack <span className='tracking-tighter block lg:inline-block'></span> Developer</p>
               </div>
               <p className='w-full text-center lg:text-start md:text-xl lg:text-2xl px-10 leading-7 md:px-52 lg:px-0 lg:pr-4'>
                  Hi,I&apos;m Roshan Ali.A passionate Mern Stack Developer based in Lahore,Pakistan📍
               </p>
               <div className='w-full h-fit flex justify-center items-center lg:justify-start '>
                  <a  href="/assets/CV.pdf" download="Resume-RoshanAli.pdf" >
                    <button className='bg-blue-500 text-white px-3 py-3 font-bold  hover:rounded-md transition-all ease-linear duration-300 hover:bg-blue-700 cursor-pointer  '>
                        Download CV
                    </button>
                  </a> 
               </div>
               <div className='w-full h-fit flex justify-center items-center lg:justify-start gap-2 '>
                     <Link  href="https://www.linkedin.com/in/roshanali-dev/" className='hover:text-blue-500 font-bold hover:scale-105 transition-all ease-in duration-300 cursor-pointer'><CiLinkedin className='text-3xl md:text-5xl lg:text-5xl'/></Link>
                     <Link  href="https://github.com/RoshancodeWeb/" className='hover:text-blue-500 font-bold hover:scale-105 transition-all ease-in duration-300 cursor-pointer'><FiGithub className='text-2xl md:text-4xl lg:text-4xl'/></Link>
               </div>
        </div>
    </div> 
  )
}

export default Hero
"use client"
import React, { useState } from 'react'
import { RiCloseLargeLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const scroll=(data:string)=>{
       const section=document.getElementById(data);
       section?.scrollIntoView({behavior:"smooth"});
       setShowMenu(false);
  }
  return (
    <div className='w-full h-[90px]  bg-white fixed top-0 flex justify-between items-center z-40  shadow-lg  text-[#2D2E32]'>
        <div className='w-fit h-fit logo '>
            <p className='font-bold text-xl pl-8 lg:text-2xl cursor-pointer'>Roshan.dev</p>
        </div>
        <div className={`menu flex flex-col absolute lg:relative w-full bg-white z-50 h-screen lg:w-fit lg:h-fit top-0 lg:flex-row text-2xl font-bold text-black ${showMenu?"translate-x-0":"-translate-x-[100%]"} lg:translate-x-0  transition-all ease-linear duration-300 `}>
            <div className='w-full h-[90px] flex justify-end items-center px-10 closeMenu lg:hidden'>
                 <RiCloseLargeLine className='cursor-pointer' onClick={()=>setShowMenu(false)} />
            </div>
            <div className="flex flex-col w-full lg:flex-row flex-grow items-center  gap-10 mt-10 lg:mt-0 font-medium lg:font-bold lg:text-[#2D2E32] lg:pr-5">
                  {["Home","About","Project","Contact"].map((data:string,key:number)=><p className='tracking-wide w-fit hover:text-blue-600 hover:scale-105 transition-transform ease-in duration-500 cursor-pointer' onClick={()=>scroll(data)} key={key} >{data}</p>)}
            </div>
        </div>
        <div className='openMenu w-fit h-fit pr-8 text-3xl font-bold text-black  lg:hidden'>
           <IoMdMenu  className="cursor-pointer" onClick={()=>setShowMenu(true)}/>
        </div>

    </div>
  )
}

export default Navbar
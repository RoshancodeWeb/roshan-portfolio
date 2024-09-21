import { FaLocationCrosshairs } from "react-icons/fa6";
import React from 'react'
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="Contact" className='w-full min-h-fit py-28 lg:pl-28 lg:pr-28 bg-white'>

        <div className='w-full h-fit main-div'>
            <p className='text-xl w-full text-center font-bold text-blue-500 md:text-2xl md:text-start'>Contact</p>
            <p className='w-full font-bold text-2xl text-center md:text-start md:text-[30px] lg:text-3xl px-10  leading-8 md:px-0 lg:px-0 lg:pr-4'>
               Don&apos;t be shy!Hit me up!👇
            </p>
        </div>
        <div className="w-full h-fit md:flex  md:gap-20 md:items-center ">
            <div className='w-full h-fit location flex flex-col  md:flex-row md:gap-6 text-xl items-center pt-10'>
                <div className="w-fit h-fit ">
                <FaLocationCrosshairs className="text-blue-500 text-2xl"/>
                </div>
                <div className="w-fit h-fit text-center md:text-start">
                    <p className="font-bold">Location</p>
                    <Link href={"https://maps.app.goo.gl/4rgZvBnPpFmW3VjEA"} className="hover:text-blue-500 text-slate-400">Lahore,Pakistan</Link>
                </div>
                
            </div>

            <div className='w-full h-fit mail flex flex-col text-xl md:flex-row md:gap-6 items-center pt-10'>
                <div className="w-fit h-fit">
                <BiMailSend className="text-blue-500 text-2xl"/>
                </div>
                <div className="w-fit h-fit text-center md:text-start">
                <p className="font-bold">Mail</p>
                <Link href={"mailto:roshanail7613@gmail.com"} className="hover:text-blue-500 text-slate-400">roshanail7613@gmail.com</Link>
                </div>
            </div>
        </div>
       
        
    </div>
  )
}

export default Contact
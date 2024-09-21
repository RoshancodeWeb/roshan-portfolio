import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full min-h-fit bg-white  lg:flex  py-44 lg:gap-10 lg:pl-28 lg:pr-28 '>
        <div className='laptop-image w-full h-fit lg:w-[40%] flex  justify-center lg:justify-start'>
             <div className='w-fit h-fit relative'> 
                <Image priority width={280} height={280} className='rounded-3xl md:w-[450px] md:h-[300px] lg:w-[450px]  object-cover' src="/laptoptable.jpeg" alt="laptoptable" />
                <div className="rotate-skill w-fit h-fit  absolute -right-10 -bottom-12 ">
                    <div className='w-fit h-fit'>
                        <Image priority width={180} height={180} className='hidden md:inline-block  object-cover' src="/circular.png" alt="ciruclar" />
                    </div>
                </div>
                <Image priority width={70} height={70} className='hidden md:inline-block  object-cover absolute right-4 bottom-2' src="/laptop.png" alt="laptop" />
             </div>
            
        </div>
        <div className='w-full h-fit lg:w-[60%]   pt-5 lg:pt-0 lg:pr-10  flex flex-col gap-3 '>
            
             <p className='text-xl w-full text-center font-bold text-blue-500 md:text-2xl lg:text-start'>About Me</p>
             <p className='w-full font-bold text-2xl text-center lg:text-start md:text-[30px] lg:text-2xl px-10  leading-8 md:px-36 lg:px-0 lg:pr-4'>
                A passionate Mern Stack Developer based in Lahore,Pakistan📍
            </p>
            <p className='w-full text-center pt-5 lg:text-start md:text-xl lg:text-2xl px-10 leading-7 md:px-36 lg:px-0 lg:pr-4'>
                   My goal is to develop a streamlined UI/UX with a highly responsive website, using Next.js and Tailwind CSS for the frontend, and Node.js, Express.js, and MongoDB for the backend.
            </p>
        </div>
    </div>
  )
}

export default About
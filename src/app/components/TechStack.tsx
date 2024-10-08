import Image from 'next/image'
import React from 'react'

const TechStack = () => {
  return (
    <div className='w-full h-fit   bg-[#F9F9F9] py-16 lg:pl-28 lg:pr-28 '>
         <div className='w-full  h-fit lg:flex lg:items-center'>
            <p className='w-fit h-fit relative left-[50%] -translate-x-[50%] lg:translate-x-0 lg:left-0 font-bold text-xl pb-1  border-b-2 lg:border-b-0 lg:pr-2 lg:border-r-2 border-[#939395] '>Tech Stack</p>
            <div className='stack w-full h-fit lg:w-fit md:flex '>
               <div className='w-full h-fit flex px-10 justify-between pt-5 lg:pt-0 gap-2'>
                  <Image width={100} height={100} className='lg:w-[150px] cursor-pointer relative  transition-transform ease-in-out duration-700 hover:-translate-y-8'  src="/icon/icon-one.svg" alt="img1"  />
                  <Image width={100} height={100} className='lg:w-[150px] cursor-pointer relative transition-transform ease-in-out duration-700 hover:-translate-y-8'    src="/icon/icon-two.svg" alt="img2"  />
               </div>
               <div className='w-full h-fit flex px-10 justify-between pt-5 lg:pt-0 gap-2'>
                  <Image width={100} height={100} className='lg:w-[150px] cursor-pointer transition-transform ease-in-out duration-700 hover:-translate-y-8'  src="/icon/icon-three.svg" alt="img3"  />
                  <Image width={100} height={100}  className='lg:w-[150px] cursor-pointer transition-transform ease-in-out duration-700 hover:-translate-y-8'  src="/icon/icon-four.svg" alt="img4"  />
               </div>
               <div className='w-full h-fit flex   justify-center pt-5 lg:pt-0 '>
                  <Image width={100} height={100} className='lg:w-[110px] cursor-pointer transition-transform ease-in-out duration-700 hover:-translate-y-8'  src="/icon/icon-five.svg" alt="img5"  />  
               </div>
            </div>

         </div>
    </div>
  )
}

export default TechStack
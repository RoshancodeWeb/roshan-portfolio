"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa6";
import { AiOutlineExport } from "react-icons/ai";
import { motion } from 'framer-motion';



type proj={
  imageLink:string,
  projectName:string,
  description:string,
  githubLink:string,
  liveDemo:string,
  techUsed:string[]
}
const Projects = () => {
  const projectStructure=[
    {
      imageLink:"/project/projectone.png",
      projectName:"Al Warda Electronics⚡",
      description:"It a website for electronics shop.Through this webiste client can hire personals for work and they can also view the work of professionals of the shop",
      githubLink:"https://github.com/RoshancodeWeb/warda-electronics.git",
      liveDemo:"https://electronics-project.vercel.app",
      techUsed:["Next js","Tailwind Css"]
    },
    {
      imageLink:"/project/projectthree.png",
      projectName:"Buy It💳",
      description:"Buy It allows the customers to buy anything while sitting in there homes.They can also create their wishlist and add products to cart.",
      githubLink:"https://github.com/RoshancodeWeb/BuyIt.git",
      liveDemo:"https://www.linkedin.com/posts/roshanali-dev_webdevelopment-ecommerce-mernstack-activity-7233421463020552192-F0wk?utm_source=share&utm_medium=member_desktop",
      techUsed:["Next js","Tailwind Css","Node Js","Express","Mongo Db"]
    }
  ]
  const [projects]=useState<proj[]>(projectStructure);
  


  return (
    <div id='Project' className='w-full min-h-screen px-5 py-32  lg:pl-28 lg:pr-28'>
       <div className='w-full h-fit main-div pb-10'>
            <p className='text-xl w-full font-bold text-blue-500 md:text-2xl text-start'>Portfolio</p>
            <p className='w-full font-bold text-xl  text-start md:text-[25px] lg:text-3xl leading-8 md:px-0 lg:px-0 lg:pr-4 capitalize'>
               Each project is a unique piece of development🍀
            </p>
        </div> 
        {projects.map((proj,index)=>
        <motion.div 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5}}
          
         key={index} className={`w-full pb-4 md:pb-16 h-fit md:flex ${(index+1)%2==0?"md:flex":"md:flex-row-reverse"} lg:gap-16  `}>
            <div className='w-full md:w-[60%] h-fit  lg:w-[50%]'>
                 <Image priority  width={"400"} height={"400"} className='object-cover md:w-[100%] md:object-fill md:h-[250px] lg:h-[300px]'   src={proj.imageLink} alt={proj.projectName} />
            </div>

            <div className={`w-full h-fit md:w-[40%]  flex flex-col lg:h-[300px] lg:justify-between gap-2`} >
                 <p className='w-full h-fit font-bold pt-3 md:pt-0 text-center md:text-xl lg:text-2xl'>{proj.projectName}</p>
                 <p className='w-full h-fit text-center md:text-xl lg:text-2xl'>{proj.description}</p>
                 <p className='w-full h-fit font-semibold text-center lg:text-xl'>{proj.techUsed.map((value,i)=><span key={i} className='text-black ml-2 '>{value}</span>)}</p>
                 <div className='w-full h-fit flex justify-center gap-4 lg:text-xl lg:font-extrabold lg:text-black lg:pl-4'>
                 <motion.div className='w-fit h-fit'><Link className='flex items-center justify-center gap-1 font-bold underline cursor-pointer hover:text-blue-500' href={proj.githubLink}>Code<span><FaGithub/></span></Link></motion.div>
                 <motion.div whileHover={{scale:[1,1.1,1,1.1,1]}} transition={{duration:1}} className='w-fit h-fit'><Link className='flex items-center justify-center gap-1 font-bold underline cursor-pointer hover:text-blue-500' href={proj.liveDemo} >Live Demo<span><AiOutlineExport/></span></Link></motion.div>
                </div>
            </div>
 
        </motion.div>
)}
        

    </div>
  )
}

export default Projects
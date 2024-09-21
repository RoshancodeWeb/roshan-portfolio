import React from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#F9F9F9]   text-[#2D2E32]'>
       <Hero/>
       <TechStack/>  
       <About/> 
       <Projects/>
       <Contact/>

    </div>
  )
}

export default Home
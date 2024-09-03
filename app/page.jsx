"use client"
import { useEffect } from 'react'
// components
import About from '@/components/About'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'

const Home = () => {
  // add locomotive scroll
  useEffect(()=>{
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll
    }
    loadLocomotiveScroll();
  },[])
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero/>
      <Explore/>
      <About/>
      <div className='h-[4000px]'></div>
    </div>
  )
}

export default Home

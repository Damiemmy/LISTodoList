"use client"
import React from 'react'
import BlogBanner from '@/components/BlogBanner'
import Productpage from '@/components/Productpage'


const page = () => {
  
  return (
    <div className='w-full'>
      <div className="bg-[url('/black.jpeg')] h-[300px] bg-center bg-cover w-full">
    <div className='py-20 max-w-[1000px] mx-auto p-4'>
      <h2 className='py-1 text-white text-3xl md:text-5xl'>The Place to Access </h2>
      <h2 className='py-1 mb-3 md:mb-5 text-white text-3xl md:text-5xl'>Information and Updates</h2>
      <button className='border-2 cursor-pointer py-2 px-3 text-sm font-bold  rounded-md w-30 bg-white '>Get Started</button>
    </div>
    
    </div>
    <BlogBanner/>
    <Productpage/>
   
    </div>
  )
}

export default page
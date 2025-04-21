"use client"
import React from 'react'
import Link from 'next/link'

const RightBar = () => {
  return (
    <div className=' pt-20 w-full'>
        <div className='flex  w-full font-medium text-gray-800 text-xl h-full  gap-5  flex-col justify-center items-center '>
            <Link href='/'className='px-2 text-md'>Home</Link>
            <Link href='/Postpage'className='px-2 text-md'>Post</Link>
            <Link href='/Post'className='px-2 text-md'>Upload</Link>
            <Link href='/'className='px-2 text-md'>About</Link>
            <Link href='/'className='px-2 text-md'>Contact</Link>
            <Link href='/'className='px-2 text-md'>Languages</Link>
            </div>
    </div>
  )
}

export default RightBar
"use client"
import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import Search from './Search'
import { useContext } from 'react'
import { PostContext } from './Postcontext'
const Header = () => {
    
    const [openmenu, setOpenmenu]=useState(false)
    
    const [searchResults,setSearchResults]=useState([])
    
    const Handledelete=()=>{
        
    }

    const HandleMenuClick=()=>{
        setOpenmenu(!openmenu)
    }
  return (
    <div className=' relative bg-white h-20 flex  justify-center items-center w-full text-black px-4 md:px-8 lg:px-16 xl:px-32 border-b border-b-gray-500'>
       <div className='flex flex-col items-center justify-center max-w-[1240px]'>
       <div className='flex max-w-[1240px] items-center justify-between mx-auto'>
            <h1 className='text-3xl gap-6 lg:mr-15 font-bold'>LIS.BLOG<span className=' text-amber-900'>SITE</span></h1>
            <div className='hidden md:flex'>
            <Link href='/'className='px-2 text-md'>Home</Link>
            <Link href='/Postpage'className='px-2 text-md'>Post</Link>
            <Link href='/Post'className='px-2 text-md'>Upload</Link>
            <Link href='/'className='px-2 text-md'>About</Link>
            <Link href='/'className='px-2 text-md'>Contact</Link>
            <Link href='/'className='px-2 text-md'>Languages</Link>
            </div>
            <div className='hidden md:flex lg:ml-15'>
                <button className='border-1 w-25 py-2 px-2 text-sm font-bold cursor-pointer text-amber-900 bg-white rounded-br-lg'>Sign in</button>
            </div>
            <div className='flex md:hidden cursor-pointer'>
                {!openmenu? <AiOutlineMenu size={20} onClick={()=> HandleMenuClick()}/>:<AiOutlineClose size={20} onClick={()=>HandleMenuClick()}/>}
            </div>
            {/* Mobile */}
            {openmenu && <div className='absolute flex bg-black flex-col items-center justify-center top-20 left-0 w-[60%] '>
                <div className='flex flex-col items-center justify-center top-20 left-0 w-full h-[calc(100vh-80px)] '>
                <div className='flex items-center justify-end text-white w-full p-4'>
                <AiOutlineClose  size={20} onClick={()=>HandleMenuClick()} />
                </div>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>Home</a>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>Post</a>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>About</a>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>Templates</a>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>Support</a>
                <a href=''className='py-3 border-b border-b-gray-600 text-white w-full flex items-center justify-center font-bold'>Languages</a>
                </div>
                </div>}
            <div>

            </div>

        </div>
       <>
        <Search/>
        </>
       </div>
       
       
         </div>
  )
}

export default Header
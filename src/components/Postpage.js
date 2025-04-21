"use client"
import React, { useEffect } from 'react'
import Post from './Post'
import api from '../api/Apirequest';


const Postpage = ({posts,setPosts}) => {
    
  return (
    
    <main className='flex justify-center items-center w-full h-full'>
        {posts.length ? (<Post
        posts={posts}
        setPosts={setPosts}/>):(<p className='text-red-400 font-bold text-4xl'>Post List Emptys</p>)}
    </main>
  )
}

export default Postpage
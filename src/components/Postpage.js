"use client"
import React from 'react'
import Post from './Post'


const Postpage = ({posts,setPosts}) => {

  return (
    <main>
        {posts.length ? (<Post
        posts={posts}
        setPosts={setPosts}/>):(<p className='text-red-400 font-bold text-4xl'>Post List Emptys</p>)}
    </main>
  )
}

export default Postpage
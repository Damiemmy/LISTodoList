"use client"
import React, { useEffect } from 'react'
import Postlist from './Postlist'

const Post = ({posts,setPosts}) => {

  return (
    <div className='w-full h-full'>
        {posts.map((post)=>(
            <Postlist key={post.id} post={post} posts={posts} setPosts={setPosts}/>
        ))}

    </div>
  )
}

export default Post
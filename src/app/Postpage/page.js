'use client'
import React, { useEffect } from 'react'
import Postpage from '@/components/Postpage'
import { useState } from 'react'
import Pagess from '../Post/page'
import PageForPosts from '../Posts/[id]/page'
import { PostContext, usePostContext } from '@/components/Postcontext'
import { useContext } from 'react'


const page = () => {
 const{posts,setPosts,searchResults,setSearchResults,search,setSearch}=useContext(PostContext);
 
 useEffect(()=>{
  const filterlist=posts.filter((post)=>((post.title).toLowerCase()).includes((search).toLowerCase()))
  
  setSearchResults(filterlist.reverse());

},[posts,search])
  return (
    <div className='p-4 w-full'>
       <Postpage 
    posts={searchResults}
    setPosts={setPosts}/>
   
      </div>
      
  )
}

export default page
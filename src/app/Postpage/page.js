'use client'
import React, { use, useEffect } from 'react'
import Postpage from '@/components/Postpage'
import { useState } from 'react'
import Pagess from '../Post/page'
import PageForPosts from '../Posts/[id]/page'
import { PostContext, usePostContext } from '@/components/Postcontext'
import { useContext } from 'react'
import api from '@/api/Apirequest'


const page = () => {
 const{posts,setPosts,searchResults,setSearchResults,search,setSearch}=useContext(PostContext);
 
 useEffect(()=>{
  const Searchlist=()=>{
    const Lists=posts.filter((post)=>(((post.title).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.description).toLowerCase()).includes(search.toLowerCase())
  ))
  setSearchResults(Lists)
  }
  Searchlist();
 },[search,posts])
 
 
 useEffect(()=>{
  const Getpostss=async()=>{
    try{
    const response=await api.get('/posts')
    console.log(response.data)
    
    
    setPosts(response.data)
    }catch(err){
      console.log(err.message)
    }
  }
 
 
  Getpostss();
 },[])
  return (
    <div className='p-4 w-full'>
       <Postpage 
    posts={searchResults.reverse()}
    setPosts={setPosts}/>
   
      </div>
      
  )
}

export default page
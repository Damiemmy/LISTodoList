"use client"
import { PostContext } from '@/components/Postcontext'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import {format} from 'date-fns';
import Postpage from '@/components/Postpage'
import api from '@/api/Apirequest'

const Pagess = () => {
  const{posts,setPosts,search,setSearch,searchResults,setSearchResults}= useContext(PostContext)
  const[posttitle,setPosttitle]=useState('')
  const[postbody,setPostsbody]=useState('')
  const inputRef=useRef();
  const inputRefTitle=useRef();
  const router=useRouter();

  

  
  const Handlesubmit=async(e)=>{
    e.preventDefault()
    const id=(posts.length ? posts[posts.length-1].id + 1:1)
    const date=format(new Date(),'MMM dd,yyyy pp');
    const NewPost={id,title:posttitle,description:postbody,date}
    try{
      const response=await api.post('/posts',NewPost)
      const Postlist=[...posts,response.data];
      setPosts(Postlist)
      setPostsbody('')
      setPosttitle('')
      (router.push('/Postpage'))
    }catch(err){
      console(err.message)
    }
  
    
  }

  return (
    <div className='p-4 w-full'>
       
        <h2 className='md:text-4xl text-xl font-bold py-2 '>UPLOAD POST</h2>
        <div className='shadow-md max-w-[700px] mx-auto p-4'>
        <form className=' flex flex-col py-3 justify-center items-center max-w-[600px] mx-auto shadow-md rounded-md h-[calc(100vh-80px) bg-white]' onSubmit={(e)=>Handlesubmit(e)}>
        <label className='text-xl' htmlFor='Addpost'>Add Post</label>
        <div className='flex items-center p-3 border w-full my-2 gap-4 rounded-md' onClick={()=>inputRefTitle.current.focus()}>
            <p className='text-left '>Title:</p>
            <input type="text" className='h-5 outline-none w-full' ref={inputRefTitle} value={posttitle} onChange={(e)=>setPosttitle(e.target.value)} placeholdername="Add a title"  />
        </div> 
        <div className='flex p-3 border flex-col  w-full my-2 gap-2 rounded-md 'onClick={()=>inputRef.current.focus()}>
            <p className='text-left'>Description:</p>
            <textarea className='h-30 outline-none w-full' type="text" ref={inputRef} value={postbody} onChange={(e)=>setPostsbody(e.target.value)} placeholdername="Add a title"/>
        </div> 
        <div className='w-full flex justify-center items-center text-right gap-3 my-3'>
            <p className='uppercase font-bold'>IMAGE(png,jpg):</p>
            <input type="file" className='border-2 rounded-md w-[35%] text-center flex text-black md:xl text-sm px-3 justify-center items-center py-2'/>
        </div> 
        <button type='submit' className='w-[35%] md:w-[35%]  py-2 px-3 my-3 text-sm md:text-lg rounded-md bg-black text-white'>Upload post</button>
        </form>
        </div>
    </div>
  )
}

export default Pagess
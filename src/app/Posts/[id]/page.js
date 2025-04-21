"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect, } from 'react';
import { useParams } from 'next/navigation';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import { PostContext, usePostContext } from '@/components/Postcontext';
import api from '@/api/Apirequest';





const PageForPosts = () => {
  const{posttitle,postbody,setPosttitle,setPostbody}=useContext(PostContext)
  const router=useRouter();
    const{posts,setPosts}=useContext(PostContext);
 
    
    
    const {id}=useParams();
    const foundPost= posts.find((post)=>(post.id).toString()===(id));
   
    if (!foundPost) {return <h1 className='text-red-600'>Post not Found</h1>}
    const Handledelete=async(id)=>{
      try{
        await api.delete(`/posts/${id}`)
        const Newlist=posts.filter((post)=>(post.id!==id))
        setPosts(Newlist)
      }catch(err){
        console.log(`Error: ${err.message}`)
      }
        
        
       
    
      }
    
  return (
    <div className='p-3'>
    <div className='w-full flex flex-col gap-2 items-center justify-center '>
        <h3 className='font-bold text-2xl uppercase'>{foundPost.title}</h3>
        <span className='text-gray-500'>{foundPost.date}</span>
        <p>{foundPost.description}</p>
        <div className='flex gap-6 justify-start items-start'>
          <div className='flex gap-2 items-center justify-center'>
        <h3 className='text-md'>Delete</h3>
        <Link  className='cursor-pointer  text-red-500'href='/Postpage'><button type="button" onClick={()=>Handledelete(foundPost.id)}>
                <FaTrashAlt size={20}/>
                </button>
        </Link>
        </div>
        <div className='flex gap-2 items-center justify-center'>
        <h3 className='text-md'>Edit</h3> 
        <Link className='text-blue-500 flex gap-3 cursor-pointer' href={`/edit/${id}`}><button type="button" onClick={()=>HandleEdit(foundPost.id)}>
              <FaEdit size={20}/>
                </button>
        </Link>
        </div>
        </div>
    </div>
    <div className='flex flex-col items-start justify-start gap-4'><h2>Page 1</h2>
    <button className=' rounded-md bg-black text-white text-sm cursor-pointer w-30 px-3 py-3 'onClick={()=> router.push('/Postpage')}>Back to Post</button>
    </div>
    </div>
  )
}

export default PageForPosts;
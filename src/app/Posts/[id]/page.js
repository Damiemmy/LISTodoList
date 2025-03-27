"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect, } from 'react';
import { useParams } from 'next/navigation';
import { FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';
import { PostContext, usePostContext } from '@/components/Postcontext';





const PageForPosts = () => {
  const router=useRouter();
    const {id}=useParams();
    const{posts,setPosts}=useContext(PostContext);
 
    
    

    const foundPost= posts.find((post)=>(post.id).toString()===(id));
   
    if (!foundPost) {return <h1 className='text-red-600'>Post not Found</h1>}
    const Handledelete=(postid)=>{
        const Newlist=posts.filter((post)=>(post.id!==postid))
        setPosts(Newlist)
        
        
       
    
      }
  return (
    <div className='p-3'>
    <div>
        <h3>{foundPost.title}</h3>
        <p>{foundPost.description}</p>
        <Link href='/Postpage'><button type="button" onClick={()=>Handledelete(foundPost.id)}>
                <FaTrashAlt/>
                </button>
        </Link>
    </div>
    <div className='flex flex-col items-start justify-start gap-4'><h2>Page 1</h2>
    <button className=' rounded-md bg-black text-white text-sm cursor-pointer w-30 px-3 py-3 'onClick={()=> router.push('/Postpage')}>Back to Post</button>
    </div>
    </div>
  )
}

export default PageForPosts;
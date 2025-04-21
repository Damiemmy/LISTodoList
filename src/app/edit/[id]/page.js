"use client"
import React, { useEffect, useState } from 'react'
import { useRef} from 'react'
import { useParams } from 'next/navigation'
import { useContext } from 'react'
import { PostContext } from '@/components/Postcontext'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import Apirequest from '@/api/Apirequest'
import Link from 'next/link';



const edit = () => {

const inputRef=useRef();
const inputRefTitle=useRef();
const routers=useRouter();
const {posts,setPosts,setEditposttitle,editposttitle,setEditpostbody,editpostbody}=useContext(PostContext);

const {id}=useParams();
const newlist=posts.find((post)=>(post.id).toString()===id)

useEffect(()=>{
  if(newlist){
    setEditpostbody(newlist.description)
    setEditposttitle(newlist.title)

  }
},[newlist,setEditpostbody,setEditposttitle])
const handleEdit=async(id)=>{
    const Datetime=(format(new Date(),'MMM dd, yyyy pp'));
    const Newpost={id,title:editposttitle,description:editpostbody,Datetime}
    try{
      const response=await Apirequest.put(`/posts/${id}`,Newpost);
      setPosts(posts.map(post=>post.id=== id? {...response.data}:post))
      setEditposttitle('');
      setEditpostbody('')
      routers.push('/')
    }catch(err){
        console.log(`Error: ${err.message}`);
        
    }
}
const Hompage= '  homepages'
const Visit='Visit our '
  return (
    <div className='p-4 w-full'>
       {editposttitle &&
       <>
        <h2 className='md:text-4xl text-xl font-bold py-2 '>Edit Post</h2>
        <div className='shadow-md max-w-[700px] mx-auto p-4'>
        <form className=' flex flex-col py-3 justify-center items-center max-w-[600px] mx-auto shadow-md rounded-md h-[calc(100vh-80px) bg-white]' onSubmit={(e)=>e.preventDefault()}>
        <label className='text-xl' htmlFor='Addpost'>Edit content</label>
        <div className='flex items-center p-3 border w-full my-2 gap-4 rounded-md' onClick={()=>inputRefTitle.current.focus()}>
            <p className='text-left '>Title:</p>
            <input type="text" className='h-5 outline-none w-full'  value={editposttitle} onChange={(e)=>setEditposttitle(e.target.value)} placeholdername="Add a title"  />
        </div> 
        <div className='flex p-3 border flex-col  w-full my-2 gap-2 rounded-md 'onClick={()=>inputRef.current.focus()}>
            <p className='text-left'>Description:</p>
            <textarea className='h-30 outline-none w-full' type="text" value={editpostbody} onChange={(e)=>setEditpostbody(e.target.value)} placeholdername="Add a title"/>
        </div> 
        <div className='w-full flex justify-center items-center text-right gap-3 my-3'>
            <p className='uppercase font-bold'>IMAGE(png,jpg):</p>
            <input type="file" className='border-2 rounded-md w-[35%] text-center flex text-black md:xl text-sm px-3 justify-center items-center py-2'/>
        </div> 
        <button type='submit' className='w-[35%] md:w-[35%]  py-2 px-3 my-3 text-sm md:text-lg rounded-md bg-black text-white' onClick={()=>handleEdit(newlist.id)}>Save post</button>
        </form>
        </div>
        </>
        }
        {!editposttitle && 
        <>
        <h2>Post not Found</h2>
        <h2>Well,that's disappointing</h2>
       <div className='flex'><h2> {Visit}</h2> <Link href='/'><h2 className='text-red-500'>{Hompage}</h2></Link></div>
        </>}
    </div>
  )
}

export default edit
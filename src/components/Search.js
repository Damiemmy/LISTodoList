'use client'

import { useContext, useState } from "react"
import {FaPlus, FaSearch} from 'react-icons/fa'
import Link from "next/link"
import { PostContext } from "./Postcontext"

const Search = () => {
  const{search,setSearch}=useContext(PostContext)
   
  return (
    <div className='w-full h-10 flex items-center md:hidden justify-between mx-2'>
    <form className=" flex justify-between items-center w-full"  onSubmit={(e)=>Handleform(e.preventDefault())}>
        <div className="border w-full px-2  py-1 flex justify-between items-center border-gray-400 rounded-md">
        <input
        className="bg-transparent w-[90%] outline-none"
        type="searchbox"
        required
        id="search"
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search Posts"
        value={search}
        />
        <button
        type="submit" onClick={()=>HandleSubmit()}
        >
            <FaSearch/>
        </button>
        </div>

    </form>
    <div className="flex w-full justify-center items-center">
        <Link className="px-2" href='/'>Home</Link>
        <Link className="px-2" href='/Postpage'>Postpage</Link>
        <Link className="px-2" href='/Post'>Upload</Link>
    </div>
</div>
  )
}

export default Search
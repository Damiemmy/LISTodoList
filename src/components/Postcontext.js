'use client'

import { createContext,useContext,useState } from 'react'


    export const PostContext=createContext();
    export const PostProvider=({children})=>{
        const [search,setSearch]=useState('')
        const[editposttitle,setEditposttitle]=useState('')
        const[editpostbody,setEditpostbody]=useState('')
        const [searchResults,setSearchResults]=useState([])
        const[posts,setPosts]=useState([
           
          ])
    
    return (
    <PostContext.Provider value={{posts,setPosts,search,setSearch,searchResults,setSearchResults,editpostbody,setEditpostbody,editposttitle,setEditposttitle}}>
        {children}
    </PostContext.Provider>
  );
}




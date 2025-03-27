'use client'

import { createContext,useContext,useState } from 'react'


    export const PostContext=createContext();
    export const PostProvider=({children})=>{
        const [search,setSearch]=useState('')
        const [searchResults,setSearchResults]=useState([])
        const[posts,setPosts]=useState([
            {
        "date": "July 01,2025 11:17:36 AM",
        "description": "this is all about the description of the first Post",
        "id": 1,
        "title": "First Post",
       
          },
            {
        "date": "July 01,2025 11:17:36 AM",
        "description": "this is all about the description of the first Post",
        "id": 2,
        "title": "Second Post",
          },
            {
        "date": "July 01,2025 11:17:36 AM",
        "description": "this is all about the description of the first Post",
        "id": 3,
        "title": "Third Post",
          },
            {
        "date": "July 01,2025 11:17:36 AM",
        "description": "this is all about the description of the first Post",
        "id": 4,
        "title": "Fourth Post",
          }
        
          ])
    
    return (
    <PostContext.Provider value={{posts,setPosts,search,setSearch,searchResults,setSearchResults}}>
        {children}
    </PostContext.Provider>
  );
}




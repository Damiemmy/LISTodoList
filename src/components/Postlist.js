"use client"
import { Handlee } from "next/font/google"
import Link from "next/link"
import { useEffect } from "react"
import Retrieveid from "@/app/Posts/[id]/page"

const Postlist = ({post}) => {
 
    return (
              <div className="max-w-[800px] mx-auto bg-white shadow-md flex items-center justify-start p-2">
                <div>
                <Link href={`/Posts/${post.id}`}><h3 className="uppercase font-bold md:text-xl text-lg">{post.title}</h3></Link>
                <p>{post.description}</p>
                <span>{post.date}</span>
                
              
                </div>
                
              </div>
    )
  }
  export default Postlist
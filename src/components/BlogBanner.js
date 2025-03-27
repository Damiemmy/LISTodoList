"use client"
import React from 'react'
import tinubu from '/public/tinubu.jpg'


const BlogBanner = () => {
  return (
    <div className='w-full py-10 bg-gray-400'>
        <h1 className='text-white font-bold md:text-4xl text-xl w-full py-3 my-4 bg-amber-900 text-center'>Latest Post</h1>
        <div className='md:grid md:grid-cols-3 max-w-[900px] mx-auto bg-gray-500 items-center justify-center text-center'>
            <div className='flex flex-col mx-3 my-3 rounded-md shadow-md p-4 gap-3 justify-center bg-white items-center'>
                <h1 className='font-bold text-xl '>
                    EFCC Arrested Tinubu For Hardship in Nig.
                </h1>
                <img  className='rounded-md' src='/tinubu.jpg' alt='no photo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illo obcaecati deserunt harum repellat ipsum. Non nesciunt facilis itaque.</p>
                <button className='rounded-md py-2 px-3 text-sm bg-black text-white w-[50%] '>Read More</button>


            </div>
            <div className='flex flex-col mx-3 my-3 rounded-md shadow-md p-4 gap-3 justify-center bg-white items-center'>
                <h1 className='font-bold text-xl '>
                    EFCC Arrested Tinubu For Hardship in Nig.
                </h1>
                <img  className='rounded-md' src='/tinubu.jpg' alt='no photo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illo obcaecati deserunt harum repellat ipsum. Non nesciunt facilis itaque.</p>
                <button className='rounded-md py-2 px-3 text-sm bg-black text-white w-[50%] '>Read More</button>


            </div>
            <div className='flex flex-col mx-3 my-3 rounded-md shadow-md p-4 gap-3 justify-center bg-white items-center'>
                <h1 className='font-bold text-xl '>
                    EFCC Arrested Tinubu For Hardship in Nig.
                </h1>
                <img  className='rounded-md' src='/tinubu.jpg' alt='no photo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quis illo obcaecati deserunt harum repellat ipsum. Non nesciunt facilis itaque.</p>
                <button className='rounded-md py-2 px-3 text-sm bg-black text-white w-[50%] '>Read More</button>


            </div>
            
            
           
            
            

        </div>
        BlogBanner</div>
  )
}

export default BlogBanner
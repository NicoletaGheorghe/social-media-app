"use client";
import React from 'react'


export const UserPost = ({userId, imageUrl, description, id, } ) => {
  return (
    <div className='flex flex-col md:w-7/8 mx-auto mt-6 shadow-md rounded-xl'>
        <h2 className="text-2xl font-bold place-self-center text-purple-800 p-2">{userId}</h2>
        <img src={imageUrl} className=" w-110 h-110 rounded-sm"></img>
        <p className='text-md font-medium p-4'>{description}</p>
        <hr className='border-b-1 w-2/3 mx-auto' />
       <div className='grid grid-cols-2 justify-between p-4'>
            <button > ❤️  </button>
            <button >💔  </button>
        </div> 
    </div>
  )
}

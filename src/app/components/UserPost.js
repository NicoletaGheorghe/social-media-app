"use client";
import React from 'react'


const UserPost = ({userId, imageUrl, description, id, handleLikes, likedPostCount, handleDislikes, dislikedPostCount} ) => {
  
  
    return (
    <div className='flex flex-col md:w-7/8 mx-auto mt-6 shadow-md rounded-xl'>
        <h2 className="text-2xl font-bold place-self-center text-purple-800 p-2">{userId}</h2>
        <img src={imageUrl} className=" w-110 h-110 rounded-sm"></img>
        <p className='text-md font-medium p-4'>{description}</p>
        <hr className='border-b-1 border-purple-200 w-2/3 mx-auto' />
       <div className='grid grid-cols-2 justify-between p-4'>
            <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 " onClick={() => handleLikes(id)}> ❤️  {likedPostCount || 0}</button>
            <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 " onClick={() => handleDislikes(id)}>💔 {dislikedPostCount || 0} </button>
        </div> 
    </div>
  )
}

export default UserPost
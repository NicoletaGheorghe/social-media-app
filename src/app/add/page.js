"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {

  const [postObj, setPostObj] = useState({
    userId: "",
    imageUrl: "",
    description: "",
  })
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setPostObj({
      ...postObj,
      [name]: value
    })
  }
  const handleAddPost = (e) => {
    e.preventDefault();
    const localStoragePosts = localStorage.getItem("posts")
    if ( !postObj.userId || !postObj.imageUrl || !postObj.description) {
      alert("Please fill out all the fields.")
      return;
    }
    const postWithId = {
      ...postObj,
      id: Date.now().toString(),
  }
    if (localStoragePosts) {
      localStorage.setItem("posts", JSON.stringify([
        ...JSON.parse(localStoragePosts),
         postWithId
    ]))
  }else {
    localStorage.setItem("posts", JSON.stringify([postWithId]))
  }
    alert("✔ Post added successfully!")
  }

  return (
    
  <div className='flex flex-col pl-3 pr-3 md:w-1/3 mx-auto mt-6'>
      <div className='flex flex-col'>
        <h1 className='text-xl text-purple-900 font-semibold my-4'>New Post</h1>
      </div>
      <form onSubmit={handleAddPost} className='flex flex-col'>
       
        <div>
            <label className='text-purple-900 font-medium my-4' >User ID</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2 indent-3' name="userId" onChange={handleInputChange}/>
        </div>
        <div>
            <label className='text-purple-900 font-medium my-4' >Image</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2 indent-3' name="imageUrl" placeholder="Paste image URL here" onChange={handleInputChange}/>
        </div>
        <div>
            <label className='text-purple-900 font-medium my-4' >Description</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2 indent-3' name="description" placeholder="What's on your mind?" onChange={handleInputChange} />
        </div>
        <button type="submit" className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-1 bg-purple-200 text-purple-900 w-24 rounded-md my-4' onClick={handleAddPost}>
            Add Post
          </button>
      </form>
      </div>

  )
}

export default page
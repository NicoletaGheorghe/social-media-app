import React from 'react'

const page = () => {
  return (
    
  <div className='flex flex-col pl-3 pr-3 md:w-1/3 mx-auto mt-6'>
      <div className='flex flex-col'>
        <h1 className='text-xl text-purple-900 font-semibold my-4'>New Post</h1>
      </div>
      <form className='flex flex-col'>
       
        <div>
            <label className='text-purple-900 font-medium my-4' >User ID</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2' name="userId"/>
        </div>
        <div>
            <label className='text-purple-900 font-medium my-4' >Image</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2 indent-3' name="description" placeholder="Paste image URL here"/>
        </div>
        <div>
            <label className='text-purple-900 font-medium my-4' >Description</label>
        </div>
        <div>
          <input className='w-full border-2 border-purple-300 rounded-md my-2 indent-3' name="description" placeholder="What's on your mind?"/>
        </div>
        <button type="submit" className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-1 bg-purple-200 w-24 rounded-md my-4' >
            Add Post
          </button>
      </form>
      </div>

  )
}

export default page
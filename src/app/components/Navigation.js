import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className=" bg-purple-300 text-white ">
        <div className='flex justify-center pt-4'>
           <h1 className="bg-gradient-to-r from-purple-700 to-indigo-400 bg-clip-text text-transparent text-shadow-sm tracking-wider text-4xl font-semibold font-[Cambria,serif]">PicstaStory</h1>
        </div>
        <div className='flex gap-8 p-4 justify-center text-2xl font-bold'>
            <Link href="/" title="Home" className='text-shadow-sm text-shadow-purple-900 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110'>⌂</Link>
             <Link href="/add" title="Add Post" className='text-shadow-sm text-shadow-purple-900 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 '>+</Link> 
        </div>

    </div>
  )
}

export default Navigation
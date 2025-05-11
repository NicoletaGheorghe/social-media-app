"use client";
import { UserPost } from "./components/UserPost";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
   const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = () => {
       const storedPosts = localStorage.getItem("posts");
       if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);
        setPosts(parsedPosts);
        setLoading(false);
       }
    }
    loadPosts()
  }, []);

  if(loading){
    return(
      <div className='flex flex-col pl-3 pr-3 md:w-1/3 mx-auto mt-6'>
        <h1 className="text-fuchsia-900 font-medium">Loading...</h1>
      </div>
    );
   }

  return (
    <div className='flex flex-col pl-3 pr-3 md:w-1/3 mx-auto mt-6'>
       
     {posts?.length === 0 ? (
        <div className="text-purple-900 font-medium">No posts yet.</div>
          ) : (
            <div className="text-purple-900 font-medium">
              {posts?.map((post) => {
                return <UserPost 
                 key={post.id}
                 userId={post.userId}
                 imageUrl={post.imageUrl}
                 description={post.description}
                 id={post.id}
                 
                />
               })}
              </div>
         )}
    </div>
  );
}

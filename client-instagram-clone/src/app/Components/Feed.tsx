'use client'
import { useEffect, useState } from "react";
import Post from "./Post";
import Stories from "./Stories";
import { fetchPosts } from "@/utils/post";

interface PostData {
    id: number;
    username: string;
    caption: string;
    image?: string;
  }

const Feed = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postData = await fetchPosts();
        setPosts(postData);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    loadPosts();
  }, [])
    return (
        <div>
          <div>
      <Stories />
      {posts.map((post) => (
        <Post key={post.id} username={post.username} caption={post.caption} image={post.image} />
      ))}
    </div> 
        </div>
    );
};

export default Feed;
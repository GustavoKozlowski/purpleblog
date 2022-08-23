import React from "react";
import Post from "../../components/post";
import "./styles.css";
export default function PostList({ posts }) {
  return (
    <div className="post-list-container">
      {posts && 
        posts.map((post, index) => {
        return <Post key={index} post={post.attributes}/>;
      })}
    </div>
  );
}

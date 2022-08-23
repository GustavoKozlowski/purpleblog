import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  return (
    <div className="post-container">
      <div>
        <img
          className="post-img"
          src={post?.hero?.data?.attributes?.formats?.small?.url}
          alt={post?.alt}
        />
      </div>
      <div>
        <p className="post-date">{post?.date}</p>
        <Link to="#">
          <p className="post-title">{post?.title}</p>
        </Link>
        <p className="post-description">{post?.description}</p>
      </div>
    </div>
  );
}

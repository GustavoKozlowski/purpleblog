import React from "react";
import "./styles.css";
import AuthorBadge from "../author-badge";
import { Link } from "react-router-dom";
export default function FeaturePost({ post }) {
  return (
    <div className="featured-post-container">
      <div>
        <img
          className="featured-post-img"
          src={post.image}
          alt="foto de uma paisagem"
        />
      </div>
      <div>
        <p className="featured-post-date">{post.date}</p>
        <Link to="#">
          <h2 className="featured-post-title">{post.title}</h2>
        </Link>
        <p className="featured-post-description">{post.description}</p>
        <AuthorBadge />
      </div>
    </div>
  );
}

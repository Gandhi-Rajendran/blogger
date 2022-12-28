import React from "react";
import { Link } from "react-router-dom";
import "../styles/BlogList.css";

const BlogList = ({ title, blogs }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-list">
          <div className="blog-card">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;

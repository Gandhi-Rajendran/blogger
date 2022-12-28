import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, loading, error } = useFetch(
    "https://blogger-hfr8.onrender.com/blogs/" + id
  );
  const navigate = useNavigate();
  const deleteHandler = () => {
    fetch("https://blogger-hfr8.onrender.com/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="blog-container">
      {loading && <h2>Loading....</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {blogs && (
        <section className="blog-detail">
          <h2>{blogs.title}</h2>
          <h4>Written by {blogs.author}</h4>
          <p>{blogs.description}</p>
          <button onClick={deleteHandler}>Delete</button>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;

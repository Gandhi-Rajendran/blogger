import React from "react";
import { useState } from "react";
import "../styles/CreateBlog.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (title === "" && author === "" && description === "") {
      alert("All Field Must be filled");
      return;
    }
    if (title === "" || author === "" || description === "") {
      alert("fill the empty field");
      return;
    }
    const blog = { title, author, description };
    fetch("http://localhost:9000/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "content-type": "application/json" },
    }).then(() => {
      // console.log("Blog Added");
    });
    setTitle("");
    setAuthor("");
    setDescription("");
    navigate("/", { replace: true });
  };

  return (
    <form className="blog-create" onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateBlog;

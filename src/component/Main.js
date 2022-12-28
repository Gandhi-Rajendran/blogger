import React from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Main = () => {
  const { blogs, loading, error } = useFetch("http://localhost:9000/blogs");
  return (
    <div className="main">
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {blogs && <BlogList title="All blogs" blogs={blogs} />}
    </div>
  );
};

export default Main;

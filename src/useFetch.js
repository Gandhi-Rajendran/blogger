import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Oops!.. Something went wrong!");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return { blogs, loading, error };
};

export default useFetch;

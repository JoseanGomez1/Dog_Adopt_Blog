import React, { useState, useEffect } from "react";

function Blog() {
  const baseUrl = "http://localhost:4000/api/dogadoptions";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <p>Example Blog content goes here...</p>

      {/* Render the fetched data */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;

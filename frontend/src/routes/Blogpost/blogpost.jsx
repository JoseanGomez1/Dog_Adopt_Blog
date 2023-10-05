import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const baseUrl = "http://localhost:4000/api/dogadoptions";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the dog adoption entry.");
      }

      // Remove the deleted entry from the data state
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome Please Read Blog Post of People in need of Puppies.</p>

      <h2>Fetched Data</h2>

      <div className="dog-list">
        {data.map((item) => (
          <div className="dog-item" key={item._id}>
            <img
              src={`http://localhost:4000/uploads/${item.picture}`}
              alt={item.dogType}
            />
            <h3>{item.dogType}</h3>
            <p>Cost: ${item.cost}</p>
            <p>Description: {item.description}</p>
            <p>Age: {item.age} years</p>
            <p>Owner: {item.ownerName}</p>
            <p>Contact: {item.contactEmail}</p>
            <Link to={`/dog/${item._id}`}>View Details</Link>
            
            {}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;



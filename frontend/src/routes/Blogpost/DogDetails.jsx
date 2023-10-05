import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DogDetails() {
  const [dogData, setDogData] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/dogadoptions/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setDogData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Link to="/blogpost">🔙 Back to Blog</Link>
      <div className="dog-details">
        <h1>{dogData.dogType}</h1>
        <img src={`http://localhost:4000/uploads/${dogData.picture}`} alt={dogData.dogType} />
        <p>Cost: ${dogData.cost}</p>
        <p>Description: {dogData.description}</p>
        <p>Age: {dogData.age} years</p>
        <p>Owner: {dogData.ownerName}</p>
        <p>Contact: {dogData.contactEmail}</p>
        {/* Add an update link */}
        <Link to={`/update-dog/${id}`}>Update Dog</Link>
      </div>
    </div>
  );
}

export default DogDetails;

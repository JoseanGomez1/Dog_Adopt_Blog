// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// function UpdateDogAdoption() {
//   const [formData, setFormData] = useState({
//     dogType: "",
//     picture: "",
//     cost: 0,
//     description: "",
//     age: 0,
//     ownerName: "",
//     contactEmail: "",
//   });
//   const { id } = useParams(); // Get the ID from the URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/dogadoptions/${id}`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch data.");
//         }

//         const jsonData = await response.json();
//         setFormData(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:4000/api/dogadoptions/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update the dog adoption entry.");
//       }

//       // Redirect to the details page after successful update
//       window.location.href = `/dog/${id}`;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Link to={`/dog/${id}`}>🔙 Back to Dog Details</Link>
//       <div className="update-dog">
//         <h1>Update Dog Adoption Entry</h1>
//         <form onSubmit={handleSubmit}>
//           {/* Add your form fields for updating the data */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateDogAdoption;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UpdateDogAdoption() {
  const [formData, setFormData] = useState({
    dogType: "",
    picture: "",
    cost: 0,
    description: "",
    age: 0,
    ownerName: "",
    contactEmail: "",
  });
  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/dogadoptions/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setFormData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/dogadoptions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the dog adoption entry.");
      }

      // Redirect to the details page after successful update
      window.location.href = `/dog/${id}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to={`/dog/${id}`}>🔙 Back to Dog Details</Link>
      <div className="update-dog">
        <h1>Update Dog Adoption Entry</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="dogType">Dog Type:</label>
            <input
              type="text"
              id="dogType"
              name="dogType"
              value={formData.dogType}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="picture">Picture:</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name:</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email:</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateDogAdoption;



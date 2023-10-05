// import React, { useState } from "react";

// function CreateDogAdoption() {
//   const [formData, setFormData] = useState({
//     dogType: "",
//     picture: "",
//     cost: 0,
//     description: "",
//     adoptionReason: "",
//     age: 0,
//     ownerName: "",
//     contactEmail: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handlePictureChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       picture: file,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("dogType", formData.dogType);
//       formDataToSend.append("picture", formData.picture);
//       formDataToSend.append("cost", formData.cost);
//       formDataToSend.append("description", formData.description);
//       formDataToSend.append("adoptionReason", formData.adoptionReason);
//       formDataToSend.append("age", formData.age);
//       formDataToSend.append("ownerName", formData.ownerName);
//       formDataToSend.append("contactEmail", formData.contactEmail);

//       const response = await fetch("http://localhost:4000/api/dogadoptions", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create a new dog adoption entry.");
//       }

//       // Reset the form after successful submission
//       setFormData({
//         dogType: "",
//         picture: "",
//         cost: 0,
//         description: "",
//         adoptionReason: "",
//         age: 0,
//         ownerName: "",
//         contactEmail: "",
//       });

//       // You can add a success message or redirection here
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error and display an error message if needed
//     }
//   };

//   return (
//     <div>
//       <h1>Create Dog Adoption Entry</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="dogType">Dog Type:</label>
//           <input
//             type="text"
//             id="dogType"
//             name="dogType"
//             value={formData.dogType}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="picture">Picture:</label>
//           <input
//             type="file"
//             id="picture"
//             name="picture"
//             onChange={handlePictureChange}
//             accept="image/*"
//           />
//         </div>
//         <div>
//           <label htmlFor="cost">Cost:</label>
//           <input
//             type="number"
//             id="cost"
//             name="cost"
//             value={formData.cost}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="adoptionReason">Adoption Reason:</label>
//           <textarea
//             id="adoptionReason"
//             name="adoptionReason"
//             value={formData.adoptionReason}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="ownerName">Owner Name:</label>
//           <input
//             type="text"
//             id="ownerName"
//             name="ownerName"
//             value={formData.ownerName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="contactEmail">Contact Email:</label>
//           <input
//             type="email"
//             id="contactEmail"
//             name="contactEmail"
//             value={formData.contactEmail}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }

// export default CreateDogAdoption;



import React, { useState } from "react";

function CreateDogAdoption() {
  const [formData, setFormData] = useState({
    dogType: "",
    picture: "",
    cost: 0,
    description: "",
    adoptionReason: "",
    age: 0,
    ownerName: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("dogType", formData.dogType);
      formDataToSend.append("picture", formData.picture);
      formDataToSend.append("cost", formData.cost);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("adoptionReason", formData.adoptionReason);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("ownerName", formData.ownerName);
      formDataToSend.append("contactEmail", formData.contactEmail);

      const response = await fetch("http://localhost:4000/api/dogadoptions", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to create a new dog adoption entry.");
      }

      // Reset the form after successful submission
      setFormData({
        dogType: "",
        picture: "",
        cost: 0,
        description: "",
        adoptionReason: "",
        age: 0,
        ownerName: "",
        contactEmail: "",
      });

      // You can add a success message or redirection here
    } catch (error) {
      console.error("Error:", error);
      // Handle error and display an error message if needed
    }
  };

  return (
    <div>
      <h1>Create Dog Adoption Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dogType">Dog Type:</label>
          <input
            type="text"
            id="dogType"
            name="dogType"
            value={formData.dogType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handlePictureChange}
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="adoptionReason">Adoption Reason:</label>
          <textarea
            id="adoptionReason"
            name="adoptionReason"
            value={formData.adoptionReason}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ownerName">Owner Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateDogAdoption;


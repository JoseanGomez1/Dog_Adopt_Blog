// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // function Blog() {
// //   const baseUrl = "http://localhost:4000/api/dogadoptions";
// //   const [data, setData] = useState([]);

// //   useEffect( () => {
    
// //     const fetchData = async()=> {
// //       try {
        
// //         const response = await fetch(baseUrl);

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data.");
// //         }

// //         const jsonData = await response.json();
// //         setData(jsonData);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     }
// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Blog</h1>
// //       <p>Example Blog content goes here...</p>
// //       <h2>fetch data</h2>


      
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //       </div>
// //   );
// // }

     

// // export default Blog;


// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // function Blog() {
// //   const baseUrl = "http://localhost:4000/api/dogadoptions";
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(baseUrl);

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data.");
// //         }

// //         const jsonData = await response.json();
// //         setData(jsonData);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Blog</h1>
// //       <p>Example Blog content goes here...</p>

// //       <h2>Fetched Data</h2>

// //       <div className="dog-list">
// //         {data.map((item) => (
// //           <div className="dog-item" key={item._id}>
// //             <img
// //               src={`http://localhost:4000/uploads/${item.picture}`}
// //               alt={item.dogType}
// //             />
// //             <h3>{item.dogType}</h3>
// //             <p>Cost: ${item.cost}</p>
// //             <p>Description: {item.description}</p>
// //             <p>Age: {item.age} years</p>
// //             <p>Owner: {item.ownerName}</p>
// //             <p>Contact: {item.contactEmail}</p>
// //             <Link to={`/dog/${item._id}`}>View Details</Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Blog;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Blog() {
//   const baseUrl = "http://localhost:4000/api/dogadoptions";
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(baseUrl);

//         if (!response.ok) {
//           throw new Error("Failed to fetch data.");
//         }

//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Blog</h1>
//       <p>Example Blog content goes here...</p>

//       <h2>Fetched Data</h2>

//       <div className="dog-list">
//         {data.map((item) => (
//           <div className="dog-item" key={item._id}>
//             <img
//               src={`http://localhost:4000/uploads/${item.picture}`}
//               alt={item.dogType}
//             />
//             <h3>{item.dogType}</h3>
//             <p>Cost: ${item.cost}</p>
//             <p>Description: {item.description}</p>
//             <p>Age: {item.age} years</p>
//             <p>Owner: {item.ownerName}</p>
//             <p>Contact: {item.contactEmail}</p>
            
//             {/* Add a Link to the UpdateDogAdoption component */}
//             <Link to={`/update-dog/${item._id}`}>Update Entry</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;


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

  return (
    <div>
      <h1>Blog</h1>
      <p>Example Blog content goes here...</p>

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;


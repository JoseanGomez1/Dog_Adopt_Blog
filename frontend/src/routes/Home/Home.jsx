// import React, { useEffect } from "react";
// import $ from 'jquery';

// function Home() {
//   useEffect(() => {
//     // Function to fetch and add the dog image to the DOM
//     function fetchAndAddDog() {
//       $.getJSON("https://dog.ceo/api/breeds/image/random")
//         .done(addDog)
//         .fail(function () {
//           console.log("Dog fetch failed!");
//         });
//     }

//     // Function to add the dog image to the DOM
//     function addDog(data) {
//       $("#dogImg").attr("src", data.message);
//     }

//     // Fetch and add the dog image when the component mounts
//     fetchAndAddDog();

//     // Set up an interval to fetch a new dog image every X seconds (e.g., 10 seconds)
//     const intervalId = setInterval(fetchAndAddDog, 10000); // Adjust the interval as needed

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h2>Random Dog Image</h2>
//       <img id="dogImg" src="" alt="Random Dog" />
//     </div>
//   );
// }

// export default Home;
import React, { useEffect } from "react";
import $ from 'jquery';

function Home() {
  useEffect(() => {
    // Function to fetch and add the dog image to the DOM
    function fetchAndAddDog() {
      $.getJSON("https://dog.ceo/api/breeds/image/random")
        .done(addDog)
        .fail(function () {
          console.log("Dog fetch failed!");
        });
    }

    // Function to add the dog image to the DOM
    function addDog(data) {
      $("#dogImg").attr("src", data.message);
    }

    // Fetch and add the dog image when the component mounts
    fetchAndAddDog();

    // Set up an interval to fetch a new dog image every X seconds (e.g., 10 seconds)
    const intervalId = setInterval(fetchAndAddDog, 10000); // Adjust the interval as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Random Dog Image</h2>
      <img
        id="dogImg"
        src=""
        alt="Random Dog"
        className="rounded-lg shadow-lg"
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
}

export default Home;

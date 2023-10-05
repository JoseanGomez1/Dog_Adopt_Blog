import React, { useEffect } from "react";
import $ from 'jquery';

function Home() {
  useEffect(() => {

    function fetchAndAddDog() {
      $.getJSON("https://dog.ceo/api/breeds/image/random")
        .done(addDog)
        .fail(function () {
          console.log("Dog fetch failed!");
        });
    }

    function addDog(data) {
      $("#dogImg").attr("src", data.message);
    }

    fetchAndAddDog();

    const intervalId = setInterval(fetchAndAddDog, 10000);

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
        style={{ width: "100%" }} // Set width to 100%
      />
    </div>
  );
}

export default Home;

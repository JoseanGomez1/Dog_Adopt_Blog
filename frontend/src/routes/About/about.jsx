import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">About My Dog Adoption App</h1>
      <p className="text-lg mb-4">
        Welcome to our Dog Adoption App, a platform dedicated to helping dog lovers like you experience the joy of canine companionship, even if you're on a tight budget.
      </p>

      <p className="text-lg mb-4">
        Key features of our app include:
      </p>

      <ul className="list-disc ml-6 text-lg mb-4">
        <li>Affordable dog adoption options</li>
        <li>Diverse selection of dog breeds</li>
        <li>Comprehensive dog listings with detailed information</li>
        <li>Streamlined adoption process</li>
        <li>Community support and resources</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Why Our App?</h2>
      <p className="text-lg mb-4">
        At our Dog Adoption App, we believe that the love and companionship of a dog should be accessible to everyone. Our platform is designed to cater to users who are passionate about dogs but may face financial constraints. We offer a variety of dog breeds, including Labradors, German Shepherds, Poodles, and Huskies, among others, at affordable adoption fees.
      </p>

      <p className="text-lg mb-4">
        Our mission is to connect loving homes with dogs in need and to provide valuable resources to help you care for your new furry family member. Join our community today and embark on your journey to dog ownership!
      </p>
    </div>
  );
}

export default About;

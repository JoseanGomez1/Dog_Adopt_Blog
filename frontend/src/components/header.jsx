import React from 'react';
import '../components/Header.css'; 
import { Link } from "react-router-dom"; 

const dogImageURL = 'https://thumbs.dreamstime.com/b/cute-dog-smile-face-puppies-logo-banner-t-shirt-designs-print-etc-179313090.jpg'; // Provided image URL

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={dogImageURL} alt="Dog Logo" className="logo-img" />
        <h1 className="logo-text">Puppy Adoption Blog</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="bg-blue-500 text-white px-2 py-1 rounded">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="bg-blue-500 text-white px-2 py-1 rounded">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogpost" className="bg-blue-500 text-white px-2 py-1 rounded">Blog</Link>
          </li>
          <li className="nav-item">
            {}
            <Link to="/create" className="bg-blue-500 text-white px-2 py-1 rounded">Create Blog Post</Link>
          </li>
          {}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

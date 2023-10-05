import React from 'react';
import './Header.css'; // Import your CSS file
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const dogImageURL = 'https://t4.ftcdn.net/jpg/04/46/59/73/360_F_446597392_IouFARqqxFSEzCJwyRc6RXogz9ZxQNsQ.jpg'; // Provided image URL

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
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogpost">Blog</Link>
          </li>
          <li className="nav-item">
            {/* Add the Create Blog Post link */}
            <Link to="/create">Create Blog Post</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

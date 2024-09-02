// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-60 backdrop-blur-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Student Hub
        </Link>
        <div>
          <Link to="/internships" className="text-gray-300 hover:text-white px-4">
            Internships
          </Link>
          <Link to="/grades-calculator" className="text-gray-300 hover:text-white px-4">
            Grades Calculator
          </Link>
          <Link to="/roadmaps" className="text-gray-300 hover:text-white px-4">
            Roadmaps
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

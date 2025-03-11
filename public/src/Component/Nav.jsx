import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css';
import logo from '../Images/logobg.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the route changes

  return (
    <nav className="bg-white-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 md:w-14" />
          <h1 className="text-lg md:text-xl font-bold text-gray-800">Saksham Softech</h1>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul
          className={`md:flex absolute md:static bg-white-800 w-full md:w-auto flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li><Link to="/" id="navli">Home</Link></li>
          <li><Link to="/about" id="navli">About Us</Link></li>
          <li><Link to="/services" id="navli">Services</Link></li>
          <li><Link to="/portfolio" id="navli">Portfolio</Link></li>
          <li><Link to="/contact" id="navli">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

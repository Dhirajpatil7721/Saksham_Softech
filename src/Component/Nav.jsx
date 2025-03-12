import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import logo from '../Images/logobg.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 
  const navigate = useNavigate();

  const go=()=>{
    navigate('/');
  }
  return (
    <nav className="bg-white-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 md:w-14" />
          <h1 className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer" onClick={go}>Saksham Softech</h1>
        </div>
        <button
          className="md:hidden text-white bg-white-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul 
          // className={`md:flex absolute md:static  w-full md:w-auto flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
          //   isOpen ? "block" : "hidden"
          // }`}

          className={`md:flex absolute md:static w-full md:w-auto flex-col md:flex-row md:space-x-6 
            space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ease-in-out 
            ${isOpen ? "block bg-white shadow-md" : "hidden"} md:bg-transparent`}
        >
          <li><Link  to="/" id="navli">Home</Link></li>
          <li><Link  to="/about" id="navli">About Us</Link></li>
          <li><Link  to="/services" id="navli">Services</Link></li>
          <li><Link  to="/portfolio" id="navli">Portfolio</Link></li>
          <li><Link  to="/carrer" id="navli">Carrer</Link></li>
          <li><Link  to="/contact" id="navli">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Nav.css";
// import logo from "../Images/logobg.png";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Scroll to top on route change & close menu
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
//           <img src={logo} alt="Logo" className="w-12 md:w-14" />
//           <h1 className="text-lg md:text-xl font-bold text-white">Saksham Softech</h1>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>

//         {/* Navigation Links (Animated on Small Screens) */}
//         <ul
//           className={`fixed top-0 left-0 h-full w-3/4 bg-gray-900 md:bg-transparent md:static md:w-auto flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-6 md:p-0 transition-transform duration-300 ${
//             isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 md:opacity-100"
//           } md:translate-x-0 md:opacity-100`}
//         >
//           {["Home", "About Us", "Services", "Portfolio", "Contact"].map((item, index) => (
//             <li key={index} className="text-center md:text-left">
//               <Link 
//                 to={`/${item.toLowerCase().replace(" ", "")}`} 
//                 className="block text-white hover:text-gray-300 transition duration-300"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

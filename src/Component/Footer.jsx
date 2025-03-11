import React, { useState } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logobg from "../Images/logobg.png";
import { color } from "framer-motion";

function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  const navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
  return (
    <div>
      <footer className="bg-gray-400 text-white py-16 w-full">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Social Links */}
          <div id="finfo">
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              <img src={logobg} alt="Logo" className="w-16 sm:w-20 md:w-16 lg:w-14 xl:w-20" />
            </div>

            <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start mt-2">
              <Link to="#" target="_blank" className="mr-2 hover:text-blue-400 text-gray-900"><FaTwitter /></Link>
              <Link to="https://www.facebook.com/profile.php?id=61573923327168" className="mr-2 hover:text-blue-600 text-gray-900" target="_blank" ><FaFacebookF /></Link>
              <Link to="https://www.instagram.com/sakshamsoftech/" target="_blank" className="mr-3 hover:text-red-500 text-gray-900"><FaInstagram /></Link>
              <Link to="#" target="_blank" className="hover:text-blue-500 text-gray-900"><FaLinkedin /></Link>
            </div>
          </div>

          {/* Useful Links - Dropdown on Small Screens */}
          <div>
            <button
              className="text-lg font-semibold mb-2 text-gray-900 w-full text-left sm:hidden flex justify-between items-center"
              onClick={() => toggleMenu("useful")} style={{ color: openMenu === "useful" ? "black" : "blue" }}
            >
              Useful Links
              {/* <span>{openMenu === "useful" ? "▲" : "▼"}</span> */}
              {/* <span>{openMenu === "useful" ? style={{color:"blue"}} : style={{color:"black"}}}</span> */}
            </button>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 hidden sm:block">
              Useful Links
            </h4>
            <ul className={`space-y-2 ${openMenu === "useful" ? "block" : "hidden"} sm:block`}>
              <li><Link to="/" className="hover:text-blue-600 text-gray-900">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 text-gray-900">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 text-gray-900">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-600 text-gray-900">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services - Dropdown on Small Screens */}
          <div>
            <button
              className="text-lg font-semibold mb-2 text-gray-900 w-full text-left sm:hidden flex justify-between items-center"
              onClick={() => toggleMenu("services")} style={{ color: openMenu === "services" ? "black" : "blue" }}
            >
              Our Services
              {/* <span>{openMenu === "services" ? "▲" : "▼"}</span> */}
            </button>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 hidden sm:block">
              Our Services
            </h4>
            <ul className={`space-y-2 ${openMenu === "services" ? "block" : "hidden"} sm:block`}>
              <li><Link to="software" className="hover:text-blue-600 text-gray-900">Software Development</Link></li>
              <li><Link to="web" className="hover:text-blue-600 text-gray-900">Web & Mobile Apps</Link></li>
              <li><Link to="it" className="hover:text-blue-600 text-gray-900">IT Consulting</Link></li>
              <li><Link to="cybersecurity" className="hover:text-blue-600 text-gray-900">Cybersecurity</Link></li>
              <li><Link to="cloud" className="hover:text-blue-600 text-gray-900">Cloud Solutions</Link></li>
              <li><Link to="ecommerce" className="hover:text-blue-600 text-gray-900">E-commerce Solutions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Our Newsletter</h4>
            <p className="text-gray-900">Subscribe to our newsletter and receive the latest updates.</p>
            <form className="mt-4 flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md bg-gray-300 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white border border-gray-900 font-semibold transition-all hover:scale-105">
                Subscribe
              </button> */}
              <button id="btn" className="relative flex items-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white border border-gray-900 font-semibold transition-all hover:scale-105">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Subscribe</span>
              </button>

            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 mt-10 pt-6 text-gray-900">
          <p>&copy; 2025 Saksham Softtech. All Rights Reserved.</p>
          <p>Designed & Developed by <strong className="text-blue-800 hover:text-blue-800 cursor-pointer" onClick={home}>Saksham Softtech</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

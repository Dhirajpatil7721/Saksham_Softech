import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaServer, FaClipboardCheck, FaHeadset } from "react-icons/fa";
import './Home.css'
import background from "../Images/background.jpg";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import homebox7 from "../Images/homebox7.jpg";
import homebox8 from "../Images/homebox8.jpg";
import homebox9 from "../Images/homebox9.jpg";
import card1 from "../Images/floppy-disc.png";
import card2 from '../Images/technology.png';
import card3 from '../Images/hacker.png';
import card4 from '../Images/like.png';
import card5 from '../Images/api.png';
import card6 from '../Images/data.png';
import web from '../Images/homeCardWeb.jpg';
import mob from '../Images/homecardMobile.jpg';
import digi from '../Images/homedigital.jpg';
import soft from '../Images/software.jpg';
// import Typed from 'typed.js';

const images = [background2, background1, background];

// const serviceImages = [
//   { title: "TECHNOLOGY", img: homebox7 },
//   { title: "DIGITAL", img: homebox8 },
//   { title: "DEVELOPMENT", img: homebox9 },
// ];

const Home = () => {
  
  
  // const typedElement = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(typedElement.current, {
  //     strings: ['Saksham Softech'],
  //     typeSpeed: 50,
  //     backSpeed: 30,
  //     loop: true,
  //   });

  //   return () => {
  //     typed.destroy(); // Cleanup on unmount
  //   };
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Slideshow */}
      <div className="relative w-full h-screen overflow-hidden" id='hcontainer'>
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>


        {/* /////////////////////////////////Text Content ////////////////////////// */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg" id="welcom">
            Welcome to <span className="text-blue-400">Saksham Softech</span>
            {/* Welcome to <span className="text-blue-400" ref={typedElement} ></span> */}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Your one-stop solution for modern, high-performance, and fully responsive web development.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105">
            Get Started
          </button>
        </div>
      </div>



     {/*//////////////////////////////// Service Cards ///////////////////////////////////*/}
     <div className="mt-4 mb-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-[96.9%]">
        {/* Card 1 */}
        <div className="bg-primary text-white p-4 flex flex-col items-center text-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-0 text-black bg-gradient-to-r from-[#085162] to-[#C6E7F9]
 w-full h-[6vh] flex items-center justify-center rounded-t-lg">
            TECHNOLOGY
          </h2>
          <img className="w-full h-[35vh] object-cover rounded-b-lg transition duration-300 hover:opacity-80" src={homebox9} alt="Technology" />
        </div>

        {/* Card 2 */}
        <div className="bg-primary text-white p-4 flex flex-col items-center text-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-0 text-black bg-gradient-to-r from-[#085162] to-[#C6E7F9]
 w-full h-[6vh] flex items-center justify-center rounded-t-lg">
            DIGITAL
          </h2>
          <img className="w-full h-[35vh] object-cover rounded-b-lg transition duration-300 hover:opacity-80" src={homebox8} alt="Digital" />
        </div>

        {/* Card 3 */}
        <div className="bg-primary text-white p-4 flex flex-col items-center text-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-0 text-black bg-gradient-to-r from-[#085162] to-[#C6E7F9]
 w-full h-[6vh] flex items-center justify-center rounded-t-lg">
            DEVELOPMENT
          </h2>
          <img className="w-full h-[35vh] object-cover rounded-b-lg transition duration-300 hover:opacity-80" src={homebox7} alt="Development" />
        </div>
      </div>
      {/* /////////////////////////////////////////side Caeds/////////////////////////////////////////// */}

      <div className="w-[90%] mx-auto py-8">
      {/* Web Development Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 shadow-lg p-6 rounded-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <img src={web} alt="Web Development" className="w-full h-64 md:h-72 max-w-md object-cover rounded-xl" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-purple-900" >Web Design & Development Services</h1>
          <p className="text-gray-900 mt-2" >
            At Saksham Softtech, we craft high-quality, SEO-friendly websites designed to elevate your online presence.
          </p>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>✔️ Creative & Modern Designs</li>
            <li>✔️ Fully Functional & Scalable</li>
            <li>✔️ Visually Appealing, Professional & Error-Free</li>
            <li>✔️ Cross-Browser & Mobile Compatible</li>
            <li>✔️ Optimized for Speed & Performance</li>
            <li>✔️ Aligned with International Business Standards</li>
          </ul>
        </div>
      </motion.div>

      {/* Mobile App Development Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 shadow-lg p-6 rounded-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold text-purple-900">Mobile App Development Services</h1>
          <p className="text-gray-900 mt-2">
            We develop high-performance mobile applications with a focus on seamless user experience and functionality.
          </p>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>✔️ Custom Icons & UI/UX Design</li>
            <li>✔️ User-Friendly & Intuitive Interface</li>
            <li>✔️ Crash-Free & Secure Apps</li>
            <li>✔️ Cross-Platform Compatibility (iOS & Android)</li>
            <li>✔️ Cost-Effective & Scalable Solutions</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src={mob} alt="Mobile App Development" className="w-full h-64 md:h-72 max-w-md object-cover rounded-xl" />
        </div>
      </motion.div>

      {/* Digital Marketing Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 shadow-lg p-6 rounded-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <img src={digi} alt="Digital Marketing" className="w-full h-64 md:h-72 max-w-md object-cover rounded-xl" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-purple-900">Digital Marketing Services</h1>
          <p className="text-gray-700 mt-2">
            A strong digital marketing strategy can make or break your business! At Saksham Softtech, we help you maximize your brand’s reach and attract the right audience.
          </p>
          <ul className="text-gray-900 mt-2 space-y-1">
            <li>✔️ SEO-Optimized Marketing Strategies to rank your business at the top of search engines</li>
            <li>✔️ Social Media Promotions to boost your brand visibility across platforms</li>
            <li>✔️ Targeted Ads & Campaigns for cost-effective lead generation</li>
            <li>✔️ Result-Driven Approach to accelerate business growth</li>
          </ul>
        </div>
      </motion.div>

      {/* Software Maintenance & Support */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 shadow-lg p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-purple-900">Software Creation & Maintenance</h1>
          <p className="text-gray-700 mt-2">
            Ensure the longevity and reliability of your software with our expert maintenance services.
          </p>
          <ul className="text-gray-900 mt-2 space-y-1">
            <li>✔️ Software Creation</li>
            <li>✔️  Software Maintenance</li>
            <li>✔️  ERP Software</li>
            {/* <li>✔️ Regular Updates & Bug Fixes to keep your system running smoothly</li> */}
            {/* <li>✔️ Performance Optimization for enhanced speed and efficiency</li> */}
            <li>✔️ Security Enhancements to protect your data from threats</li>
            <li>✔️ 24/7 Technical Support for immediate issue resolution</li>
            <li>✔️ Scalability Upgrades to match your growing business needs</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={soft} alt="Software Maintenance" className="w-full h-64 md:h-72 max-w-md object-cover rounded-xl" />
        </div>
      </motion.div>
    </div>




      <hr className="w-[95%] border border-gray-500 mb-6" />

      <h1 className="mb-5 text-center font-medium text-2xl text-gray-500">
        We Love Our Work.
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card1} alt="flopy" />
          <h1 className="text-lg font-semibold text-red-500">Business Process Automation</h1>
          <p className="text-gray-600">We specialise in helping companies streamline their workflow through automating business processes.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card2} alt="" />
          <h1 className="text-lg font-semibold text-red-500">iOS and Android</h1>
          <p className="text-gray-600">We build iOS and Android apps as per the specifications. We use object-oriented code to implement the mobile apps.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card3} alt="" />
          <h1 className="text-lg font-semibold text-red-500">Secure and Scalable Web Apps</h1>
          <p className="text-gray-600">We build secure and scalable web apps. We design and implement highly scalable and available architecture.</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card4} alt="" />
          <h1 className="text-lg font-semibold text-red-500">UX/UI Design</h1>
          <p className="text-gray-600">We are passionate about user experience and that is what differentiates our services from our competitors.</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card5} alt="" />
          <h1 className="text-lg font-semibold text-red-500">Cloud Integration</h1>
          <p className="text-gray-600">We build back-end server software using highly scalable, secure, and reliable Amazon Cloud Services.</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 bg-gray-100 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
          <img className="w-12 mb-2 animate-bounce mt-2" src={card6} alt="" />
          <h1 className="text-lg font-semibold text-red-500">API Integration</h1>
          <p className="text-gray-600">We have good experience integrating APIs. We have worked on integrating various car, flight, and hotel APIs.</p>
        </div>
      </div>




    </div>
  );
};

export default Home;

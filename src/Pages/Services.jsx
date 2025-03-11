
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import homesoftware from "../Images/homesoftware.jpeg";
import homewebdev from "../Images/homewebdev.jpeg";
import { Code, Smartphone, Briefcase, Shield, Cloud, ShoppingCart } from "lucide-react";
import features1 from "../Images/featur1.jpg";
import features2 from "../Images/featur2.jpg";
import services1 from "../Images/slider1.jpg";
import services2 from "../Images/slider2.jpg";
import services3 from "../Images/slider3.jpg";
import services4 from "../Images/slider4.jpg";

const featuresData = [
  { id: 1, title: "Cloud-Based Access", description: "Manage workplace operations from anywhere with secure cloud solutions.", image: services1 },
  { id: 2, title: "Multi-Device Compatibility", description: "Seamless access across desktops, tablets, and mobile devices.", image: services2 },
  { id: 3, title: "Predictive Maintenance", description: "AI-driven alerts to prevent equipment failures before they happen.", image: services3 },
  { id: 4, title: "Custom Workflows", description: "Tailor workplace processes to match specific business needs.", image: services4 },
];
const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    border: "purple",
    icon: <Code className="w-12 h-12 text-purple-500" />,
    path: "/software"
  },
  {
    title: "Web & Mobile Apps",
    description: "Building modern, responsive applications for all platforms.",
    border: "blue",
    icon: <Smartphone className="w-12 h-12 text-blue-500" />,
    path: "/web"
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to optimize your technology solutions.",
    border: "green",
    icon: <Briefcase className="w-12 h-12 text-green-500" />,
    path: "/it"
  },
  {
    title: "Cybersecurity",
    description: "Protecting your business with robust security solutions.",
    border: "red",
    icon: <Shield className="w-12 h-12 text-red-500" />,
    path: "/cybersecurity"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud computing tailored to your needs.",
    border: "orange",
    icon: <Cloud className="w-12 h-12 text-orange-500" />,
    path: "/cloud"
  },
  {
    title: "E-commerce Solutions",
    description: "Developing online stores that drive conversions.",
    border: "teal",
    icon: <ShoppingCart className="w-12 h-12 text-teal-500" />,
    path: "/ecommerce"
  },
];

const Services = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]);

  const navigate=useNavigate();
  return (
    <div>
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-gradient-to-b from-gray-800 to-gray-600 text-white text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Providing seamless and efficient solutions for every challenge.</p>
      </motion.div>

      {/* Features Section */}
      <section className="py-10 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            {featuresData.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left p-4 rounded-lg shadow-md flex gap-4 items-center transition-all duration-300 mb-3 ${activeFeature.id === feature.id ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className="w-full flex justify-center">
            <img src={activeFeature.image || homewebdev} alt={activeFeature.title} className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105" />
          </motion.div>
        </div>
      </section>

      {/* Web Development Section */}
      {/* <ServiceSection title="Web Design & Development" description="Tailor-made websites that match your brand identity and business goals. Designed to rank higher in search engines for better visibility. Secure and scalable online store development with seamless payment integration. Regular updates, security patches, and optimization." image={homewebdev} /> */}

      {/* Software Development Section */}
      {/* <ServiceSection title="Software Development" description="Scalable and efficient solutions for business automation, cloud-based software solutions, and industry-specific applications. Software development includes designing, coding, testing, and maintaining applications." image={homesoftware} reverse /> */}
      <section id="features-details" className="py-16 bg-gray-100">
        <div className="container mx-auto px-5">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={features1}
                alt="Feature 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Enhancing Workplace Efficiency with Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize your workplace with cutting-edge technology and seamless integration to drive efficiency and innovation. Our solutions help businesses streamline operations, reduce costs, and enhance productivity. Gain real-time insights to make informed decisions, automate processes for smoother workflows, and improve overall operational performance. With advanced automation and AI-driven analytics, you can proactively address challenges, minimize downtime, and maximize efficiency. Experience a smarter way to manage your facilities with secure, scalable, and future-ready solutions tailored to your business needs. Transform your workplace with technology that empowers smarter decision-making, enhances collaboration, and creates a cost-effective, highly productive work environment.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
            <div
              className="text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Smart Workplace Solutions for Enhanced Efficiency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage advanced technology to revolutionize your workplace. Our cutting-edge solutions provide real-time insights, optimize operations, and reduce costs. Automate repetitive tasks, enhance decision-making, and improve overall efficiency. By integrating smart systems, you can streamline workflows, boost productivity, and ensure seamless operations. Gain instant access to crucial data, enabling proactive management and strategic planning. Our innovative approach fosters a collaborative, data-driven work environment that adapts to changing business needs. Experience a smarter, more efficient way to manage your facilities with automation, intelligent analytics, and seamless integration, ensuring sustainable growth, cost savings, and enhanced employee satisfaction.
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={features2}
                alt="Feature 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Our Expertise Section */}
        {/* <section className="py-16 px-4 sm:px-6 text-center bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                description:
                  "Custom software solutions tailored to your business needs.",
                border: "purple",
              },
              {
                title: "Web & Mobile Apps",
                description:
                  "Building modern, responsive applications for all platforms.",
                border: "blue",
              },
              {
                title: "IT Consulting",
                description:
                  "Strategic guidance to optimize your technology solutions.",
                border: "green",
              },
              {
                title: "Cybersecurity",
                description:
                  "Protecting your business with robust security solutions.",
                border: "red",
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud computing tailored to your needs.",
                border: "orange",
              },
              {
                title: "E-commerce Solutions",
                description: "Developing online stores that drive conversions.",
                border: "teal",
              },

            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-lg shadow-xl border-l-4 border-${service.border}-500`}
              >
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-all duration-300">
                  Get Details
                </button>
              </div>
            ))}
          </div>
        </section> */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 text-center bg-gray-50">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={"bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-${service.border}-500 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">{service.description}</p>
                <motion.button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=> navigate(service.path) }
                >
                  Get Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>
      </section>


    </div>
  );
}

function ServiceSection({ title, description, image, reverse = false }) {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        <motion.div initial={{ opacity: 0, x: reverse ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: reverse ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <img src={image} alt={title} className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105" />
        </motion.div>
      </div>
    </section>

  );
}
export default Services;
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import add from '../Images/map.png';
import contact from '../Images/phone-call.png';
import mail from '../Images/gmail.png';
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate Name Field
    if (name === "name") {
      if (/\d/.test(value)) {
        setNameError("Numbers are not allowed");
      } else {
        setNameError(""); // Clear error if input is valid
      }
    }

    // Update the state for all fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email format! Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Your Message Sent Successfully, We'll Connect Shortly");
      } else {
        setResponseMessage(data.error || "Something went wrong!");
        toast.error("Error!! Something Went Wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setResponseMessage("Server error. Please try again later.");
      toast.error("Error!! Something Went Wrong");
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20">
      {/* Section Title */}
      <div className="text-center my-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 transition-transform duration-300 hover:scale-110">
          Contact Us
        </h2>
        <p className="text-gray-600 text-2xl  mt-2">
          "Let's connect! Get in touch for Support or Collaboration."
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Address Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={add} alt="Address Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="px-4">
            Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
          </p>
        </div>

        {/* Call Us Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={contact} alt="Call Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Call Us</h3>
          {/* <p>+91 8010540275</p> */}
          <Link to="tel:+918010540275" className="hover:text-blue-400 transition-colors duration-300">
            +91 8010540275
          </Link>

        </div>

        {/* Email Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={mail} alt="Mail Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Email Us</h3>
          {/* <p>sakshamsoftech@gmail.com</p> */}
          <Link to="mailto:sakshamsoftech@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
            sakshamsoftech@gmail.com
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 rounded-lg shadow-lg">
        {/* Responsive Grid */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 mt-7 mb-7">
          {/* Google Map */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.888144677903!2d73.81075417426985!3d18.48872517014805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0054aa893b%3A0xd717ce15265054cf!2sSaksham%20softech!5e0!3m2!1sen!2sin!4v1742295671442!5m2!1sen!2sin"
              className="w-full h-full rounded-lg shadow-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          

          {/* Contact Form */}
          <div className="h-auto md:h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 shadow-lg rounded-lg h-auto md:h-full flex flex-col justify-between"
            >
              <h1
                className="text-center text-3xl md:text-2xl  mb-4 text-gray-900 
  hover:text-blue-600 transition duration-300"
              >
                Contact
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-1"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="h-5">
                    {/* Fixed height to prevent shifting */}
                    {nameError && (
                      <span className="text-red-500 text-sm">{nameError}</span>
                    )}
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="text-center">
                {loading && <div className="text-blue-500">Sending...</div>}
                {responseMessage && (
                  <div className="text-green-500">{responseMessage}</div>
                )}
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactUs;
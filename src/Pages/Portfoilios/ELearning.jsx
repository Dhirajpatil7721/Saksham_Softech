import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import elearningImage from "../../Images/Elerningportfolio.jpg";

function ELearning() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading Section */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-600">E-Learning Platform</h1>
        <h5 className="text-lg text-gray-700 mt-2">Empowering Online Education</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we offer a comprehensive E-Learning platform designed to deliver engaging online courses, interactive learning experiences, and efficient course management.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={elearningImage} alt="E-Learning Platform" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[
          {
            title: "Course Management",
            features: [
              "Easily create, update, and manage courses.",
              "Upload video lectures, documents, and other learning materials.",
              "Customizable course structures and modules.",
              "Integrated course analytics and performance tracking."
            ]
          },
          {
            title: "Interactive Learning",
            features: [
              "Engaging live classes and webinars.",
              "Interactive discussion forums and chat support.",
              "Virtual classrooms with real-time collaboration.",
              "Multimedia content to enhance learning experiences."
            ]
          },
          {
            title: "Student & Instructor Dashboard",
            features: [
              "Personalized dashboards for students and instructors.",
              "Real-time progress tracking and performance reports.",
              "Easy scheduling and notifications for live sessions.",
              "Seamless communication tools."
            ]
          },
          {
            title: "Assessments & Certification",
            features: [
              "Automated assessments and quizzes.",
              "Instant feedback and grading.",
              "Certification upon successful course completion.",
              "Digital badges and rewards for achievements."
            ]
          }
        ].map((section, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-blue-50 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h5 className="text-xl font-semibold text-blue-600">{index + 1}. {section.title}</h5>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {section.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us? */}
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our E-Learning Platform?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Innovative Learning Experience:</b> Engage with interactive and dynamic content.</li>
          <li>✅ <b>User-Friendly Interface:</b> Seamless navigation for both learners and educators.</li>
          <li>✅ <b>Comprehensive Analytics:</b> Monitor progress and performance effectively.</li>
          <li>✅ <b>24/7 Support:</b> Reliable assistance for all your learning needs.</li>
          <li>✅ <b>Scalable & Customizable:</b> Perfect for institutions and independent educators.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Transform Your Learning Experience Today!</h4>
        <p className="text-gray-600 mt-2">
          Our E-Learning platform streamlines course management, enhances student engagement, and empowers educators to deliver exceptional online education.
        </p>
        <button 
          onClick={() => navigate('/portfolio')} 
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Back
        </button>
      </motion.div>
    </div>
  );
}

export default ELearning;

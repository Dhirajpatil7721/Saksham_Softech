import React from "react";
import { useNavigate } from "react-router-dom";
import Edu from '../../Images/educationportfolio.jpg'

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">Educational Software Solutions</h1>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          At <span className="font-bold">Saksham Softech</span>, we design and develop cutting-edge
          <span className="text-blue-600"> educational software</span> tailored to the evolving needs of
          students, educators, and institutions.
        </p>
        <img src={Edu} alt="Education" className="w-full max-w-lg rounded-lg shadow-lg mx-auto" />

      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ E-Learning Platforms</h5>
            <p className="text-gray-600">Interactive courses, video tutorials, and real-time assessments.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ LMS (Learning Management System)</h5>
            <p className="text-gray-600">Manage courses, track progress, and deliver learning materials efficiently.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ Virtual Classrooms</h5>
            <p className="text-gray-600">Live video sessions, whiteboards, and real-time collaboration tools.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ AI-Powered Personalization</h5>
            <p className="text-gray-600">Smart algorithms tailor content based on student learning patterns.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ Gamified Learning</h5>
            <p className="text-gray-600">Engaging quizzes, simulations, and rewards to enhance motivation.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">✅ Mobile Learning Apps</h5>
            <p className="text-gray-600">Cross-platform apps for learning on the go.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="mt-10 text-center">
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Educational Software?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>🔹 <b>User-Friendly Interface:</b> Easy to navigate for students and educators.</li>
          <li>🔹 <b>Scalability & Flexibility:</b> Suitable for all educational institutions.</li>
          <li>🔹 <b>Data Security:</b> Ensures safe and reliable access to learning materials.</li>
          <li>🔹 <b>Customizable Solutions:</b> Adaptable to meet specific educational needs.</li>
          <li>🔹 <b>24/7 Support:</b> Dedicated technical assistance.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h4 className="text-2xl font-bold text-gray-800">Transform Education with Innovative Software!</h4>
        <p className="text-gray-600 mt-2">
          Empower students and educators with cutting-edge technology.
        </p>
        <button onClick={() => navigate("/portfolio")} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Back
        </button>
      </div>
    </div>
  );
};

export default Education;

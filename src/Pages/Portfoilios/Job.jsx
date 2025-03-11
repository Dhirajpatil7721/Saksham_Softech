import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import jobPortalImage from "../../Images/jobPortal.jpg";

function Job() {
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
        <h1 className="text-4xl font-bold text-blue-600">Job Portal</h1>
        <h5 className="text-lg text-gray-700 mt-2">Connecting Talent with Opportunity</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softtech, we provide an advanced Job Portal to streamline recruitment, job applications, and career growth opportunities.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={jobPortalImage} alt="Job Portal" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[{
          title: "Job Listings & Applications",
          features: [
            "Comprehensive job search with advanced filters.",
            "Easy one-click application process.",
            "Save jobs and track application status.",
            "Automated job alerts and notifications."
          ]
        }, {
          title: "Employer & Recruiter Dashboard",
          features: [
            "Post jobs and manage applications efficiently.",
            "AI-powered candidate matching.",
            "Automated interview scheduling.",
            "Real-time analytics on job postings."
          ]
        }, {
          title: "Resume & Profile Management",
          features: [
            "Build and update profiles with ease.",
            "Upload resumes and showcase skills.",
            "AI-powered resume screening.",
            "Professional resume builder tool."
          ]
        }, {
          title: "Career Guidance & Insights",
          features: [
            "Industry trends and career tips.",
            "Expert guidance for interview preparation.",
            "Skill development recommendations.",
            "Salary insights and negotiation strategies."
          ]
        }].map((section, index) => (
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
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Job Portal?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Smart Job Matching:</b> AI-driven recommendations for job seekers.</li>
          <li>✅ <b>Efficient Recruitment:</b> Streamlined hiring for employers.</li>
          <li>✅ <b>User-Friendly Interface:</b> Seamless experience for all users.</li>
          <li>✅ <b>Data-Driven Insights:</b> Real-time analytics for job trends.</li>
          <li>✅ <b>24/7 Support:</b> Dedicated assistance and career guidance.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Find Your Dream Job Today!</h4>
        <p className="text-gray-600 mt-2">
          Join our Job Portal to access top career opportunities and streamline your hiring process.
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

export default Job;

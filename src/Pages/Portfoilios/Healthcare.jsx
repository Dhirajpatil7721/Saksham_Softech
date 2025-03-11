import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import healthcareImage from "../../Images/healthcareImageportfolio.avif";

function Healthcare() {
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
        <h1 className="text-4xl font-bold text-blue-600">Healthcare Solutions</h1>
        <h5 className="text-lg text-gray-700 mt-2">Innovative Tools for Healthcare Providers</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we provide cutting-edge healthcare solutions designed to
          streamline patient management, telemedicine, billing, and compliance.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={healthcareImage} alt="Healthcare Solutions" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[{
          title: "Patient Management System",
          features: [
            "Seamless patient record management.",
            "Appointment scheduling with reminders.",
            "Secure data encryption for patient confidentiality.",
            "Integrated with hospital and clinic systems."
          ]
        }, {
          title: "Telemedicine & E-Consultations",
          features: [
            "High-quality video consultations with doctors.",
            "E-prescriptions and digital medical records.",
            "AI-powered symptom checker for early diagnosis.",
            "24/7 virtual healthcare assistance."
          ]
        }, {
          title: "Billing & Insurance Management",
          features: [
            "Automated invoicing with multi-payment support.",
            "Insurance claim processing and verification.",
            "Customizable financial reporting and analytics.",
            "Integration with major healthcare insurance providers."
          ]
        }, {
          title: "Regulatory Compliance & Security",
          features: [
            "HIPAA-compliant data storage and sharing.",
            "End-to-end encryption for patient information.",
            "Regular software updates for compliance adherence.",
            "Audit logs and access control for data security."
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
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Healthcare Solutions?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Enhanced Patient Care:</b> Streamline healthcare operations.</li>
          <li>✅ <b>Secure & Compliant:</b> Meets global healthcare standards.</li>
          <li>✅ <b>User-Friendly Interface:</b> Designed for hospitals and clinics.</li>
          <li>✅ <b>Advanced Analytics:</b> Data-driven insights for better decisions.</li>
          <li>✅ <b>24/7 Support:</b> Dedicated assistance for healthcare professionals.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Upgrade Your Healthcare System Today!</h4>
        <p className="text-gray-600 mt-2">
          Our solutions enhance efficiency, ensure data security, and improve patient experiences.
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

export default Healthcare;

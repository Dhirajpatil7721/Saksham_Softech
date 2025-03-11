import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import pharmaImage from "../../Images/pharmaImageportfolio.jpg";

function Pharma() {
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
        <h1 className="text-4xl font-bold text-blue-600">Pharma Software</h1>
        <h5 className="text-lg text-gray-700 mt-2">Optimizing Pharmaceutical Operations</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we provide a comprehensive Pharma Software solution
          designed to manage inventory, prescriptions, sales, and compliance efficiently.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={pharmaImage} alt="Pharma Software" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[{
          title: "Inventory & Stock Management",
          features: [
            "Real-time stock updates with expiry alerts.",
            "Barcode & QR code support for efficient tracking.",
            "Batch & supplier management for seamless operations.",
            "Automated reordering to prevent stock shortages."
          ]
        }, {
          title: "Prescription Management",
          features: [
            "Integrated with hospitals and clinics for digital prescriptions.",
            "Automated medicine reminders and refill tracking.",
            "Secure access to patient prescription history.",
            "E-prescription generation and sharing."
          ]
        }, {
          title: "Sales & Billing Management",
          features: [
            "Automated invoicing with tax calculations.",
            "Multi-payment support: Cash, Card, UPI, and Online.",
            "Discounts and loyalty programs integration.",
            "Real-time sales reports and analytics."
          ]
        }, {
          title: "Regulatory Compliance",
          features: [
            "Adheres to drug safety and regulatory standards.",
            "Complete audit logs for compliance tracking.",
            "Secure data encryption and access control.",
            "Automatic updates for new regulations."
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
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Pharma Software?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Efficient Inventory Management:</b> Reduce losses with automated tracking.</li>
          <li>✅ <b>Secure & Compliant:</b> Meets global healthcare regulations.</li>
          <li>✅ <b>User-Friendly Interface:</b> Easy for pharmacists and healthcare providers.</li>
          <li>✅ <b>Data Analytics:</b> Gain insights with real-time reporting.</li>
          <li>✅ <b>24/7 Support:</b> Dedicated technical assistance and training.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Optimize Your Pharmacy Operations Today!</h4>
        <p className="text-gray-600 mt-2">
          Our Pharma Software ensures efficient management, reduced paperwork, and compliance with industry standards.
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

export default Pharma;

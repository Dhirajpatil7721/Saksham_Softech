
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import dairyImage from "../../Images/DairyManagementSystem.avif";

function Dairy() {
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
        <h1 className="text-4xl font-bold text-blue-600">Dairy Management System</h1>
        <h5 className="text-lg text-gray-700 mt-2">Optimizing Dairy Operations</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we offer a comprehensive Dairy Management System designed to efficiently manage livestock, monitor milk production, oversee inventory, and streamline sales and compliance.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={dairyImage} alt="Dairy Management System" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[
          {
            title: "Livestock Management",
            features: [
              "Track animal health and breeding cycles.",
              "Real-time monitoring of livestock conditions.",
              "Automated alerts for vaccinations and feed schedules.",
              "Comprehensive records for each animal."
            ]
          },
          {
            title: "Milk Production Tracking",
            features: [
              "Monitor daily milk yield and quality.",
              "Automated production logs and performance analytics.",
              "Integration with sensor data for precise measurements.",
              "Alerts for abnormal production trends."
            ]
          },
          {
            title: "Inventory & Supply Management",
            features: [
              "Manage feed, medicine, and equipment inventory.",
              "Automated reordering to maintain optimal stock levels.",
              "Barcode & QR code support for tracking supplies.",
              "Real-time inventory updates and alerts."
            ]
          },
          {
            title: "Sales & Billing Management",
            features: [
              "Automated invoicing with tax calculations.",
              "Multi-payment support: Cash, Card, and Online.",
              "Real-time sales reports and analytics.",
              "Integrated loyalty and discount programs."
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
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Dairy Management System?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Efficient Livestock Monitoring:</b> Ensure optimal animal health and productivity.</li>
          <li>✅ <b>Real-Time Production Insights:</b> Track milk yield and quality with precision.</li>
          <li>✅ <b>User-Friendly Interface:</b> Simplify operations for farm managers and staff.</li>
          <li>✅ <b>Data-Driven Analytics:</b> Gain actionable insights to optimize dairy operations.</li>
          <li>✅ <b>24/7 Support:</b> Reliable technical assistance and training.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Transform Your Dairy Operations Today!</h4>
        <p className="text-gray-600 mt-2">
          Our Dairy Management System streamlines your operations, enhances production efficiency, and ensures regulatory compliance.
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

export default Dairy;
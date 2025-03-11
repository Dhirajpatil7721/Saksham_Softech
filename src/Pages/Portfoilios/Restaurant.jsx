
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import restaurantImage from "../../Images/restaurantportfolio.webp";

function Restaurant() {
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
        <h1 className="text-4xl font-bold text-blue-600">Restaurant Platform</h1>
        <h5 className="text-lg text-gray-700 mt-2">Savor the Perfect Dining Experience</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we deliver a comprehensive Restaurant Platform designed to streamline menu management, online reservations, order processing, and customer engagement for an exceptional dining experience.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={restaurantImage} alt="Restaurant Platform" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[
          {
            title: "Menu & Dish Management",
            features: [
              "Easily update and organize your menu items.",
              "High-quality images and detailed descriptions.",
              "Seasonal specials and promotions.",
              "Inventory integration for ingredient tracking."
            ]
          },
          {
            title: "Online Reservations & Ordering",
            features: [
              "Simple and secure table booking system.",
              "Real-time availability of tables.",
              "Seamless online ordering for dine-in and takeaway.",
              "Automated confirmations and reminders."
            ]
          },
          {
            title: "Customer Engagement & Reviews",
            features: [
              "Interactive feedback and review system.",
              "Loyalty programs and special discounts.",
              "Social media integration to boost reach.",
              "Real-time monitoring of customer reviews."
            ]
          },
          {
            title: "Analytics & Operations",
            features: [
              "Comprehensive sales and performance dashboards.",
              "Real-time order and inventory tracking.",
              "Integration with modern POS systems.",
              "Data-driven insights for menu optimization."
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
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Restaurant Platform?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>Exceptional Dining Experience:</b> Enhance customer satisfaction with efficient services.</li>
          <li>✅ <b>Streamlined Operations:</b> Simplify menu, order, and reservation management.</li>
          <li>✅ <b>User-Friendly Interface:</b> Easy to use for both staff and customers.</li>
          <li>✅ <b>Data-Driven Insights:</b> Make informed decisions with real-time analytics.</li>
          <li>✅ <b>24/7 Support:</b> Reliable assistance whenever you need it.</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl font-bold text-gray-800">Elevate Your Restaurant Experience Today!</h4>
        <p className="text-gray-600 mt-2">
          Our Restaurant Platform streamlines your operations, enhances customer engagement, and drives business growth.
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

export default Restaurant;

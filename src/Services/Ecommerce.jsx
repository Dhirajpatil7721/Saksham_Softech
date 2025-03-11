import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">E-commerce Solutions</h2>
        <p className="text-lg text-gray-300 mt-4">
          Developing online stores that drive conversions. We build secure, scalable, and high-performing e-commerce platforms tailored to your business needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {/* Online Store Development */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaShoppingCart className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Online Store Development</h3>
          <p className="text-gray-400 mt-2">
            Custom e-commerce websites with seamless shopping experiences and responsive designs.
          </p>
        </div>

        {/* Secure Payment Integration */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCreditCard className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Secure Payment Integration</h3>
          <p className="text-gray-400 mt-2">
            Secure and flexible payment gateways, including Stripe, PayPal, and Razorpay.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Launch Your Online Store Today!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> for professional e-commerce solutions.
        </p>
        <div className="mt-6">
          <a href="mailto:your-email@example.com" className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition">
            Contact Us
          </a>

          <a className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition ml-2" onClick={() => navigate('/services')} >
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
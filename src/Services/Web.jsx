import { FaMobileAlt, FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Web = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">Web & Mobile Apps</h2>
        <p className="text-lg text-gray-300 mt-4">
          Building modern, responsive applications for all platforms. We create high-performance web and mobile applications that provide seamless user experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {/* Web Applications */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCode className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Web Applications</h3>
          <p className="text-gray-400 mt-2">
            High-performance web portals, SaaS platforms, and custom business management systems.
          </p>
        </div>

        {/* Mobile Applications */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaMobileAlt className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Mobile Apps</h3>
          <p className="text-gray-400 mt-2">
            Native & cross-platform mobile apps designed for seamless user experiences.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Let's Build Your App Today!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> to transform your ideas into reality.
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

export default Web;
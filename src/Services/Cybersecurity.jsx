import { FaShieldAlt, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cybersecurity = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">Cybersecurity</h2>
        <p className="text-lg text-gray-300 mt-4">
          Protecting your business with robust security solutions. We help safeguard your digital assets against cyber threats and vulnerabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {/* Network Security */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaShieldAlt className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Network Security</h3>
          <p className="text-gray-400 mt-2">
            Advanced firewalls, intrusion detection, and secure network architectures to protect your data.
          </p>
        </div>

        {/* Data Protection */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaLock className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Data Protection</h3>
          <p className="text-gray-400 mt-2">
            Encryption, secure storage, and compliance solutions to prevent data breaches.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Secure Your Business Today!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> for top-tier cybersecurity solutions.
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

export default Cybersecurity;
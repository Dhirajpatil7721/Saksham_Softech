import { FaCode, FaMobileAlt, FaServer, FaCogs, FaCloud } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Software = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">Software Development</h2>
        <p className="text-lg text-gray-300 mt-4">
          Custom software solutions tailored to meet your business needs. From web applications to enterprise automation, we build scalable, secure, and efficient solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCode className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Web Applications</h3>
          <p className="text-gray-400 mt-2">
            High-performance web portals, SaaS platforms, and custom business management systems.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaMobileAlt className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Mobile Apps</h3>
          <p className="text-gray-400 mt-2">
            Native & cross-platform mobile apps designed for seamless user experiences.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaServer className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Enterprise Solutions</h3>
          <p className="text-gray-400 mt-2">
            Scalable CRM, ERP, and workflow automation software to enhance business efficiency.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCogs className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">AI & Automation</h3>
          <p className="text-gray-400 mt-2">
            Intelligent chatbots, AI-driven analytics, and workflow automation tools.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCloud className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Cloud & DevOps</h3>
          <p className="text-gray-400 mt-2">
            Secure cloud computing, AWS solutions, and DevOps automation services.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Let’s Build Something Amazing!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> today and bring your vision to life.
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

export default Software;
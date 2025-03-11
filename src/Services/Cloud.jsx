import { FaCloud, FaServer } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cloud = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">Cloud Solutions</h2>
        <p className="text-lg text-gray-300 mt-4">
          Scalable cloud computing tailored to your needs. We offer secure, efficient, and cost-effective cloud solutions to help businesses grow and innovate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {/* Cloud Infrastructure */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCloud className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Cloud Infrastructure</h3>
          <p className="text-gray-400 mt-2">
            Reliable and scalable cloud computing with AWS, Azure, and Google Cloud.
          </p>
        </div>

        {/* DevOps & Automation */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaServer className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">DevOps & Automation</h3>
          <p className="text-gray-400 mt-2">
            CI/CD pipelines, cloud automation, and infrastructure management for seamless operations.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Transform Your Business with Cloud!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> for cutting-edge cloud solutions.
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

export default Cloud;
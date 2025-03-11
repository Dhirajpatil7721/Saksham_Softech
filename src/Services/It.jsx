import { FaLightbulb, FaCogs } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const It = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500">IT Consulting</h2>
        <p className="text-lg text-gray-300 mt-4">
          Strategic guidance to optimize your technology solutions. We help businesses streamline IT infrastructure, enhance security, and drive innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {/* Technology Strategy */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaLightbulb className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Technology Strategy</h3>
          <p className="text-gray-400 mt-2">
            Expert IT planning and roadmaps to align technology with your business goals.
          </p>
        </div>

        {/* IT Optimization */}
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <FaCogs className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">IT Optimization</h3>
          <p className="text-gray-400 mt-2">
            Enhancing system performance, security, and efficiency with tailored IT solutions.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-red-500">Optimize Your IT Today!</h3>
        <p className="text-lg text-gray-300 mt-2">
          Contact <span className="font-bold text-white">Saksham Softtech</span> for expert IT consulting services.
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

export default It;
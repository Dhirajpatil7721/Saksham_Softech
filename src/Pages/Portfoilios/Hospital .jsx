import React from "react";
import { useNavigate } from 'react-router-dom';
import hospitalImage from "../../Images/porthospital.png"; 

function Hospital() {
     const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Hospital Management Software</h1>
        <h5 className="text-lg text-gray-700 mt-2">Revolutionizing Healthcare with Technology</h5>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          At Saksham Softech, we provide a comprehensive Hospital Management Software (HMS) 
          designed to streamline hospital operations, improve patient care, and optimize administrative tasks.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img src={hospitalImage} alt="Hospital Management Software" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">1. Patient Management System</h5>
            <ul className="list-disc list-inside text-gray-600">
              <li>Seamlessly manage patient registrations, admissions, and discharges.</li>
              <li>Maintain complete medical history and treatment records.</li>
              <li>Secure patient data with HIPAA-compliant encryption.</li>
              <li>Quick access to prescriptions, lab reports, and appointments.</li>
            </ul>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">2. Appointment Scheduling & Doctor Consultation</h5>
            <ul className="list-disc list-inside text-gray-600">
              <li>Efficient online and offline appointment booking.</li>
              <li>Automated reminders for doctors and patients.</li>
              <li>Easy rescheduling and cancellation of appointments.</li>
              <li>Virtual consultations with telemedicine integration.</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">3. Electronic Medical Records (EMR) & E-Prescription</h5>
            <ul className="list-disc list-inside text-gray-600">
              <li>Digital storage of patient history, diagnosis, and treatment plans.</li>
              <li>Secure access to patient records anytime, anywhere.</li>
              <li>Generate e-prescriptions and share them with pharmacies.</li>
              <li>Reduce paperwork and improve efficiency.</li>
            </ul>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold text-blue-600">4. Billing & Insurance Management</h5>
            <ul className="list-disc list-inside text-gray-600">
              <li>Automated billing for treatments, tests, and procedures.</li>
              <li>Insurance claim processing with real-time verification.</li>
              <li>Transparent invoicing with detailed breakdowns.</li>
              <li>Multiple payment options: Cash, Card, UPI, and Online Banking.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="mt-10 text-center">
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Our Hospital Management Software?</h4>
        <ul className="list-none text-gray-600 space-y-2 mt-4">
          <li>✅ <b>User-Friendly Interface:</b> Easy to navigate for doctors, nurses, and administrators.</li>
          <li>✅ <b>Customizable & Scalable:</b> Suitable for small clinics to large multi-specialty hospitals.</li>
          <li>✅ <b>Security & Compliance:</b> Adheres to global healthcare data protection regulations.</li>
          <li>✅ <b>24/7 Support:</b> Dedicated support team for technical assistance and training.</li>
          <li>✅ <b>Seamless Integration:</b> Compatible with existing hospital systems and third-party tools.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h4 className="text-2xl font-bold text-gray-800">Transform Your Healthcare Facility Today!</h4>
        <p className="text-gray-600 mt-2">
          Our Hospital Management Software ensures enhanced efficiency, reduced paperwork, and improved patient care.
        </p>
        <button onClick={()=>navigate('/portfolio')} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Back
        </button>
      </div>
    </div>
  );
}

export default Hospital;

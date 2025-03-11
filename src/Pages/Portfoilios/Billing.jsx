import React from 'react';
import { useNavigate } from 'react-router-dom';
import billing from '../../Images/Billingportfolio.png';

function Billing() {
       const navigate = useNavigate()
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Billing & Subscription Management */}
            <h2 className="text-3xl font-bold text-center text-blue-600">Billing & Subscription Management</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mt-2">
                Effortlessly handle invoicing, payments, and subscriptions with our <strong>smart billing system</strong>.
                Designed for hospitals, clinics, and healthcare institutions, our <strong>automated platform</strong>
                ensures accuracy, reduces manual workload, and improves financial efficiency.
            </p>
            <img src={billing} alt=""  className="w-full max-w-lg rounded-lg shadow-lg mx-auto"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ul className="space-y-3 bg-blue-50 p-6 rounded-lg shadow-md">
                    <li><strong>Automated Invoicing:</strong> Generate error-free invoices instantly.</li>
                    <li><strong>Subscription Management:</strong> Handle recurring payments seamlessly.</li>
                    <li><strong>Multi-Payment Support:</strong> Accept cards, UPI, net banking, and wallets.</li>
                    <li><strong>Tax & Compliance Handling:</strong> Auto-apply GST/VAT and other taxes.</li>
                    <li><strong>Real-Time Reporting:</strong> Insights into revenue and pending payments.</li>
                </ul>
                <ul className="space-y-3 bg-blue-50 p-6 rounded-lg shadow-md">
                    <li><strong>Secure Transactions:</strong> End-to-end encryption for financial data.</li>
                    <li><strong>Custom Billing Cycles:</strong> Set weekly, monthly, or yearly plans.</li>
                    <li><strong>Auto-Reminders & Notifications:</strong> Reduce late payments.</li>
                    <li><strong>Role-Based Access Control:</strong> Secure finance team permissions.</li>
                    <li><strong>Accounting Integration:</strong> Sync with QuickBooks, Tally, or SAP.</li>
                </ul>
            </div>
            
            {/* Hospital Education Software */}
            <h2 className="text-3xl font-bold text-center text-blue-600 mt-10">Why Choose Our Hospital Education Software?</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mt-2">
                Our <strong>Hospital Education Software</strong> provides seamless medical training,
                certification, and compliance tracking for healthcare professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ul className="space-y-3 bg-blue-50 p-6 rounded-lg shadow-md">
                    <li><strong>Comprehensive Course Management:</strong> Structured medical courses.</li>
                    <li><strong>Interactive Learning Tools:</strong> Videos, quizzes, and tracking.</li>
                    <li><strong>Certification & Compliance Tracking:</strong> Ensure staff meets standards.</li>
                    <li><strong>Live Webinars & Recorded Lectures:</strong> Continuous learning support.</li>
                    <li><strong>User-Friendly Interface:</strong> Easy navigation for trainers and learners.</li>
                </ul>
                <ul className="space-y-3 bg-blue-50 p-6 rounded-lg shadow-md">
                    <li><strong>Mobile-Friendly Access:</strong> Learn anytime on any device.</li>
                    <li><strong>HR & Payroll Integration:</strong> Track employee progress.</li>
                    <li><strong>Multi-Language Support:</strong> Available in different languages.</li>
                    <li><strong>AI-Based Recommendations:</strong> Personalized learning paths.</li>
                    <li><strong>Secure Cloud Storage:</strong> Safely store training records.</li>
                </ul>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-8">
                <h4 className="text-2xl font-bold text-gray-800">Transform Your Healthcare Training & Billing Today!</h4>
                <p className="text-gray-600 mt-2">Contact us now for a free demo and streamline your hospital operations.</p>
                <button onClick={()=> navigate('/portfolio')} className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Back
                </button>
            </div>
        </div>
    );
}

export default Billing;
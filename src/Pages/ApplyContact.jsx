import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ApplyContact() {
    const [visibleDescription, setVisibleDescription] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        experience: '',
        resume: null
    });

    const toggleDescription = (index) => {
        setVisibleDescription(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application Submitted!');
        setShowForm(false);
    };

    const jobListings = [
        {
            date: "2025-03-12",
            designation: "Software Engineer",
            name: "Tech Corp",
            experience: "2+ years",
            description: "Looking for a skilled developer with experience in React and Spring Boot.",
        },
        {
            date: "2025-03-10",
            designation: "Frontend Developer",
            name: "Web Solutions",
            experience: "1+ years",
            description: "Seeking a passionate UI developer with expertise in React and Tailwind CSS."
        },
        {
            date: "2025-03-08",
            designation: "Backend Developer",
            name: "Cloud Services",
            experience: "3+ years",
            description: "Experienced backend developer needed with expertise in Node.js and MongoDB."
        },
        {
            date: "2025-03-05",
            designation: "Full Stack Developer",
            name: "InnovateTech",
            experience: "2+ years",
            description: "Looking for a full-stack developer with skills in React, Spring Boot, and AWS."
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Career Opportunities</h2>
            <div className="grid gap-6">
                {jobListings.map((job, index) => (
                    <div key={index} className="border p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-all">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDescription(index)}>
                            <div>
                                <p className="text-lg font-semibold">{job.designation}</p>
                                <p className="text-gray-600">{job.name} - {job.experience}</p>
                            </div>
                            {visibleDescription[index] ? <FaChevronUp className="text-blue-500 text-xl" /> : <FaChevronDown className="text-blue-500 text-xl" />}
                        </div>
                        {visibleDescription[index] && (
                            <p className="mt-4 text-gray-700 border-t pt-2"><strong>Job Description:</strong> {job.description}</p>
                        )}
                        <button onClick={() => setShowForm(true)} className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">Apply</button>
                    </div>
                ))}
            </div>
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Apply for Position</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="border p-2 rounded" required />
                            <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleInputChange} className="border p-2 rounded" required />
                            <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleInputChange} className="border p-2 rounded" required />
                            <input type="file" name="resume" onChange={handleFileChange} className="border p-2 rounded" required />
                            <div className="flex gap-2">
                                <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all">Submit</button>
                                <button type="button" onClick={() => setShowForm(false)} className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ApplyContact;

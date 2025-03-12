import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from "framer-motion";

function Career() {
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

    // let fno = Math.floor(Math.random() * 10);
    // let sno = Math.floor(Math.random() * 10);

    // console.log(fno+sno);

    const jobListings = [
        {
            date: "2025-03-12",
            designation: "Senior Java Developer",
            experience: "2+ years",
            opening: "4",
            description: "Looking for a Java Fullstack developer.",
            skill: "Java, Spring Boot, Microservices, Hibernate, REST APIs, SQL, MongoDB, AWS, Docker, Kubernetes, React.js, Angular, Redux, Tailwind CSS, Git, CI/CD, JUnit, Agile, DSA."
        },
        {
            date: "2025-03-10",
            designation: "Junior Java Developer",
            experience: "1+ years / Fresher",
            opening: "3",
            description: "Looking for a Java Fullstack developer.",
            skill: "Java, SQL, MongoDB, AWS, Docker, React.js, Redux, Tailwind CSS, Git, Agile, DSA."
        },
        {
            date: "2025-03-08",
            designation: "React Devloper",
            experience: "1+ years / Fresher",
            opening: "2",
            description: "Build dynamic and responsive UI using React, JavaScript, and modern frontend technologies.",
            skill: "React, JavaScript, TypeScript, Redux, Tailwind CSS, REST APIs, Next.js, Git."
        },
        {
            date: "2025-03-05",
            designation: "Data analytics",
            experience: "1+ years",
            opening: "2",
            description: "Analyze and visualize data to drive business decisions using SQL, Python, and BI tools.",
            skill: "SQL, Python, Excel, Power BI, Tableau, Data Visualization, and Statistical Analysis."
        },
        {
            date: "2025-03-05",
            designation: "Python Devloper",
            experience: "1+ years",
            opening: "2",
            description: " Develop and optimize backend systems using Python, Django, and REST APIs.",
            skill: " Python, Django, Flask, REST APIs, SQL, Pandas, NumPy, Docker, AWS."
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
                                <p className="text-lg font-semibold">{job.date}</p>
                                <p className="text-lg font-semibold">{job.designation} </p>
                                <p className="text-gray-600"> {job.experience}  <sapan className="ml-2">Openings: {job.opening}</sapan></p>
                            </div>
                            {visibleDescription[index] ? <FaChevronUp className="text-blue-500 text-xl" /> : <FaChevronDown className="text-blue-500 text-xl" />}
                        </div>

                        {visibleDescription[index] && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="mt-4 text-gray-700 border-t pt-2"
                            >
                                <p><strong>Job Description:</strong> {job.description}</p>
                                <p><strong>Skill :</strong> {job.skill}</p>
                            </motion.div>
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

                            {/* <p className=' border p-2 rounded'><span className='ml-2'>{fno} + {sno}=</span><input type="text" name="" id="" /></p> */}
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

export default Career;

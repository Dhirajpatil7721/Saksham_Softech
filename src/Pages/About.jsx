"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle, Award } from "lucide-react";

// Import Images
import sagar from "../Images/sagar.jpg";
import dhiraj from "../Images/dhiraj.jpg";
import akanksha from "../Images/akanksha.jpg";
import swati from "../Images/swati.jpg";
import anjali from "../Images/anjali.jpg";
import krushna from "../Images/krushna.jpg";
import office from "../Images/office.jpg";
import Aaditi from "../Images/Aaditi.jpg";
import Ankita from "../Images/Ankita.jpg";
import Siddhesh from "../Images/Siddhesh.jpg";
import Neeleshsir from "../Images/Neeleshsir.jpg";
import LokeshSir from "../Images/LokeshSir.jpg";
import Kalyanimam2 from "../Images/Kalyanimam2.jpg";

export default function AboutPage() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center">
        <img src={office} alt="Office" className="h-[400px] w-full object-cover brightness-75" />
        <div className="absolute bg-gradient-to-r from-blue-600 to-indigo-500 p-6 rounded-md shadow-lg max-w-[90%] text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
            Teamwork Makes the Dream Work
          </h1>
        </div>
      </div>

      {/* Leadership Section */}
      <Section title="Our Leadership" bgClass="bg-gradient-to-b from-gray-50 to-gray-200">
        <ProfileGrid members={leadership} />
      </Section>

      {/* Team Section */}
      <Section title="Meet Our Team" bgClass="bg-gradient-to-b from-blue-100 to-indigo-200">
        <ProfileGrid members={team} />
      </Section>

      {/* About Us Section */}
      <Section title="About Saksham Softtech" bgClass="bg-gray-50">
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We are a leading IT solutions provider, delivering top-notch software development, web & mobile applications, cybersecurity, and cloud solutions.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Section>
    </div>
  );
}

const Section = ({ title, children, bgClass }) => (
  <section className={`py-16 px-8 text-center ${bgClass}`}>
    <h2 className="text-4xl font-bold text-gray-800 mb-10">{title}</h2>
    {children}
  </section>
);

const ProfileGrid = ({ members }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {members.map((member, index) => (
      <ProfileCard key={index} member={member} />
    ))}
  </div>
);

const ProfileCard = ({ member }) => (
  <motion.div
    className="p-6 bg-white rounded-xl shadow-lg border-2 border-indigo-500 transition-transform hover:scale-105 backdrop-blur-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img className="w-48 h-48 mx-auto rounded-full border-4 border-gray-300 shadow-md" src={member.img} alt={member.name} />
    <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
    <p className="text-gray-600 font-medium">{member.role}</p>
  </motion.div>
);

const StatCard = ({ icon, targetNumber, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 2000;
          const steps = 50;
          const increment = targetNumber / steps;
          setHasAnimated(true);

          const counter = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              clearInterval(counter);
              setCount(targetNumber);
            } else {
              setCount(Math.ceil(start));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {icon}
      <motion.h3 className="text-3xl font-bold text-gray-800 mt-2">{count}+</motion.h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const leadership = [
  { name: "Kalyani Ajalkar", role: "Founder President", img: Kalyanimam2 },
  { name: "Lokesh Ajalkar", role: "Chief Executive Officer", img: LokeshSir },
  { name: "Neelesh Nidhalkar", role: "Legal Adviser", img: Neeleshsir },
];

const team = [
  { name: "Sagar Wankhede", role: "Team Lead", img: sagar },
  { name: "Dhiraj Patil", role: "Team Lead", img: dhiraj },
  { name: "Aaditi Dagade", role: "Human Resources", img: Aaditi },
  { name: "Akanksha Dhekane", role: "Senior Developer", img: akanksha },
  { name: "Swati Mohite", role: "Senior Developer", img: swati },
  { name: "Anjali Kondulkar", role: "Junior Developer", img: anjali },
  { name: "Krushna Chaugule", role: "Junior Developer", img: krushna },
  { name: "Ankita Nalawade", role: "Junior Developer", img: Ankita },
  { name: "Siddhesh Dhokare", role: "Junior Developer", img: Siddhesh },
];

const stats = [
  { icon: <Users className="w-12 h-12 text-blue-500" />, targetNumber: 150, label: "Happy Clients" },
  { icon: <Briefcase className="w-12 h-12 text-green-500" />, targetNumber: 250, label: "Projects Completed" },
  { icon: <CheckCircle className="w-12 h-12 text-purple-500" />, targetNumber: 10, label: "Years Experience" },
  { icon: <Award className="w-12 h-12 text-yellow-500" />, targetNumber: 12, label: "Awards Won" },
];

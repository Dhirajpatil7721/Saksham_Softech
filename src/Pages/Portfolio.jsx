// import React from 'react'
// import hos from '../Images/hospital.jpg'
// import edu from '../Images/educational.jpg'
// import pharma from '../Images/pharma.png'
// import helth from '../Images/helth.jpg'
// import job from '../Images/job.jpg'
// import dairy from '../Images/dairy.png'
// import ler from '../Images/elerning.png'
// import rest from '../Images/restro.png'

// const Portfolio = () => {
//   const products = [
//     {
//       name: "Hospital Management Software",
//       image: hos,
//       description: "Streamline hospital operations with our advanced software solutions."
//     },
//     {
//       name: "Educational Software",
//       image: edu,
//       description: "Enhance learning experiences with our e-learning platforms."
//     },
//     {
//       name: "Pharma Software",
//       image: pharma,
//       description: "Manage pharmaceutical operations efficiently."
//     },
//     {
//       name: "Healthcare Solutions",
//       image: helth,
//       description: "Innovative tools for healthcare providers."
//     },
//     {
//       name: "Job Portal",
//       image: job,
//       description: "Connect employers and job seekers seamlessly."
//     },
//     {
//       name: "Dairy Management System",
//       image: dairy,
//       description: "Optimize dairy operations with our software."
//     },
//     {
//       name: "E-Learning Management System",
//       image: ler,
//       description: "Comprehensive solutions for online education."
//     },
//     {
//       name: "Restaurant Management System",
//       image: rest,
//       description: "Efficiently manage restaurant operations with our software."
//     }
//   ];
//   return (

//     <div>
//       <section className="py-10">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-5 ">Our Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-xl font-bold mb-4">{product.name}</h3>
//                 <p>{product.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Portfolio

import React from 'react'
import { useNavigate } from 'react-router-dom';
import hos from '../Images/hospital.jpg'
import edu from '../Images/educational.jpg'
import pharma from '../Images/pharma.png'
import helth from '../Images/helth.jpg'
import job from '../Images/job.jpg'
import dairy from '../Images/dairy.png'
import ler from '../Images/elerning.png'
import rest from '../Images/restro.png'
import bill from '../Images/Billing.png'

const Portfolio = () => {
  const navigate = useNavigate();
  const products = [
    {
      name: "Hospital Management Software",
      image: hos,
      description: "Streamline hospital operations with our advanced software solutions.",
      path: "/hospital"
    },
    {
      name: "Educational Software",
      image: edu,
      description: "Enhance learning experiences with our e-learning platforms.",
      path: "/education"
    },
    {
      name: "Pharma Software",
      image: pharma,
      description: "Manage pharmaceutical operations efficiently and effectively.",
      path: "/pharma"
    },
    {
      name: "Healthcare Solutions",
      image: helth,
      description: "Innovative tools for healthcare providers.",
      path: "/healthcare"
    },
    {
      name: "Job Portal",
      image: job,
      description: "Connect employers and job seekers seamlessly.",
      path: "/job"
    },
    {
      name: "Dairy Management System",
      image: dairy,
      description: "Optimize dairy operations with our software.",
      path: "/dairy"
    },
    {
      name: "E-Learning Management System",
      image: ler,
      description: "Comprehensive and innovative solutions for online education.",
      path: "/elearning"
    },
    {
      name: "Restaurant Management System",
      image: rest,
      description: "Efficiently manage restaurant operations with our software.",
      path: "/restaurant"
    },
    {
      name: "Billing & Subscription Management",
      image: bill,
      description: "Effortlessly handle invoicing, payments, and subscriptions with our smart billing system.",
      path: "/billing"
    }
  ];
  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-5">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <p>{product.description}</p>
                <button 
                  onClick={() => navigate(product.path)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;

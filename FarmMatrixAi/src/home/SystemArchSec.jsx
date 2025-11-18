import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaLink, FaCogs, FaDatabase } from "react-icons/fa";
import WorkflowPipeline from "./WorkflowPipeline ";

const SystemArchSec = () => {
  const layers = [
    {
      title: "Frontend (React JS)",
      icon: <FaLaptopCode size={35} className="text-green-700" />,
      description:
        "The user interface allows farmers to input soil data, fetch location, upload leaf images, and visualize crop/disease predictions.",
    },
    {
      title: "Backend API Layer",
      icon: <FaServer size={35} className="text-blue-700" />,
      description:
        "Flask/FastAPI or Node.js processes user requests, connects ML models, and handles data integration between frontend and models.",
    },
    {
      title: "External Data APIs",
      icon: <FaLink size={35} className="text-purple-700" />,
      description:
        "Weather & Soil APIs (OpenWeatherMap, SoilGrids) provide real-time environmental data, enabling the virtual sensor functionality.",
    },
    {
      title: "Machine Learning Models",
      icon: <FaCogs size={35} className="text-orange-600" />,
      description:
        "Random Forest recommends the most suitable crop, while the CNN model performs disease classification from leaf images.",
    },
    {
      title: "Database Layer",
      icon: <FaDatabase size={35} className="text-yellow-600" />,
      description:
        "Stores user history, crop data, model files, and prediction analytics for ongoing system improvement and retraining.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" id="architecture">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          System Architecture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-2xl mx-auto"
        >
          The architecture integrates multiple intelligent layers — providing a seamless flow from user input to AI-powered output.
        </motion.p>

        {/* Architecture Layer Cards */}
        <div className="mt-14 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">

          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-200 shadow-md hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{layer.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">{layer.title}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}

        </div>

        {/* Architecture Flow Diagram */}
        <WorkflowPipeline></WorkflowPipeline>
      </div>
    </section>
  );
};

export default SystemArchSec;

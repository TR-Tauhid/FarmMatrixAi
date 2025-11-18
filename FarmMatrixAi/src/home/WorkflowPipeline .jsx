import React from "react";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaLaptopCode,
  FaCloud,
  FaFlask,
  FaLeaf,
  FaBug,
  FaCheckCircle,
} from "react-icons/fa";

const WorkflowPipeline = () => {
  const steps = [
    {
      title: "User Input",
      icon: <FaUserAlt size={30} className="text-green-700" />,
    },
    {
      title: "Frontend UI",
      icon: <FaLaptopCode size={30} className="text-blue-600" />,
    },
    {
      title: "Backend API",
      icon: <FaCloud size={30} className="text-purple-600" />,
    },
    {
      title: "Data Fusion",
      icon: <FaFlask size={30} className="text-orange-500" />,
    },
    {
      title: "Crop Prediction (RF)",
      icon: <FaLeaf size={30} className="text-green-600" />,
    },
    {
      title: "Disease Detection (CNN)",
      icon: <FaBug size={30} className="text-red-500" />,
    },
    {
      title: "Final Output",
      icon: <FaCheckCircle size={30} className="text-green-700" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="bg-green-100 py-12 px-6 rounded-2xl shadow-inner mt-20"
    >
      <h3 className="text-3xl font-bold text-green-800 text-center mb-10">
        Workflow Pipeline
      </h3>

      {/* Horizontal Workflow */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">

            {/* Animation for each step */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-full shadow-md border border-green-200"
            >
              {step.icon}
            </motion.div>

            {/* Title */}
            <p className="mt-3 text-gray-800 font-medium text-center w-32">
              {step.title}
            </p>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute right-[-50px] top-[30px]"
              >
                <svg
                  width="50"
                  height="20"
                  viewBox="0 0 50 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10 H40 L30 2 M40 10 L30 18"
                    stroke="#2f855a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}

          </div>
        ))}
      </div>

      {/* Mobile Arrow Connector */}
      <div className="lg:hidden mt-8">
        <p className="text-center text-sm text-gray-600">
          (Swipe to view full workflow)
        </p>
      </div>
    </motion.div>
  );
};

export default WorkflowPipeline;

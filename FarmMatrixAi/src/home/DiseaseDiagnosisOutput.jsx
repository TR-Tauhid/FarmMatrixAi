import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMicroscope, FaCheckCircle, FaChartPie, FaLeaf } from "react-icons/fa";

// Sample diagnosis data based on the provided image
const mockDiagnosisResult = {
  plant: "Soybean (Glycine max)",
  disease: "Frogeye Leaf Spot",
  causalAgent: "Cercospora sojina (Fungus)",
  confidence: 94.5, // AI confidence score
  symptoms: [
    "Small, scattered chlorotic (yellow) spots on young leaves.",
    "Spots typically develop a gray/tan center with a dark purple border as they mature.",
    "Affects leaf area, leading to premature defoliation and yield loss."
  ],
  management: [
    "Apply broad-spectrum fungicides (Strobilurins/Triazoles) early in the season.",
    "Use resistant soybean varieties for future planting.",
    "Implement crop rotation with non-host crops.",
    "Bury infected crop residue through tillage."
  ]
};

// Animation variants for symptom/management list items
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const DiseaseDiagnosisOutput = () => {
  const { disease, confidence, symptoms, management, plant, causalAgent } = mockDiagnosisResult;

  return (
    <section className="py-20 px-6 bg-white" id="disease-diagnosis-output">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          Disease Diagnosis Output
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-3xl mx-auto"
        >
          The Convolutional Neural Network (CNN) has processed the image to identify the specific pathogen affecting your crop.
        </motion.p>

        {/* Main Diagnosis Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 bg-green-50 p-8 rounded-xl shadow-2xl border-2 border-green-300 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-4 mb-4 border-b pb-4">
            <FaMicroscope className="text-6xl text-green-600" />
            <div className="text-left">
              <p className="md:text-xl text-gray-600">Diagnosis:</p>
              <h3 className="text-xl md:text-4xl font-extrabold text-red-700">
                {disease}
              </h3>
            </div>
          </div>
          
          <div className="flex max-sm:flex-col gap-y-8 justify-between items-center text-center mt-4">
             <div className="flex-1">
                <p className="text-sm text-gray-500 uppercase font-semibold">Plant Identified</p>
                <p className="text-xl font-bold text-green-800">{plant}</p>
             </div>
             <div className="flex-1 border-x border-green-200">
                <p className="text-sm text-gray-500 uppercase font-semibold">Causal Agent</p>
                <p className="text-xl font-bold text-gray-800 italic">{causalAgent}</p>
             </div>
             <div className="flex-1">
                <p className="text-sm text-gray-500 uppercase font-semibold">Confidence Score</p>
                <p className="text-3xl font-bold text-green-600 flex items-center justify-center space-x-2">
                    <FaChartPie className="text-2xl" />
                    <span>{confidence}%</span>
                </p>
             </div>
          </div>
        </motion.div>

        {/* Symptoms and Management Sections */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Symptoms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-50 p-6 rounded-xl shadow-lg border border-red-200"
          >
            <h4 className="text-2xl font-semibold text-red-700 mb-4 flex items-center space-x-2">
              <FaLeaf />
              <span>Observed Symptoms</span>
            </h4>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {symptoms.map((symptom, index) => (
                <motion.li key={index} variants={listItemVariants} className="text-gray-700 flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{symptom}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-100 p-6 rounded-xl shadow-lg border border-green-200"
          >
            <h4 className="text-2xl font-semibold text-green-700 mb-4 flex items-center space-x-2">
              <FaCheckCircle />
              <span>Management & Cure</span>
            </h4>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.15 }}
            >
              {management.map((action, index) => (
                <motion.li key={index} variants={listItemVariants} className="text-gray-700 flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{action}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DiseaseDiagnosisOutput;
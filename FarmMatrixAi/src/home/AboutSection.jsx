import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import humanFarmGreenhouse from "../assets/human-greenhouse-farm.jpg"

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-700 leading-snug">
            About the Unified AI Framework
          </h2>

          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            The Unified AI Framework for Precision Crop Recommendation and Disease 
            Detection is a smart agricultural decision-support system that brings 
            the power of modern Machine Learning and Deep Learning directly to the 
            farmer. Instead of relying on guesswork or outdated tools, our system 
            intelligently analyzes soil parameters, real-time weather data, and 
            plant leaf images to provide accurate crop suggestions and instant 
            disease diagnosis.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            This framework serves as a virtual expert — guiding farmers on what to 
            plant, when to plant, and how to protect their crops with 
            science-backed recommendations. It eliminates hardware dependency, 
            reduces costs, and makes precision agriculture accessible to everyone.
          </p>

          {/* Key features */}
          <div className="mt-6 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-green-600 rounded-full mt-2"></span>
              <p className="text-gray-800">
                Uses real-time weather and soil APIs — no physical sensors required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-green-600 rounded-full mt-2"></span>
              <p className="text-gray-800">
                Random Forest-based model predicts the best crop for the exact location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-green-600 rounded-full mt-2"></span>
              <p className="text-gray-800">
                CNN-powered disease detection provides instant diagnosis from leaf images.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-green-600 rounded-full mt-2"></span>
              <p className="text-gray-800">
                Unified platform connects crop planning & disease protection in a single workflow.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={humanFarmGreenhouse}
            alt="About System"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

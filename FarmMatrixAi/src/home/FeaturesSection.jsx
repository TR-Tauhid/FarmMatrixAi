import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCloudSun, FaBrain, FaMicroscope } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Crop Recommendation Engine",
      description:
        "Using soil nutrients, pH values, and real-time weather data, our Random Forest model predicts the most suitable crop for the farmer’s exact location.",
      icon: <FaLeaf size={35} className="text-green-700" />,
    },
    {
      title: "Instant Disease Detection (CNN)",
      description:
        "Upload a leaf image and get an instant diagnosis powered by our CNN model trained on PlantVillage datasets with high accuracy.",
      icon: <FaMicroscope size={35} className="text-green-700" />,
    },
    {
      title: "Virtual Soil & Weather Sensor",
      description:
        "Eliminates hardware sensors by fetching soil and weather data through live APIs, providing site-specific insights at zero hardware cost.",
      icon: <FaCloudSun size={35} className="text-yellow-600" />,
    },
    {
      title: "Unified Decision Platform",
      description:
        "The system connects crop recommendation and disease detection into a single smart workflow, offering end-to-end intelligent support.",
      icon: <FaBrain size={35} className="text-blue-700" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-green-50" id="features">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700"
        >
          Core Features of the System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto"
        >
          The Unified AI Framework brings modern agricultural intelligence directly to farmers—making farming smarter, faster, and more efficient.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition shadow-green-100 border border-green-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">
                {feature.title}
              </h3>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

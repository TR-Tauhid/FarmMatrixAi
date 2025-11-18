import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBrain, FaTree, FaImage } from "react-icons/fa";

const AIModelsSection = () => {
  const models = [
    {
      title: "Random Forest Classifier",
      icon: <FaTree size={35} className="text-green-700" />,
      description:
        "The Random Forest algorithm analyzes soil nutrients (N-P-K), pH, temperature, and rainfall data to recommend the best crop for the farmer’s exact location. It handles non-linear relationships exceptionally well, making it ideal for agricultural predictions.",
      highlight: [
        "Uses multiple decision trees",
        "High accuracy & low overfitting",
        "Perfect for mixed soil-weather inputs",
      ],
    },
    {
      title: "CNN – Disease Detection Model",
      icon: <FaImage size={35} className="text-blue-700" />,
      description:
        "A Convolutional Neural Network trained on the PlantVillage dataset identifies plant diseases instantly from leaf images. It classifies diseases with high precision and provides quick diagnosis for timely crop protection.",
      highlight: [
        "Trained on thousands of leaf images",
        "Fast & accurate image diagnosis",
        "Supports multiple disease categories",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-green-50" id="ai-models">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          AI Models Behind the System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto text-center"
        >
          Our system is powered by two intelligent machine learning models designed to enhance crop productivity and protect plants from diseases.
        </motion.p>

        {/* Model Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 border border-green-100"
            >
              <div className="flex items-center gap-4">
                {model.icon}
                <h3 className="text-2xl font-semibold text-green-800">
                  {model.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {model.description}
              </p>

              <ul className="mt-5 space-y-2">
                {model.highlight.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-gray-800"
                  >
                    <span className="mt-2 w-2 h-2 bg-green-600 rounded-full"></span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIModelsSection;

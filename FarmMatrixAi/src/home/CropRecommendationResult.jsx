import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaSeedling, FaFlask, FaSun, FaChartLine } from "react-icons/fa";

// Sample data structure for the result (replace with actual API data in a real app)
const mockRecommendationData = {
  optimalCrop: "Rice",
  modelUsed: "Random Forest Classifier",
  reasoning: "Based on high humidity and rainfall, acidic soil pH, and balanced NPK ratio.",
  metrics: {
    N_Ratio: 90, // Nitrogen
    P_Ratio: 42, // Phosphorus
    K_Ratio: 43, // Potassium
    pH: 6.5,
    temperature: 26.5, // °C
    humidity: 82, // %
  },
};

// Animation variants for the result metrics grid items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const CropRecommendationResult = () => {
  const { optimalCrop, modelUsed, metrics } = mockRecommendationData;

  const metricItems = [
    { label: "Nitrogen (N)", value: metrics.N_Ratio, unit: "mg/kg", icon: <FaFlask /> },
    { label: "Phosphorus (P)", value: metrics.P_Ratio, unit: "mg/kg", icon: <FaFlask /> },
    { label: "Potassium (K)", value: metrics.K_Ratio, unit: "mg/kg", icon: <FaFlask /> },
    { label: "Soil pH", value: metrics.pH, unit: "", icon: <FaChartLine /> },
    { label: "Temperature", value: metrics.temperature, unit: "°C", icon: <FaSun /> },
    { label: "Humidity", value: metrics.humidity, unit: "%", icon: <FaChartLine /> },
  ];

  return (
    <section className="py-20 px-6 bg-green-50" id="crop-result">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          Your Personalized Recommendation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-3xl mx-auto"
        >
          The system has analyzed real-time environmental data and soil parameters to determine the most **optimal crop** for your location.
        </motion.p>

        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 bg-white p-8 rounded-xl shadow-2xl border-2 border-green-300 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <FaSeedling className="text-6xl text-green-600" />
            <h3 className="text-5xl font-extrabold text-green-800">
              {optimalCrop}
            </h3>
          </div>
          
          <p className="text-lg text-gray-600 mt-2">
            **Recommended by:** {modelUsed} model
          </p>
          <p className="text-sm text-gray-500 mt-1">
            *Analysis based on API-fetched soil and weather data.*
          </p>

        </motion.div>

        {/* Detailed Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {metricItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="bg-white p-4 rounded-lg shadow-md border border-green-100 flex flex-col items-center text-center transition hover:bg-green-50"
            >
              <div className="text-3xl text-green-500 mb-2">{item.icon}</div>
              <p className="text-sm text-gray-500 uppercase font-semibold">
                {item.label}
              </p>
              <p className="text-3xl font-bold text-green-700 mt-1">
                {item.value}
                <span className="text-base font-normal ml-1">{item.unit}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CropRecommendationResult;
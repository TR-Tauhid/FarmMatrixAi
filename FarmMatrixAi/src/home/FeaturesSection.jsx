import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLeaf, FaCloudSun, FaBrain, FaMicroscope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: "AI Crop Recommendation Engine",
      description:
        "Using soil nutrients, pH values, and real-time weather data, our Random Forest model predicts the most suitable crop for the farmer’s exact location.",
      icon: <FaLeaf size={35} className="text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Instant Disease Detection (CNN)",
      description:
        "Upload a leaf image and get an instant diagnosis powered by our CNN model trained on PlantVillage datasets with high accuracy.",
      icon: <FaMicroscope size={35} className="text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Virtual Soil & Weather Sensor",
      description:
        "Eliminates hardware sensors by fetching soil and weather data through live APIs, providing site-specific insights at zero hardware cost.",
      icon: <FaCloudSun size={35} className="text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Unified Decision Platform",
      description:
        "The system connects crop recommendation and disease detection into a single smart workflow, offering end-to-end intelligent support.",
      icon: <FaBrain size={35} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-base-100 transition-colors duration-500" id="features">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500"
        >
          {t("features.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto font-medium"
        >
          {t("features.description")}
        </motion.p>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-base-100 dark:bg-slate-800/40 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-50 dark:border-slate-700 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-emerald-800 dark:text-emerald-400 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base-content opacity-70 mt-4 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
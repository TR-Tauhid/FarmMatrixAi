import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSeedling, FaFlask, FaSun, FaChartLine } from "react-icons/fa";

// Sample data structure remains the same...
const mockRecommendationData = {
  optimalCrop: "Rice",
  modelUsed: "Random Forest Classifier",
  metrics: {
    N_Ratio: 90,
    P_Ratio: 42,
    K_Ratio: 43,
    pH: 6.5,
    temperature: 26.5,
    humidity: 82,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const CropRecommendationResult = () => {
  const { t } = useTranslation();
  const { optimalCrop, modelUsed, metrics } = mockRecommendationData;

  const metricItems = [
    {
      label: t("cropRecommendationResult.nitrogen"),
      value: metrics.N_Ratio,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.phosphorus"),
      value: metrics.P_Ratio,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.potassium"),
      value: metrics.K_Ratio,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.soilPH"),
      value: metrics.pH,
      unit: "",
      icon: <FaChartLine />,
    },
    {
      label: t("cropRecommendationResult.temperature"),
      value: metrics.temperature,
      unit: "°C",
      icon: <FaSun />,
    },
    {
      label: t("cropRecommendationResult.humidity"),
      value: metrics.humidity,
      unit: "%",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-base-100 transition-colors duration-500"
      id="crop-result"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("cropRecommendationResult.title")}
        </motion.h2>

        <motion.p className="mt-3 text-center max-w-3xl mx-auto opacity-70">
          {t("cropRecommendationResult.description")}
        </motion.p>

        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-14 bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-2xl border-2 border-emerald-300 dark:border-emerald-900/50 max-w-3xl mx-auto text-center relative overflow-hidden"
        >
          {/* Subtle background glow for dark mode */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl">
              <FaSeedling className="text-6xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-6xl font-black text-slate-900 dark:text-white tracking-tight">
              {optimalCrop}
            </h3>
          </div>

          <div className="space-y-1">
            <p className="text-lg font-bold text-slate-600 dark:text-slate-300">
              {t("cropRecommendationResult.recommendedBy")}{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {modelUsed}
              </span>
            </p>
            <p className="text-sm opacity-50 italic">
              {t("cropRecommendationResult.analysisNote")}
            </p>
          </div>
        </motion.div>

        {/* Detailed Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {metricItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-emerald-100 dark:border-slate-700 flex flex-col items-center text-center transition-all hover:border-emerald-400 dark:hover:bg-slate-800"
            >
              <div className="text-3xl text-emerald-500 dark:text-emerald-400 mb-3">
                {item.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">
                {item.label}
              </p>
              <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                {item.value}
                <span className="text-sm font-bold opacity-40 ml-1 uppercase">
                  {item.unit}
                </span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CropRecommendationResult;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";import { useTranslation } from "react-i18next";
import { FaSeedling, FaFlask, FaSun, FaChartLine } from "react-icons/fa";

const mockRecommendationData = {
  optimalCrop: "Rice",
  modelUsed: "Random Forest",
  metrics: { N: 90, P: 42, K: 43, pH: 6.5, temp: 26.5, hum: 82 },
};

const CropRecommendationResult = () => {
  const { t } = useTranslation();
  const { optimalCrop, modelUsed, metrics } = mockRecommendationData;

  const metricItems = [
    {
      label: t("cropRecommendationResult.nitrogen"),
      value: metrics.N,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.phosphorus"),
      value: metrics.P,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.potassium"),
      value: metrics.K,
      unit: "mg/kg",
      icon: <FaFlask />,
    },
    {
      label: t("cropRecommendationResult.soilPH"),
      value: metrics.pH,
      unit: "pH",
      icon: <FaChartLine />,
    },
    {
      label: t("cropRecommendationResult.temperature"),
      value: metrics.temp,
      unit: "°C",
      icon: <FaSun />,
    },
    {
      label: t("cropRecommendationResult.humidity"),
      value: metrics.hum,
      unit: "%",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section
      className="py-12 md:py-20 px-4 bg-base-100 transition-colors duration-500"
      id="crop-result"
    >
      <div className="max-w-5xl mx-auto">
        {/* Compact Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500"
          >
            {t("cropRecommendationResult.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right">
            {t("cropRecommendationResult.description")}
          </motion.p>
        </div>

        {/* Hero Result Card (Short & Wide) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-base-200 dark:bg-slate-900 p-6 md:p-10 rounded-4xl shadow-xl border border-emerald-100 dark:border-slate-800 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <FaSeedling className="text-4xl md:text-6xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1 leading-none">
                Optimal Recommendation
              </p>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                {optimalCrop}
              </h3>
              <p className="mt-2 text-[10px] md:text-sm font-bold opacity-60">
                {t("cropRecommendationResult.recommendedBy")}{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {modelUsed}
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid - 3 Columns on Mobile for maximum density */}
        <div className="mt-4 grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {metricItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-base-100 dark:bg-slate-800/40 p-3 md:p-5 rounded-xl md:rounded-2xl border border-base-200 dark:border-slate-700 flex flex-col items-center text-center group"
            >
              <div className="text-emerald-500 text-xs md:text-xl mb-1 opacity-70">
                {item.icon}
              </div>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter opacity-40 leading-none mb-1">
                {item.label}
              </p>
              <p className="text-xs md:text-xl font-black text-slate-900 dark:text-white">
                {item.value}
                <span className="text-[7px] md:text-[10px] font-bold opacity-30 ml-0.5">
                  {item.unit}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationResult;

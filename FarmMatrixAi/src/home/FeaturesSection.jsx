import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCloudSun, FaBrain, FaMicroscope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: "AI Crop Engine",
      description:
        "Random Forest model predicting crops using soil & live weather data.",
      icon: (
        <FaLeaf size={18} className="text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      title: "Disease Detection",
      description:
        "CNN-powered diagnosis trained on global PlantVillage datasets.",
      icon: (
        <FaMicroscope
          size={18}
          className="text-emerald-600 dark:text-emerald-400"
        />
      ),
    },
    {
      title: "Virtual Sensors",
      description:
        "No hardware needed. Fetches soil & weather via site-specific APIs.",
      icon: (
        <FaCloudSun size={18} className="text-amber-600 dark:text-amber-400" />
      ),
    },
    {
      title: "Unified Platform",
      description:
        "End-to-end workflow connecting recommendations & detection.",
      icon: <FaBrain size={18} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section
      className="py-12 md:py-16 px-4 bg-base-100 transition-colors duration-500"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Header for Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-10 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500"
          >
            {t("features.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right">
            {t("features.description")}
          </motion.p>
        </div>

        {/* Short & Wide Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-base-200/60 dark:bg-slate-800/60 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-emerald-50/30 dark:border-slate-700 backdrop-blur-sm"
            >
              <div className="relative z-10 flex flex-col items-start">
                {/* Icon beside Title on Desktop */}
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <div className="p-1.5 md:p-2 bg-base-100 dark:bg-slate-900 rounded-lg shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-[10px] md:text-lg font-black text-emerald-800 dark:text-emerald-400 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-[9px] md:text-xs text-base-content opacity-70 leading-tight md:leading-relaxed font-medium">
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

import React from "react";
import heroFarmingAI from "../assets/hero-farming-ai.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 px-6 bg-[url(/hero-farmi-racks.jpg)] bg-cover bg-center transition-colors duration-500 rounded-2xl">
      {/* Dark Mode Overlay: Ensures text is readable over the BG image in dark mode */}
      <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/80 transition-colors duration-500 rounded-2xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-green-800 dark:text-emerald-400 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-lg text-gray-800 dark:text-slate-200 font-medium leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex max-sm:flex-col gap-4">
            <NavLink to="CropRecommendationInput">
              <button className="px-8 py-4 bg-green-600 dark:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 dark:hover:bg-emerald-500 transition-all active:scale-95">
                {t("cropRecommendation.title")}
              </button>
            </NavLink>

            <NavLink to="DiseaseDetectionUpload">
              <button className="px-8 py-4 border-2 border-green-700 dark:border-emerald-500 text-green-800 dark:text-emerald-400 font-bold rounded-xl hover:bg-green-100 dark:hover:bg-emerald-950/30 transition-all active:scale-95">
                {t("diseaseDetection.title")}
              </button>
            </NavLink>
          </div>
        </motion.div>

        {/* Right Animated Image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          {/* Subtle glow effect behind image in dark mode */}
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />

          <img
            src={heroFarmingAI}
            alt="AI Farming"
            className="relative w-full rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-800 transition-all duration-500 group-hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

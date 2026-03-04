import React from "react";
import heroFarmingAI from "../assets/hero-farming-ai.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 px-6 bg-[url(/hero-farmi-racks.jpg)] ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex max-sm:flex-col gap-4">
            <NavLink to="CropRecommendationInput">
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
                {t("cropRecommendation.title")}
              </button>
            </NavLink>
            <NavLink to="DiseaseDetectionUpload">
              <button className="px-6 py-3 border border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition">
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
        >
          <img
            src={heroFarmingAI}
            alt="AI Farming"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

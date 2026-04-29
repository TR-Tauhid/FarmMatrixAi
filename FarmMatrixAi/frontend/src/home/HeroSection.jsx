import heroFarmingAI from "../assets/hero-farming-ai.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-[url(/hero-farmi-racks.jpg)] bg-cover bg-center transition-colors duration-500 rounded-[2.5rem] overflow-hidden border-4 border-emerald-100 dark:border-slate-800 shadow-inner">
      {/* Theme  */}
      <div className="absolute inset-0 bg-white/20 dark:bg-slate-950/80 transition-colors duration-500 z-0" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        {/* Left Text Section  */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left pt-6 lg:pt-0"
        >
          {/* FANCY TITLE */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-emerald-950 dark:text-white drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)] dark:drop-shadow-[0_2px_15px_rgba(16,185,129,0.5)]"
            style={{
              textShadow:
                theme === "dark"
                  ? "0 0 20px rgba(16,185,129,0.4)"
                  : "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
            }}
          >
            {t("hero.title")}
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90 bg-white/50 dark:bg-slate-950/30 p-2 rounded-xl backdrop-blur-sm">
            {t("hero.subtitle")}
          </p>

          {/* FANCY BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5">
            <NavLink to="recommendations" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 text-white font-black rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition-all active:scale-95 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                {t("cropRecommendation.title")}
              </button>
            </NavLink>

            <NavLink to="disease" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-900 border-2 border-emerald-500/50 text-emerald-800 dark:text-emerald-400 font-black rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.1)] hover:border-emerald-500 hover:shadow-[0_6px_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-all active:scale-95 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                {t("diseaseDetection.title")}
              </button>
            </NavLink>
          </div>
        </motion.div>

        {/* */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-lg lg:max-w-none mx-auto lg:mx-0"
        >
          <div className="absolute -inset-6 bg-emerald-500/10 rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
          <img
            src={heroFarmingAI}
            alt="AI Farming"
            className="relative w-full aspect-square md:aspect-video object-cover rounded-full md:rounded-[3rem] shadow-2xl border-4 md:border-12px border-white dark:border-slate-800 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

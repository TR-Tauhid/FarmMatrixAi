import React from "react";
import { FiCalendar, FiChevronRight } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const mockHistory = [
  {
    id: 1,
    date: "12 Jan 2026",
    soil: "pH 6.8, NPK: 30-22-15",
    weather: "28°C, 60% Humid",
    recommended: "Wheat",
  },
  {
    id: 2,
    date: "03 Jan 2026",
    soil: "pH 7.1, NPK: 28-20-18",
    weather: "24°C, 72% Humid",
    recommended: "Sugarcane",
  },
  {
    id: 3,
    date: "20 Dec 2025",
    soil: "pH 6.5, NPK: 25-18-14",
    weather: "22°C, 55% Humid",
    recommended: "Mustard",
  },
];

const HistorySection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 px-4 bg-base-100 transition-colors duration-500"
      id="history"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("history.heading")}
        </motion.h2>

        <div className="mt-10 space-y-4 relative">
          {/* Subtle Vertical Line - Moved to edge for small screens */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-emerald-100 dark:bg-slate-800 rounded-full"></div>

          {mockHistory.map((item, index) => (
            <motion.div
              key={item.id}
              index={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative ml-8 md:ml-0 bg-base-100 dark:bg-slate-900 p-4 md:p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-lg transition-all duration-300 border border-emerald-50 dark:border-slate-800 group"
            >
              {/* Smaller Timeline Dot */}
              <div className="absolute left-[-22px] md:left-1/2 md:transform md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-base-100 dark:border-slate-900 z-10 shadow-sm"></div>

              {/* Date Column - Compact */}
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black min-w-[110px]">
                <FiCalendar className="text-sm opacity-70" />
                <span className="uppercase text-[10px] md:text-xs tracking-wider">
                  {item.date}
                </span>
              </div>

              {/* Info Column - Better Spacing */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-emerald-800 dark:text-emerald-300 uppercase text-[9px] tracking-tighter">
                      {t("history.soilLabel")}
                    </span>
                    <span className="text-[11px] md:text-xs opacity-80">
                      {item.soil}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-emerald-800 dark:text-emerald-300 uppercase text-[9px] tracking-tighter">
                      {t("history.weatherLabel")}
                    </span>
                    <span className="text-[11px] md:text-xs opacity-80">
                      {item.weather}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[9px] font-black uppercase opacity-40">
                    {t("history.recommendedLabel")}
                  </span>
                  <span className="text-base md:text-lg font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                    {item.recommended}
                  </span>
                </div>
              </div>

              {/* Minimalist Action Button */}
              <button className="w-full md:w-auto flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-50 dark:bg-slate-800 rounded-lg text-emerald-700 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 transition-all">
                <span>{t("history.viewDetails")}</span>
                <FiChevronRight className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

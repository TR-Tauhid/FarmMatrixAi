import React from "react";
import { FiCalendar, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const mockHistory = [
  {
    id: 1,
    date: "12 Jan 2026",
    soil: "pH 6.8, NPK: 30-22-15",
    weather: "Temp: 28°C, Humidity: 60%",
    recommended: "Wheat",
  },
  {
    id: 2,
    date: "03 Jan 2026",
    soil: "pH 7.1, NPK: 28-20-18",
    weather: "Temp: 24°C, Humidity: 72%",
    recommended: "Sugarcane",
  },
  {
    id: 3,
    date: "20 Dec 2025",
    soil: "pH 6.5, NPK: 25-18-14",
    weather: "Temp: 22°C, Humidity: 55%",
    recommended: "Mustard",
  },
];

const HistorySection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-24 px-6 bg-base-100 transition-colors duration-500"
      id="history"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("history.heading")}
        </motion.h2>
        <motion.p className="text-center text-base-content opacity-70 mt-4 max-w-2xl mx-auto font-medium">
          {t("history.description")}
        </motion.p>

        <div className="mt-16 space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100 dark:bg-slate-800 rounded-full"></div>

          {mockHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative bg-base-100 dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-2xl transition-all duration-300 border border-emerald-50 dark:border-slate-800 group`}
            >
              {/* Timeline Dot with Glow */}
              <div className="hidden md:flex absolute left-[-10px] md:left-1/2 md:transform md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-base-100 dark:border-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.4)] z-10"></div>

              {/* Date Column */}
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 font-black min-w-[140px]">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                  <FiCalendar className="text-xl" />
                </div>
                <span className="uppercase text-sm tracking-widest">
                  {item.date}
                </span>
              </div>

              {/* Info Column */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <p className="text-sm text-base-content opacity-80">
                    <span className="font-black text-emerald-800 dark:text-emerald-300 uppercase text-[10px] mr-2">
                      {t("history.soilLabel")}
                    </span>{" "}
                    {item.soil}
                  </p>
                  <p className="text-sm text-base-content opacity-80">
                    <span className="font-black text-emerald-800 dark:text-emerald-300 uppercase text-[10px] mr-2">
                      {t("history.weatherLabel")}
                    </span>{" "}
                    {item.weather}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-xs font-black uppercase opacity-40">
                    {t("history.recommendedLabel")}
                  </span>
                  <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                    {item.recommended}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-base-200 dark:bg-slate-800 rounded-xl text-emerald-700 dark:text-emerald-400 font-black text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 transition-all active:scale-95">
                <span>{t("history.viewDetails")}</span>
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";import { useTranslation } from "react-i18next";
import {
  FaLaptopCode,
  FaServer,
  FaLink,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";
import WorkflowPipeline from "./WorkflowPipeline ";

const SystemArchSec = () => {
  const { t } = useTranslation();

  const layers = [
    {
      title: t("systemArchitecture.layers.frontend.title"),
      icon: (
        <FaLaptopCode
          className="text-emerald-600 dark:text-emerald-400"
          size={24}
        />
      ),
      description: t("systemArchitecture.layers.frontend.description"),
    },
    {
      title: t("systemArchitecture.layers.backend.title"),
      icon: <FaServer className="text-blue-600 dark:text-blue-400" size={24} />,
      description: t("systemArchitecture.layers.backend.description"),
    },
    {
      title: t("systemArchitecture.layers.externalAPIs.title"),
      icon: (
        <FaLink className="text-purple-600 dark:text-purple-400" size={24} />
      ),
      description: t("systemArchitecture.layers.externalAPIs.description"),
    },
    {
      title: t("systemArchitecture.layers.mlModels.title"),
      icon: (
        <FaCogs className="text-orange-600 dark:text-orange-400" size={24} />
      ),
      description: t("systemArchitecture.layers.mlModels.description"),
    },
    {
      title: t("systemArchitecture.layers.database.title"),
      icon: (
        <FaDatabase className="text-amber-600 dark:text-amber-400" size={24} />
      ),
      description: t("systemArchitecture.layers.database.description"),
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-2 md:px-6 bg-base-100 transition-colors duration-500"
      id="architecture"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("systemArchitecture.heading")}
        </motion.h2>

        <motion.p className="mt-3 text-[10px] md:text-base text-base-content opacity-70 text-center max-w-xl mx-auto font-medium">
          {t("systemArchitecture.description")}
        </motion.p>

        {/* Optimized Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-base-200 dark:bg-slate-800/60 border border-emerald-50/50 dark:border-slate-700 shadow-md hover:shadow-xl transition-all p-3 md:p-8 flex flex-col items-center text-center rounded-2xl md:rounded-3xl group"
            >
              <div className="mb-3 md:mb-6 p-2 bg-base-100 dark:bg-slate-900 rounded-xl transform group-hover:scale-110 transition-transform">
                {layer.icon}
              </div>
              <h3 className="text-[10px] md:text-lg font-black text-emerald-800 dark:text-emerald-400 leading-tight">
                {layer.title}
              </h3>
              <p className="text-[9px] md:text-xs text-base-content opacity-60 mt-2 leading-tight md:leading-relaxed font-medium">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20">
          <WorkflowPipeline />
        </div>
      </div>
    </section>
  );
};

export default SystemArchSec;

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
          size={35}
          className="text-emerald-600 dark:text-emerald-400"
        />
      ),
      description: t("systemArchitecture.layers.frontend.description"),
    },
    {
      title: t("systemArchitecture.layers.backend.title"),
      icon: <FaServer size={35} className="text-blue-600 dark:text-blue-400" />,
      description: t("systemArchitecture.layers.backend.description"),
    },
    {
      title: t("systemArchitecture.layers.externalAPIs.title"),
      icon: (
        <FaLink size={35} className="text-purple-600 dark:text-purple-400" />
      ),
      description: t("systemArchitecture.layers.externalAPIs.description"),
    },
    {
      title: t("systemArchitecture.layers.mlModels.title"),
      icon: (
        <FaCogs size={35} className="text-orange-600 dark:text-orange-400" />
      ),
      description: t("systemArchitecture.layers.mlModels.description"),
    },
    {
      title: t("systemArchitecture.layers.database.title"),
      icon: (
        <FaDatabase size={35} className="text-amber-600 dark:text-amber-400" />
      ),
      description: t("systemArchitecture.layers.database.description"),
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-base-100 transition-colors duration-500"
      id="architecture"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("systemArchitecture.heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-base-content opacity-70 text-center max-w-2xl mx-auto font-medium"
        >
          {t("systemArchitecture.description")}
        </motion.p>

        {/* Architecture Layer Cards */}
        <div className="mt-16 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-base-200 dark:bg-slate-800/60 border border-emerald-50 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[1.5rem] p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {layer.icon}
              </div>
              <h3 className="text-lg font-black text-emerald-800 dark:text-emerald-400 leading-tight">
                {layer.title}
              </h3>
              <p className="text-base-content opacity-70 mt-3 text-xs leading-relaxed font-medium">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Flow Diagram */}
        <div className="mt-20">
          <WorkflowPipeline />
        </div>
      </div>
    </section>
  );
};

export default SystemArchSec;

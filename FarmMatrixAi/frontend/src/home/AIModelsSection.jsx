import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";import { FaTree, FaImage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AIModelsSection = () => {
  const { t } = useTranslation();

  const models = [
    {
      title: t("aiModels.models.0.title"),
      icon: (
        <FaTree size={24} className="text-emerald-700 dark:text-emerald-400" />
      ),
      description: t("aiModels.models.0.description"),
      highlight: t("aiModels.models.0.highlight", { returnObjects: true }),
    },
    {
      title: t("aiModels.models.1.title"),
      icon: <FaImage size={24} className="text-blue-700 dark:text-blue-400" />,
      description: t("aiModels.models.1.description"),
      highlight: t("aiModels.models.1.highlight", { returnObjects: true }),
    },
  ];

  return (
    <section
      className="py-12 md:py-16 px-4 md:px-6 bg-base-100 transition-colors duration-500"
      id="ai-models"
    >
      <div className="max-w-7xl mx-auto">
        {/* Compact Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-10 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500"
          >
            {t("aiModels.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right">
            {t("aiModels.description")}
          </motion.p>
        </div>

        {/* Short & Wide Model Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-base-200/60 dark:bg-slate-800/60 p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-emerald-50/50 dark:border-slate-700 shadow-lg group hover:bg-base-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-base-100 dark:bg-slate-900 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {model.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-black text-emerald-800 dark:text-emerald-400 leading-tight">
                  {model.title}
                </h3>
              </div>

              <p className="text-[11px] md:text-sm text-base-content opacity-70 leading-relaxed font-medium">
                {model.description}
              </p>

              {/* Highlights - Compact Grid on mobile */}
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 md:block md:space-y-3">
                {model.highlight &&
                  Array.isArray(model.highlight) &&
                  model.highlight.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-[10px] md:text-xs text-base-content font-bold uppercase tracking-tight"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />
                      <span className="opacity-80">{point}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModelsSection;

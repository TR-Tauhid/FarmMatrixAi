import React from "react";
import { motion } from "framer-motion";
import { FaTree, FaImage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AIModelsSection = () => {
  const { t } = useTranslation();

  const models = [
    {
      title: t("aiModels.models.0.title"),
      icon: (
        <FaTree size={35} className="text-emerald-700 dark:text-emerald-400" />
      ),
      description: t("aiModels.models.0.description"),
      highlight: t("aiModels.models.0.highlight", { returnObjects: true }),
    },
    {
      title: t("aiModels.models.1.title"),
      icon: <FaImage size={35} className="text-blue-700 dark:text-blue-400" />,
      description: t("aiModels.models.1.description"),
      highlight: t("aiModels.models.1.highlight", { returnObjects: true }),
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-base-100 transition-colors duration-500"
      id="ai-models"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("aiModels.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto text-center font-medium"
        >
          {t("aiModels.description")}
        </motion.p>

        {/* Model Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-base-100 dark:bg-slate-800/50 p-10 rounded-[2.5rem] shadow-xl border border-emerald-50 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />

              <div className="flex items-center gap-5 relative z-10">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl group-hover:scale-110 transition-transform">
                  {model.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-800 dark:text-emerald-400">
                  {model.title}
                </h3>
              </div>

              <p className="mt-6 text-base-content opacity-70 leading-relaxed font-medium relative z-10">
                {model.description}
              </p>

              <ul className="mt-8 space-y-4 relative z-10">
                {model.highlight &&
                  Array.isArray(model.highlight) &&
                  model.highlight.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-base-content font-semibold"
                    >
                      <span className="mt-2 w-2 h-2 bg-emerald-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                      <span className="opacity-90">{point}</span>
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

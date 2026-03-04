import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBrain, FaTree, FaImage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AIModelsSection = () => {
  const { t } = useTranslation();

  const models = [
    {
      title: t("aiModels.models.0.title"),
      icon: <FaTree size={35} className="text-green-700" />,
      description: t("aiModels.models.0.description"),
      highlight: t("aiModels.models.0.highlight", { returnObjects: true }),
    },
    {
      title: t("aiModels.models.1.title"),
      icon: <FaImage size={35} className="text-blue-700" />,
      description: t("aiModels.models.1.description"),
      highlight: t("aiModels.models.1.highlight", { returnObjects: true }),
    },
  ];

  return (
    <section className="py-20 px-6 bg-green-50" id="ai-models">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          {t("aiModels.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto text-center"
        >
          {t("aiModels.description")}
        </motion.p>

        {/* Model Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 border border-green-100"
            >
              <div className="flex items-center gap-4">
                {model.icon}
                <h3 className="text-2xl font-semibold text-green-800">
                  {model.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {model.description}
              </p>

              <ul className="mt-5 space-y-2">
                {model.highlight.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-gray-800"
                  >
                    <span className="mt-2 w-2 h-2 bg-green-600 rounded-full"></span>
                    {point}
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

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFlask, FaCloud, FaLeaf, FaBug } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
      icon: <FaMapMarkerAlt className="text-red-500" size={30} />,
    },
    {
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
      icon: <FaCloud className="text-blue-600" size={30} />,
    },
    {
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
      icon: <FaFlask className="text-purple-600" size={30} />,
    },
    {
      title: t("howItWorks.steps.step4.title"),
      description: t("howItWorks.steps.step4.description"),
      icon: <FaLeaf className="text-green-600" size={30} />,
    },
    {
      title: t("howItWorks.steps.step5.title"),
      description: t("howItWorks.steps.step5.description"),
      icon: <FaBug className="text-orange-600" size={30} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700"
        >
          {t("howItWorks.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto"
        >
          {t("howItWorks.description")}
        </motion.p>

        {/* Steps Timeline */}
        <div className="mt-14 space-y-16 relative">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-7 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Box */}
              <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-100">
                {step.icon}
              </div>

              {/* Text Box */}
              <div className="max-w-md text-left">
                <h3 className="text-2xl font-semibold text-green-800">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Decorative Vertical Line */}
          <div className="hidden min-[800px]:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-green-200 rounded-full"></div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

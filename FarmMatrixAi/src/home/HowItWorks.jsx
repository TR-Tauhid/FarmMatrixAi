import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFlask,
  FaCloud,
  FaLeaf,
  FaBug,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
      icon: (
        <FaMapMarkerAlt
          className="text-rose-500 dark:text-rose-400"
          size={30}
        />
      ),
    },
    {
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
      icon: <FaCloud className="text-blue-600 dark:text-blue-400" size={30} />,
    },
    {
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
      icon: (
        <FaFlask className="text-purple-600 dark:text-purple-400" size={30} />
      ),
    },
    {
      title: t("howItWorks.steps.step4.title"),
      description: t("howItWorks.steps.step4.description"),
      icon: (
        <FaLeaf className="text-emerald-600 dark:text-emerald-400" size={30} />
      ),
    },
    {
      title: t("howItWorks.steps.step5.title"),
      description: t("howItWorks.steps.step5.description"),
      icon: (
        <FaBug className="text-orange-600 dark:text-orange-400" size={30} />
      ),
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-base-100 transition-colors duration-500 overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500"
        >
          {t("howItWorks.title")}
        </motion.h2>

        <motion.p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto font-medium">
          {t("howItWorks.description")}
        </motion.p>

        {/* Steps Timeline Container */}
        <div className="mt-20 space-y-12 md:space-y-0 relative">
          {/* Vertical Line: Exactly in the middle */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-emerald-100 dark:bg-slate-800 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center w-full md:py-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left/Right Side: Icon Box */}
              <div className="flex-1 w-full flex justify-center md:justify-end md:px-12 group">
                <div
                  className={`${index % 2 === 1 ? "md:justify-start" : "md:justify-end"} flex w-full justify-center`}
                >
                  <div className="bg-base-100 dark:bg-slate-800 p-8 rounded-4xl shadow-xl border-4 border-emerald-50 dark:border-slate-700 shrink-0 transform group-hover:rotate-6 transition-transform z-20">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Center: The Dot */}
              <div className="hidden md:flex items-center justify-center relative z-30">
                <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-base-100 dark:border-slate-900 shadow-md"></div>
              </div>

              {/* Left/Right Side: Text Box */}
              <div className="flex-1 w-full text-center md:px-12 mt-6 md:mt-0">
                <div
                  className={`${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}
                >
                  <h3 className="text-2xl font-black text-emerald-800 dark:text-emerald-400">
                    {step.title}
                  </h3>
                  <p className="text-base-content opacity-70 mt-3 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

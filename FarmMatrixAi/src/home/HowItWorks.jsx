import React from "react";
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
          size={20}
        />
      ),
    },
    {
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
      icon: <FaCloud className="text-blue-600 dark:text-blue-400" size={20} />,
    },
    {
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
      icon: (
        <FaFlask className="text-purple-600 dark:text-purple-400" size={20} />
      ),
    },
    {
      title: t("howItWorks.steps.step4.title"),
      description: t("howItWorks.steps.step4.description"),
      icon: (
        <FaLeaf className="text-emerald-600 dark:text-emerald-400" size={20} />
      ),
    },
    {
      title: t("howItWorks.steps.step5.title"),
      description: t("howItWorks.steps.step5.description"),
      icon: (
        <FaBug className="text-orange-600 dark:text-orange-400" size={20} />
      ),
    },
  ];

  return (
    <section
      className="py-12 md:py-24 px-4 bg-base-100 transition-colors duration-500 overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500"
        >
          {t("howItWorks.title")}
        </motion.h2>

        <motion.p className="mt-2 text-[10px] md:text-base text-base-content opacity-70 max-w-xl mx-auto font-medium">
          {t("howItWorks.description")}
        </motion.p>

        {/* Steps Timeline Container */}
        <div className="mt-12 md:mt-20 space-y-8 md:space-y-0 relative">
          {/* Vertical Line: Thinner for mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-emerald-100 dark:bg-slate-800 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center w-full md:py-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Box - Shrunk for mobile */}
              <div className="flex-1 w-full flex justify-center md:justify-end md:px-8">
                <div
                  className={`${index % 2 === 1 ? "md:justify-start" : "md:justify-end"} flex w-full justify-center`}
                >
                  <div className="bg-base-200 dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-4xl shadow-md border-2 md:border-4 border-emerald-50/50 dark:border-slate-700 z-20">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Center: Smaller Dot */}
              <div className="hidden md:flex items-center justify-center relative z-30">
                <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-base-100 dark:border-slate-900 shadow-sm"></div>
              </div>

              {/* Text Box - Micro Typography */}
              <div className="flex-1 w-full text-center md:px-8 mt-3 md:mt-0">
                <div
                  className={`${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}
                >
                  <h3 className="text-xs md:text-2xl font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-tighter md:normal-case">
                    {step.title}
                  </h3>
                  <p className="text-[10px] md:text-base text-base-content opacity-60 mt-1 md:mt-3 leading-tight md:leading-relaxed font-medium">
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

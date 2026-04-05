import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaUserAlt,
  FaLaptopCode,
  FaCloud,
  FaFlask,
  FaLeaf,
  FaBug,
  FaCheckCircle,
} from "react-icons/fa";

const WorkflowPipeline = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("workflowPipeline.steps.0"),
      icon: (
        <FaUserAlt
          size={30}
          className="text-emerald-700 dark:text-emerald-400"
        />
      ),
    },
    {
      title: t("workflowPipeline.steps.1"),
      icon: (
        <FaLaptopCode size={30} className="text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: t("workflowPipeline.steps.2"),
      icon: (
        <FaCloud size={30} className="text-purple-600 dark:text-purple-400" />
      ),
    },
    {
      title: t("workflowPipeline.steps.3"),
      icon: (
        <FaFlask size={30} className="text-orange-500 dark:text-orange-400" />
      ),
    },
    {
      title: t("workflowPipeline.steps.4"),
      icon: (
        <FaLeaf size={30} className="text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      title: t("workflowPipeline.steps.5"),
      icon: <FaBug size={30} className="text-rose-500 dark:text-rose-400" />,
    },
    {
      title: t("workflowPipeline.steps.6"),
      icon: (
        <FaCheckCircle
          size={30}
          className="text-emerald-700 dark:text-emerald-500"
        />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="bg-base-200 dark:bg-slate-800/40 py-16 px-6 rounded-[2.5rem] shadow-inner mt-24 border border-base-300 dark:border-slate-700 transition-colors duration-500"
    >
      <h3 className="text-3xl font-black text-emerald-800 dark:text-emerald-400 text-center mb-16 uppercase tracking-tight">
        {t("workflowPipeline.heading")}
      </h3>

      {/* Workflow Wrapper */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-4 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative flex-1"
          >
            {/* Step Icon Circle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-base-100 dark:bg-slate-900 p-6 rounded-full shadow-lg border-4 border-emerald-50 dark:border-slate-700 z-10"
            >
              {step.icon}
            </motion.div>

            {/* Title */}
            <p className="mt-5 text-base-content font-bold text-center text-xs md:text-sm uppercase tracking-wide opacity-80 max-w-[120px]">
              {step.title}
            </p>

            {/* SVG Arrow Connector */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute left-[65%] top-[35px] w-full"
              >
                <svg
                  width="100"
                  height="12"
                  viewBox="0 0 50 20"
                  fill="none"
                  className="text-emerald-300 dark:text-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10 H40 L30 2 M40 10 L30 18"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Hint */}
      <div className="lg:hidden mt-12 pt-8 border-t border-base-300 dark:border-slate-700">
        <p className="text-center text-xs font-black uppercase tracking-widest opacity-40">
          {t("workflowPipeline.mobileHint")}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkflowPipeline;

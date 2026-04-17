import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";import { useTranslation } from "react-i18next";
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
          className="text-emerald-700 dark:text-emerald-400"
          size={20}
        />
      ),
    },
    {
      title: t("workflowPipeline.steps.1"),
      icon: (
        <FaLaptopCode className="text-blue-600 dark:text-blue-400" size={20} />
      ),
    },
    {
      title: t("workflowPipeline.steps.2"),
      icon: (
        <FaCloud className="text-purple-600 dark:text-purple-400" size={20} />
      ),
    },
    {
      title: t("workflowPipeline.steps.3"),
      icon: (
        <FaFlask className="text-orange-500 dark:text-orange-400" size={20} />
      ),
    },
    {
      title: t("workflowPipeline.steps.4"),
      icon: (
        <FaLeaf className="text-emerald-600 dark:text-emerald-400" size={20} />
      ),
    },
    {
      title: t("workflowPipeline.steps.5"),
      icon: <FaBug className="text-rose-500 dark:text-rose-400" size={20} />,
    },
    {
      title: t("workflowPipeline.steps.6"),
      icon: (
        <FaCheckCircle
          className="text-emerald-700 dark:text-emerald-500"
          size={20}
        />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-base-200/50 dark:bg-slate-800/40 py-8 md:py-16 px-4 md:px-6 rounded-3xl md:rounded-[2.5rem] mt-12 md:mt-24 border border-base-300 dark:border-slate-700"
    >
      <h3 className="text-xl md:text-3xl font-black text-emerald-800 dark:text-emerald-400 text-center mb-10 md:mb-16 uppercase tracking-tighter md:tracking-tight">
        {t("workflowPipeline.heading")}
      </h3>

      {/* Workflow Grid: 2 columns on mobile, Flex-row on desktop */}
      <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-6 md:gap-4 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative lg:flex-1"
          >
            {/* Step Icon Circle - Scaled down for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-base-100 dark:bg-slate-900 p-4 md:p-6 rounded-full shadow-md border-2 md:border-4 border-emerald-50 dark:border-slate-700 z-10"
            >
              {step.icon}
            </motion.div>

            {/* Title - Micro font for mobile */}
            <p className="mt-3 text-base-content font-bold text-center text-[9px] md:text-sm uppercase tracking-tight opacity-70 max-w-20 md:max-w-[120px]">
              {step.title}
            </p>

            {/* SVG Arrow - Only visible on Large screens */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute left-[70%] top-[35px] w-full pointer-events-none">
                <svg
                  width="40"
                  height="12"
                  viewBox="0 0 50 20"
                  fill="none"
                  className="text-emerald-300 dark:text-slate-700"
                >
                  <path
                    d="M0 10 H40 L30 2 M40 10 L30 18"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Hint - Subtle */}
      <div className="lg:hidden mt-8 pt-4 border-t border-base-300/50 dark:border-slate-700/50">
        <p className="text-center text-[8px] font-black uppercase tracking-[0.2em] opacity-30">
          {t("workflowPipeline.mobileHint")}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkflowPipeline;

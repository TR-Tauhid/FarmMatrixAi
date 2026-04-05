import React from "react";
import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaCheckCircle,
  FaChartPie,
  FaLeaf,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const mockDiagnosisResult = {
  plant: "Soybean (Glycine max)",
  disease: "Frogeye Leaf Spot",
  causalAgent: "Cercospora sojina",
  confidence: 94.5,
  symptoms: ["Small chlorotic spots", "Purple borders", "Defoliation risk"],
  management: ["Apply fungicides", "Resistant varieties", "Crop rotation"],
};

const listItemVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: { opacity: 1, x: 0 },
};

const DiseaseDiagnosisOutput = () => {
  const { t } = useTranslation();
  const { disease, confidence, symptoms, management, plant, causalAgent } =
    mockDiagnosisResult;

  return (
    <section
      className="py-12 md:py-16 px-4 bg-base-100 transition-colors duration-500"
      id="diagnosis-output"
    >
      <div className="max-w-5xl mx-auto">
        {/* Horizontal Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500"
          >
            {t("diseaseDiagnosisOutput.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right">
            {t("diseaseDiagnosisOutput.description")}
          </motion.p>
        </div>

        {/* Main Diagnosis Dashboard (Short & Wide) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-base-200 dark:bg-slate-900 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border border-emerald-100 dark:border-slate-800 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Critical Data (Left/Top) */}
            <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-base-300 dark:border-slate-800 pb-4 md:pb-0 md:pr-8 w-full md:w-auto">
              <div className="p-3 bg-rose-100 dark:bg-rose-900/20 rounded-2xl shrink-0">
                <FaMicroscope className="text-3xl md:text-5xl text-rose-600 dark:text-rose-400" />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black uppercase opacity-50 tracking-widest leading-none mb-1">
                  {t("diseaseDiagnosisOutput.diagnosisLabel")}
                </p>
                <h3 className="text-xl md:text-4xl font-black text-rose-700 dark:text-rose-400 leading-tight">
                  {disease}
                </h3>
              </div>
            </div>

            {/* Meta Data (Right/Bottom) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 w-full">
              <div className="space-y-1 text-left">
                <p className="text-[9px] font-black uppercase opacity-40">
                  {t("diseaseDiagnosisOutput.plantLabel")}
                </p>
                <p className="text-[11px] md:text-sm font-bold text-base-content">
                  {plant}
                </p>
              </div>
              <div className="space-y-1 text-left">
                <p className="text-[9px] font-black uppercase opacity-40">
                  {t("diseaseDiagnosisOutput.causalAgentLabel")}
                </p>
                <p className="text-[11px] md:text-sm font-bold opacity-80 italic">
                  {causalAgent}
                </p>
              </div>
              <div className="space-y-1 text-left col-span-2 md:col-span-1">
                <p className="text-[9px] font-black uppercase opacity-40">
                  {t("diseaseDiagnosisOutput.confidenceLabel")}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-lg md:text-2xl">
                  <FaChartPie className="text-sm md:text-lg opacity-50" />
                  <span>{confidence}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actionable Insights (Two Columns on Mobile to save space) */}
        <div className="mt-4 grid grid-cols-2 gap-3 md:gap-6">
          <div className="bg-rose-50/50 dark:bg-rose-950/10 p-4 md:p-6 rounded-2xl border border-rose-100 dark:border-rose-900/20">
            <h4 className="text-[10px] md:text-lg font-black text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-2 uppercase tracking-widest">
              <FaLeaf className="text-xs" />{" "}
              {t("diseaseDiagnosisOutput.symptomsLabel")}
            </h4>
            <ul className="space-y-2">
              {symptoms.map((s, i) => (
                <li
                  key={i}
                  className="text-[9px] md:text-xs font-medium opacity-70 flex gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />{" "}
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-4 md:p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
            <h4 className="text-[10px] md:text-lg font-black text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-widest">
              <FaCheckCircle className="text-xs" />{" "}
              {t("diseaseDiagnosisOutput.managementLabel")}
            </h4>
            <ul className="space-y-2">
              {management.map((m, i) => (
                <li
                  key={i}
                  className="text-[9px] md:text-xs font-medium opacity-70 flex gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />{" "}
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDiagnosisOutput;

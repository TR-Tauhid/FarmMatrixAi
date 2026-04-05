import React from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaCheckCircle, FaChartPie, FaLeaf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const mockDiagnosisResult = {
  plant: "Soybean (Glycine max)",
  disease: "Frogeye Leaf Spot",
  causalAgent: "Cercospora sojina (Fungus)",
  confidence: 94.5,
  symptoms: [
    "Small, scattered chlorotic (yellow) spots on young leaves.",
    "Spots typically develop a gray/tan center with a dark purple border as they mature.",
    "Affects leaf area, leading to premature defoliation and yield loss."
  ],
  management: [
    "Apply broad-spectrum fungicides (Strobilurins/Triazoles) early in the season.",
    "Use resistant soybean varieties for future planting.",
    "Implement crop rotation with non-host crops.",
    "Bury infected crop residue through tillage."
  ]
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const DiseaseDiagnosisOutput = () => {
  const { t } = useTranslation();
  const { disease, confidence, symptoms, management, plant, causalAgent } = mockDiagnosisResult;

  // Handling translations with fallbacks
  const translatedSymptoms = t("diseaseDiagnosisOutput.symptoms", { returnObjects: true });
  const translatedManagement = t("diseaseDiagnosisOutput.management", { returnObjects: true });
  const symptomsList = Array.isArray(translatedSymptoms) && translatedSymptoms.length ? translatedSymptoms : symptoms;
  const managementList = Array.isArray(translatedManagement) && translatedManagement.length ? translatedManagement : management;

  return (
    <section className="py-20 px-6 bg-base-100 transition-colors duration-500" id="disease-diagnosis-output">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("diseaseDiagnosisOutput.title")}
        </motion.h2>

        <motion.p className="mt-3 text-center max-w-3xl mx-auto opacity-70">
          {t("diseaseDiagnosisOutput.description")}
        </motion.p>

        {/* Main Diagnosis Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-14 bg-base-200 dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border-2 border-emerald-300 dark:border-emerald-900/40 max-w-4xl mx-auto overflow-hidden relative"
        >
          {/* Subtle tech-glow for dark mode */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] -z-10" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 border-b border-emerald-100 dark:border-slate-700 pb-8">
            <div className="p-5 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl">
                <FaMicroscope className="text-6xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center md:text-left space-y-1">
              <p className="text-xs font-black uppercase tracking-widest opacity-60">
                {t("diseaseDiagnosisOutput.diagnosisLabel")}
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-rose-700 dark:text-rose-400">
                {disease}
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
             <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">{t("diseaseDiagnosisOutput.plantLabel")}</p>
                <p className="text-xl font-bold text-emerald-800 dark:text-emerald-200">{plant}</p>
             </div>
             <div className="space-y-1 sm:border-x border-emerald-100 dark:border-slate-700 px-4">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">{t("diseaseDiagnosisOutput.causalAgentLabel")}</p>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-100 italic">{causalAgent}</p>
             </div>
             <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">{t("diseaseDiagnosisOutput.confidenceLabel")}</p>
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                    <FaChartPie className="text-2xl opacity-50" />
                    <span>{confidence}%</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Symptoms and Management Sections */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Symptoms - Red Tinted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-3xl shadow-lg border border-rose-100 dark:border-rose-900/30"
          >
            <h4 className="text-2xl font-black text-rose-700 dark:text-rose-400 mb-6 flex items-center gap-3">
              <FaLeaf className="opacity-50" />
              <span>{t("diseaseDiagnosisOutput.symptomsLabel")}</span>
            </h4>
            <motion.ul 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {symptomsList.map((symptom, index) => (
                <motion.li key={index} variants={listItemVariants} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{symptom}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Management - Green Tinted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-3xl shadow-lg border border-emerald-100 dark:border-emerald-900/30"
          >
            <h4 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
              <FaCheckCircle className="opacity-50" />
              <span>{t("diseaseDiagnosisOutput.managementLabel")}</span>
            </h4>
            <motion.ul 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {managementList.map((action, index) => (
                <motion.li key={index} variants={listItemVariants} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{action}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DiseaseDiagnosisOutput;
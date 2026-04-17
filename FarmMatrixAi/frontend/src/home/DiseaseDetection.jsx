import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";import {
  FaCloudUploadAlt,
  FaLeaf,
  FaTimes,
  FaMicroscope,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const DiseaseDetection = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState(null);
  const isDark = theme === "dark";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <section
      className="py-6 md:py-16 px-3 md:px-6 transition-colors duration-500 bg-base-100"
      id="detection"
    >
      <div className="max-w-5xl mx-auto">
        {/* Squeezed Header */}
        <div className="flex flex-row items-end justify-between gap-2 mb-4 md:mb-10">
          <div className="text-left">
            <h2
              className={`text-xl md:text-5xl font-black tracking-tighter transition-colors ${isDark ? "text-emerald-400" : "text-emerald-900"}`}
            >
              {t("diseaseDetection.title")}
            </h2>
            <p
              className={`text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] ${isDark ? "text-emerald-500/40" : "text-emerald-600/60"}`}
            >
              Neural Diagnostic
            </p>
          </div>
          <p className="hidden md:block text-sm text-base-content opacity-60 font-medium max-w-md text-right italic">
            {t("diseaseDetection.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 items-stretch">
          {/* COMPACT UPLOAD ZONE */}
          <motion.div
            className={`relative overflow-hidden flex flex-col justify-center min-h-[200px] md:min-h-[450px] rounded-2xl md:rounded-[3rem] border transition-all duration-500 
              ${isDark ? "bg-slate-900/80 border-emerald-500/20 shadow-lg" : "bg-base-200 border-emerald-100 shadow-md"}`}
          >
            <AnimatePresence mode="wait">
              {!image ? (
                <motion.label
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-4 relative z-20"
                >
                  <div
                    className={`p-3 md:p-5 rounded-full shadow-md ${isDark ? "bg-slate-800" : "bg-white"}`}
                  >
                    <FaCloudUploadAlt className="text-2xl md:text-6xl text-emerald-600" />
                  </div>
                  <p
                    className={`mt-2 text-[9px] md:text-sm font-black uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-800"}`}
                  >
                    {t("diseaseDetection.uploadPrompt")}
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </motion.label>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 p-2 md:p-4 bg-rose-500 text-white rounded-lg md:rounded-full shadow-2xl z-30 active:scale-75 transition-transform"
                  >
                    <FaTimes size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* SQUEEZED SIDEBAR */}
          <div className="flex flex-col gap-2 md:gap-6">
            {/* Action Card: Thinned for mobile */}
            <motion.div
              className={`p-4 md:p-8 rounded-2xl md:rounded-[3rem] relative overflow-hidden transition-all duration-500
                ${isDark ? "bg-emerald-950/40 border border-emerald-500/20 shadow-inner" : "bg-emerald-600 shadow-lg"}`}
            >
              <div className="flex items-center justify-between lg:block">
                <div>
                  <h3 className="text-xs md:text-2xl font-black uppercase tracking-tighter flex items-center gap-2 text-white leading-none">
                    <FaLeaf className="text-[10px] md:text-lg" />{" "}
                    {t("diseaseDetection.analyzeButton")}
                  </h3>
                  <p className="text-[7px] md:text-xs opacity-60 font-bold mt-1 tracking-widest text-white uppercase">
                    CNN Sequence Ready
                  </p>
                </div>
                <button
                  className={`mt-0 lg:mt-8 px-4 lg:w-full py-2 lg:py-4 font-black text-[9px] md:text-sm uppercase tracking-[0.2em] rounded-lg md:rounded-2xl shadow-xl transition-all active:scale-95
                  ${isDark ? "bg-emerald-500 text-slate-950" : "bg-white text-emerald-800"}`}
                >
                  Run AI
                </button>
              </div>
            </motion.div>

            {/* Result Readout: Scaled down */}
            <div
              className={`p-4 md:p-8 rounded-2xl border transition-colors duration-500
              ${isDark ? "bg-slate-900/40 border-emerald-500/10" : "bg-slate-50 border-emerald-50"}`}
            >
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <h3
                  className={`text-[8px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-1 ${isDark ? "text-emerald-500/50" : "text-emerald-700/50"}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("diseaseDetection.resultTitle")}
                </h3>
              </div>
              <div
                className={`p-3 rounded-lg border font-mono ${isDark ? "bg-slate-800/30 border-emerald-500/5" : "bg-white border-emerald-500/5"}`}
              >
                <p className="text-[9px] md:text-sm opacity-60 leading-tight">
                  {">"} {t("diseaseDetection.resultPlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetection;

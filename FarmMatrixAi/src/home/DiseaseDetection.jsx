import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloudUploadAlt, FaLeaf, FaTimes } from "react-icons/fa";

const DiseaseDetection = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <section
      className="py-8 md:py-16 px-4 bg-base-100 transition-colors duration-500"
      id="detection"
    >
      <div className="max-w-5xl mx-auto">
        {/* Horizontal Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500 tracking-tighter"
          >
            {t("diseaseDetection.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right">
            {t("diseaseDetection.description")}
          </motion.p>
        </div>

        {/* Main Interface: Side-by-side on large screens */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          {/* Upload Area */}
          <div className="bg-base-200 dark:bg-slate-900 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] border border-base-300 dark:border-slate-800 flex flex-col justify-center min-h-[220px]">
            {!image ? (
              <label className="w-full h-full border-2 border-dashed border-emerald-400/30 dark:border-emerald-600/20 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-500/5 transition-all group p-6">
                <FaCloudUploadAlt className="text-3xl md:text-5xl text-emerald-600/40 group-hover:text-emerald-500 transition-colors mb-2" />
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-base-content opacity-70">
                  {t("diseaseDetection.uploadPrompt")}
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-40 md:h-64 object-cover rounded-xl shadow-inner border-2 border-base-100 dark:border-slate-800"
                />
                <button
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 p-2 bg-rose-500 text-white rounded-lg shadow-lg hover:bg-rose-600 active:scale-90 transition-all"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            )}
          </div>

          {/* Diagnosis & Controls (Short & Wide) */}
          <div className="flex flex-col gap-4">
            {/* Control Box */}
            <div className="bg-emerald-600 dark:bg-emerald-500 p-6 rounded-2xl md:rounded-[2rem] shadow-xl text-white flex flex-col justify-between items-start gap-4">
              <div>
                <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                  <FaLeaf /> AI Diagnostic Engine
                </h3>
                <p className="text-[9px] md:text-xs opacity-80 font-medium mt-1">
                  Ready for CNN sequence analysis.
                </p>
              </div>
              <button className="w-full py-3 bg-white text-emerald-700 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg hover:bg-emerald-50 active:scale-95 transition-all">
                {t("diseaseDetection.analyzeButton")}
              </button>
            </div>

            {/* Result Box (Micro UI) */}
            <div className="flex-1 bg-base-200/50 dark:bg-slate-800/30 p-5 rounded-2xl border border-base-300 dark:border-slate-800">
              <h3 className="text-[10px] md:text-sm font-black text-base-content uppercase flex items-center gap-2 tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t("diseaseDetection.resultTitle")}
              </h3>
              <p className="mt-2 text-[9px] md:text-xs text-base-content opacity-60 leading-tight italic font-medium">
                {t("diseaseDetection.resultPlaceholder")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetection;

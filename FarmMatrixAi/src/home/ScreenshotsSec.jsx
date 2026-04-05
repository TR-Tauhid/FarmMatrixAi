import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Assume assets are imported as before...
import snap1 from "../assets/snap-1.png";
import snap2 from "../assets/snap-2.png";
import snap3 from "../assets/snap-3.png";
import snap4 from "../assets/snap-4.png";

const getScreenshots = (t) => [
  { src: snap1, title: t("screenshots.items.0") },
  { src: snap2, title: t("screenshots.items.1") },
  { src: snap3, title: t("screenshots.items.2") },
  { src: snap4, title: t("screenshots.items.3") },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.9, y: 20 },
};

// --- MODAL COMPONENT ---
const ScreenshotModal = ({ shot, onClose }) => {
  if (!shot) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-base-100 dark:bg-slate-900 rounded-[2rem] shadow-2xl max-w-5xl w-full p-4 md:p-8 border border-base-300 dark:border-slate-700 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-base-content opacity-50 hover:opacity-100 text-4xl font-light z-50"
        >
          &times;
        </button>

        <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-6 px-2">
          {shot.title}
        </h3>

        <div className="rounded-xl overflow-hidden bg-base-200 dark:bg-slate-800">
          <img
            src={shot.src}
            alt={shot.title}
            className="w-full h-auto object-contain max-h-[70vh] mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ScreenshotsSection = () => {
  const { t } = useTranslation();
  const screenshots = getScreenshots(t);
  const [selectedShot, setSelectedShot] = useState(null);

  return (
    <>
      <section
        className="py-24 px-6 bg-base-100 transition-colors duration-500"
        id="screenshots"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
          >
            {t("screenshots.heading")}
          </motion.h2>

          <motion.p className="mt-4 text-base-content opacity-70 text-center max-w-2xl mx-auto font-medium">
            {t("screenshots.description")}
          </motion.p>

          {/* Screenshot Grid */}
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedShot(shot)}
                className="group bg-base-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-slate-700 cursor-pointer"
              >
                <div className="overflow-hidden aspect-video relative">
                  <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="bg-white text-emerald-700 px-4 py-2 rounded-full font-black text-sm shadow-xl">
                      View Large
                    </span>
                  </div>
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
                    {shot.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedShot && (
          <ScreenshotModal
            shot={selectedShot}
            onClose={() => setSelectedShot(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotsSection;

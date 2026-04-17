import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// Assets imported as before...
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
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.9, y: 10 },
};

// --- MODAL COMPONENT ---
const ScreenshotModal = ({ shot, onClose }) => {
  if (!shot) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
      />
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-base-100 dark:bg-slate-900 rounded-2xl md:rounded-4xl shadow-2xl max-w-5xl w-full p-3 md:p-8 border border-base-300 dark:border-slate-700 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-base-content opacity-50 text-3xl font-light z-50"
        >
          &times;
        </button>
        <h3 className="text-sm md:text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-3 md:mb-6 px-2">
          {shot.title}
        </h3>
        <div className="rounded-lg overflow-hidden bg-base-200 dark:bg-slate-800">
          <img
            src={shot.src}
            alt={shot.title}
            className="w-full h-auto object-contain max-h-[75vh] mx-auto"
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
        className="py-12 md:py-24 px-4 md:px-6 bg-base-100 transition-colors duration-500"
        id="screenshots"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center"
          >
            {t("screenshots.heading")}
          </motion.h2>

          <motion.p className="mt-2 text-[10px] md:text-base text-base-content opacity-70 text-center max-w-2xl mx-auto font-medium">
            {t("screenshots.description")}
          </motion.p>

          {/* Optimized Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedShot(shot)}
                className="group bg-base-200 dark:bg-slate-800 rounded-2xl md:rounded-4xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-base-300 dark:border-slate-700 cursor-pointer"
              >
                <div className="overflow-hidden aspect-4/3 md:aspect-video relative">
                  <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="bg-white text-emerald-700 px-3 py-1 rounded-full font-black text-[10px] md:text-sm shadow-xl">
                      View
                    </span>
                  </div>
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-3 md:p-6 text-center">
                  <h3 className="text-[10px] md:text-lg font-black text-emerald-800 dark:text-emerald-400 truncate">
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

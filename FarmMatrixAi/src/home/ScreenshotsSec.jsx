import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Import all images for correct bundling (Assuming they are in '../assets/')
import snap1 from "../assets/snap-1.png";
import snap2 from "../assets/snap-2.png";
import snap3 from "../assets/snap-3.png";
import snap4 from "../assets/snap-4.png";

const screenshots = [
  { src: snap1, title: "Crop Recommendation Output" },
  { src: snap2, title: "Disease Detection – Leaf Upload" },
  { src: snap3, title: "Weather & Soil API Integration" },
  { src: snap4, title: "User Dashboard & History" },
];

// Modal Animation Variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// --- MODAL COMPONENT (placed outside the main component for clarity) ---
const ScreenshotModal = ({ shot, onClose }) => {
  if (!shot) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose} // Close on backdrop click
      >
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Modal Container */}
        <motion.div
          className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6"
          variants={modalVariants}
          // Prevent closing the modal when clicking inside the content area
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-light"
            aria-label="Close modal"
          >
            &times;
          </button>

          <h3 className="text-2xl font-bold text-green-700 mb-4 border-b pb-2">
            {shot.title}
          </h3>

          <img
            src={shot.src}
            alt={shot.title}
            className="w-full h-auto object-contain rounded-lg shadow-xl max-h-[80vh]"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
// --- END MODAL COMPONENT ---

const ScreenshotsSection = () => {
  // State to hold the data of the currently selected screenshot
  const [selectedShot, setSelectedShot] = useState(null);

  const handleShotClick = (shot) => {
    setSelectedShot(shot);
  };

  const handleClose = () => {
    setSelectedShot(null);
  };

  return (
    <>
      <section className="py-20 px-6 bg-green-50" id="screenshots">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 text-center"
          >
            System Snapshots
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-gray-700 text-center max-w-2xl mx-auto"
          >
            A quick look at how the Unified AI Framework appears in real usage —
            from predictions to visual diagnostics.
          </motion.p>

          {/* Screenshot Grid */}
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {screenshots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition border border-green-100 cursor-pointer"
                onClick={() => handleShotClick(shot)} // Attach click handler here
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Caption */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-800">
                    {shot.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Render the Modal if a shot is selected */}
      <AnimatePresence>
        {selectedShot && (
          <ScreenshotModal shot={selectedShot} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotsSection;

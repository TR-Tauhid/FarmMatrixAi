import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCloudUploadAlt, FaCameraRetro } from "react-icons/fa";

const DiseaseDetectionUpload = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`${t("diseaseDetectionUpload.uploadAlert")} ${selectedFile.name}`);
    } else {
      alert(t("diseaseDetectionUpload.selectFileAlert"));
    }
  };

  return (
    <section className="py-20 px-6 bg-white" id="disease-upload">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          {t("diseaseDetectionUpload.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-2xl mx-auto"
        >
          {t("diseaseDetectionUpload.description")}
        </motion.p>

        {/* Upload Card / Dropzone */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 bg-green-50 p-8 rounded-xl shadow-xl border border-green-100 max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">
              {t("diseaseDetectionUpload.uploadFormTitle")}
            </h3>
            
            <label 
              htmlFor="leaf-upload"
              className={`block w-full p-10 border-4 border-dashed rounded-lg transition duration-300 cursor-pointer ${
                selectedFile ? 'border-green-500 bg-green-100' : 'border-green-300 hover:border-green-500 hover:bg-green-100'
              }`}
            >
              <div className="text-center">
                <FaCloudUploadAlt className="text-6xl text-green-500 mx-auto mb-3" />
                <p className="text-lg font-medium text-green-700">
                  {selectedFile ? `${t("diseaseDetectionUpload.fileSelectedText")} ${selectedFile.name}` : t("diseaseDetectionUpload.dragDropText")}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {t("diseaseDetectionUpload.fileFormatInfo")}
                </p>
              </div>
            </label>
            
            {/* Hidden native file input */}
            <input
              type="file"
              id="leaf-upload"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className="hidden" 
            />
            
            {/* Action Buttons */}
            <div className="mt-6 flex flex-col space-y-4">
                
                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!selectedFile}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600  font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 transition"
                >
                    <FaCameraRetro />
                    <span>{t("diseaseDetectionUpload.analyzeButton")}</span>
                </motion.button>

                {/* Optional: 'Capture from Camera' button */}
                <button
                    type="button"
                    className="w-full text-center text-sm text-green-600 hover:text-green-800 transition"
                    onClick={() => alert(t("diseaseDetectionUpload.cameraAlert"))}
                >
                    {t("diseaseDetectionUpload.captureButton")}
                </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default DiseaseDetectionUpload;
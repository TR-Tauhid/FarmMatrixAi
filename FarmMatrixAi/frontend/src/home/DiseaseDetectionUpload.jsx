import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCloudUploadAlt, FaCameraRetro, FaSpinner } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const DiseaseDetectionUpload = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const cameraInputRef = useRef(null);
  const AuthValue = useContext(AuthContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleCameraCapture = () => {
    cameraInputRef.current?.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert(t("diseaseDetectionUpload.selectFileAlert"));
      return;
    }

    setIsAnalyzing(true);
    setResult(null);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);
    if (AuthValue?.user?.uid) {
      formData.append("userId", AuthValue.user?.uid);
    }

    try {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const API_URL = isLocalhost ? 'http://localhost:5000/api' : (import.meta.env.VITE_API_URL || 'https://farmmatrixai.onrender.com/api');
      
      const token = localStorage.getItem("token") || localStorage.getItem("accessToken");
      const headers = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(`${API_URL}/disease/analyze`, {
        method: "POST",
        headers,
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to analyze image");
      }

      setResult(data.data);
    } catch (err) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors" id="disease-upload">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 dark:text-emerald-500 text-center"
        >
          {t("diseaseDetectionUpload.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 dark:text-slate-300 text-center max-w-2xl mx-auto"
        >
          {t("diseaseDetectionUpload.description")}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-14 items-start">
          {/* Upload Card / Dropzone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-green-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-green-800 dark:text-emerald-400 text-center mb-6">
                {t("diseaseDetectionUpload.uploadFormTitle")}
              </h3>
              
              <label 
                htmlFor="leaf-upload"
                className={`block w-full p-10 border-4 border-dashed rounded-lg transition duration-300 cursor-pointer relative overflow-hidden ${
                  selectedFile ? 'border-green-500 bg-green-100 dark:bg-emerald-900/20' : 'border-green-300 dark:border-slate-700 hover:border-green-500 dark:hover:border-emerald-500 hover:bg-green-100 dark:hover:bg-emerald-900/10'
                }`}
              >
                <div className="text-center relative z-10">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Leaf preview" className="w-48 h-48 object-cover mx-auto rounded-lg shadow-md mb-4" />
                  ) : (
                    <FaCloudUploadAlt className="text-6xl text-green-500 mx-auto mb-3" />
                  )}
                  <p className="text-lg font-medium text-green-700 dark:text-emerald-500">
                    {selectedFile ? `${t("diseaseDetectionUpload.fileSelectedText")} ${selectedFile.name}` : t("diseaseDetectionUpload.dragDropText")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("diseaseDetectionUpload.fileFormatInfo")}
                  </p>
                </div>
              </label>
              
              {/* Hidden native file inputs */}
              <input
                type="file"
                id="leaf-upload"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                className="hidden" 
              />
              <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={cameraInputRef}
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
                      disabled={!selectedFile || isAnalyzing}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition"
                  >
                      {isAnalyzing ? <FaSpinner className="animate-spin" /> : <FaCloudUploadAlt />}
                      <span>{isAnalyzing ? t("diseaseDetection.analyzing") : t("diseaseDetectionUpload.analyzeButton")}</span>
                  </motion.button>

                  {/* 'Capture from Camera' button */}
                  <button
                      type="button"
                      className="w-full flex items-center justify-center space-x-2 text-center text-sm text-green-600 dark:text-emerald-400 hover:text-green-800 dark:hover:text-emerald-300 transition cursor-pointer"
                      onClick={handleCameraCapture}
                      disabled={isAnalyzing}
                  >
                      <FaCameraRetro />
                      <span>{t("diseaseDetectionUpload.captureButton")}</span>
                  </button>
              </div>

            </form>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 h-full p-8 rounded-xl shadow-xl border border-gray-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">
              {t("diseaseDetection.resultTitle")}
            </h3>
            
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                <p className="font-bold">Error:</p>
                <p>{error}</p>
              </div>
            )}

            {!result && !error && !isAnalyzing && (
              <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-lg text-gray-400 text-center px-4">
                {t("diseaseDetection.resultPlaceholder")}
              </div>
            )}

            {isAnalyzing && (
              <div className="h-48 flex flex-col items-center justify-center space-y-4">
                <FaSpinner className="text-4xl text-green-500 animate-spin" />
                <p className="text-gray-500 animate-pulse">{t("diseaseDetection.analyzing")}</p>
              </div>
            )}

            {result && !isAnalyzing && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 bg-green-50 dark:bg-emerald-900/20 rounded-lg border border-green-200 dark:border-emerald-800">
                  <h4 className="font-bold text-green-800 dark:text-emerald-400 mb-1">{t("diseaseDiagnosisOutput.diagnosisLabel")}</h4>
                  <p className="text-lg font-black">{result.diseaseName || "Unknown"}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">{t("diseaseDiagnosisOutput.plantLabel")}</p>
                    <p className="font-semibold dark:text-white">{result.cropType || "Unknown"}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">{t("diseaseDiagnosisOutput.confidenceLabel")}</p>
                    <p className="font-semibold dark:text-white">{(result.confidence * 100).toFixed(1)}%</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <h4 className="font-bold text-gray-800 dark:text-white border-b pb-1">Description</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{result.description}</p>
                </div>
                
                <div className="space-y-2 mt-4">
                  <h4 className="font-bold text-gray-800 dark:text-white border-b pb-1">{t("diseaseDiagnosisOutput.managementLabel")}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{result.treatment}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DiseaseDetectionUpload;
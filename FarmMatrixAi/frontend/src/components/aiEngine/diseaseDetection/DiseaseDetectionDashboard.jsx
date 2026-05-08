import React, { useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import ImageUploader from "./ImageUploader";
import DiagnosticPulse from "./DiagnosticPulse";
import DiagnosticResult from "./DiagnosticResult";
import TreatmentProtocol from "./TreatmentProtocol";
import RecentScansTable from "./RecentScansTable";

const DiseaseDetectionDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const AuthValue = useContext(AuthContext);

  const handleImageSelected = (file, url) => {
    setSelectedFile(file);
    setPreviewUrl(url);
    setResult(null); 
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", selectedFile);
    if (AuthValue?.user?.uid) {
      formData.append("userId", AuthValue.user.uid);
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
      if (!response.ok) throw new Error(data.message || "Failed to analyze image");

      setResult(data.data);
    } catch (error) {
      console.error("Error analyzing image:", error);
      alert(error.message || "An unexpected error occurred during analysis.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Top Section: Upload & Pulse */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <ImageUploader 
              onImageSelected={handleImageSelected} 
              previewUrl={previewUrl}
              isAnalyzing={isAnalyzing}
              onAnalyze={handleAnalyze}
            />
          </div>
          <div className="lg:col-span-1">
            <DiagnosticPulse />
          </div>
        </div>

        {/* Middle Section: Results & Protocol */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl md:text-2xl font-bold">Diagnostic Result</h2>
            {(result || isAnalyzing) && (
              <span className={`badge gap-2 py-3 px-4 font-bold border-none ${isAnalyzing ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"}`}>
                <span className={`w-2 h-2 rounded-full ${isAnalyzing ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />{" "}
                {isAnalyzing ? "Analyzing..." : "Analysis Complete"}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <DiagnosticResult 
                displayImage={previewUrl} 
                result={result} 
                isAnalyzing={isAnalyzing} 
              />
            </div>
            <div className="lg:col-span-1">
              <TreatmentProtocol result={result} isAnalyzing={isAnalyzing} />
            </div>
          </div>
        </div>

        {/* Bottom Section: History */}
        <RecentScansTable />
      </div>
    </div>
  );
};

export default DiseaseDetectionDashboard;

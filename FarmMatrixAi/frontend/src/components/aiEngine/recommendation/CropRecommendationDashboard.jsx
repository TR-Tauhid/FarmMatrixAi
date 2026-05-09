import React, { useState } from "react";
import { Send, Cpu, Sprout } from "lucide-react";
import ParameterInputForm from "./ParameterInputForm";
import LocationMapping from "./LocationMapping";
import VerifiedMatchCard from "./VerifiedMatchCard";
import MarketProjectionCard from "./MarketProjectionCard";
import AgronomistTip from "./AgronomistTip";

const CropRecommendationDashboard = () => {
  const LPU_COORDS = [31.2559, 75.7027];
  const [lat, setLat] = useState(LPU_COORDS[0]);
  const [lng, setLng] = useState(LPU_COORDS[1]);

  const [params, setParams] = useState({
    nitrogen: "90",
    phosphorus: "42",
    potassium: "43",
    temperature: "24.5",
    humidity: "82",
    ph: "6.5",
    rainfall: "202.9",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (field, val) => {
    setParams((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setResult(null);
    try {
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_URL = isLocalhost ? "http://localhost:5000/api" : (import.meta.env.VITE_API_URL || "https://farmmatrixai.onrender.com/api");

      const payload = { ...params, lat, lng };
      
      const token = localStorage.getItem("token") || localStorage.getItem("accessToken");
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(`${API_URL}/recommend`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      const data = await response.json();      
      setResult(data);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to send parameters:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Inputs & Mapping */}
        <div className="lg:col-span-7 space-y-6">
          <LocationMapping lat={lat} lng={lng} setLat={setLat} setLng={setLng} />
          <ParameterInputForm params={params} handleChange={handleChange} />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
            {isSubmitting ? "Analyzing Field Data..." : "Get AI Recommendation"}
          </button>
        </div>

        {/* Right Column: Results & Market */}
        <div className="lg:col-span-5 space-y-6 relative min-h-[400px]">
          {isSubmitting ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 z-10">
              <Cpu size={48} className="text-emerald-500 animate-pulse mb-4" />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Processing Telemetry</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-[250px]">
                Running neural diagnostics on your soil and environmental parameters...
              </p>
              <div className="mt-6 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ) : result ? (
            result.success ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <VerifiedMatchCard data={result.data} params={params} />
                <MarketProjectionCard data={result.data} />
                <AgronomistTip data={result.data} />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-rose-50/50 dark:bg-rose-900/10 rounded-2xl border border-dashed border-rose-300 dark:border-rose-800 p-8 text-center min-h-[400px]">
                <Cpu size={48} className="text-rose-500/50 dark:text-rose-400/50 mb-4" />
                <h3 className="text-lg font-bold text-rose-800 dark:text-rose-400 mb-2">Analysis Failed</h3>
                <p className="text-sm text-rose-600 dark:text-rose-500">{result.message || "An error occurred during AI analysis. Please try again."}</p>
              </div>
            )
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-white/60 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center min-h-[400px]">
              <Sprout size={48} className="text-emerald-500/50 dark:text-emerald-400/50 mb-4" />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Awaiting Data</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Configure your location and soil parameters on the left, then request a recommendation to see the AI's analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropRecommendationDashboard;

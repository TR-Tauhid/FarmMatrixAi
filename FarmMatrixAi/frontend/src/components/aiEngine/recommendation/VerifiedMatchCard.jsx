import React, { useState, useEffect } from "react";
import { Thermometer, Droplets, ArrowDownToLine, Loader2 } from "lucide-react";

const VerifiedMatchCard = ({ data, params }) => {
  const [imageState, setImageState] = useState({ src: '', status: 'loading' });

  useEffect(() => {
    if (data?.optimalCrop) {
      const crop = data.optimalCrop;
      const primarySrc = `https://image.pollinations.ai/prompt/${encodeURIComponent(`Realistic close up photo of ${crop} growing in an agricultural farm field, highly detailed, sunny day`)}?width=800&height=400&nologo=true`;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setImageState({ src: primarySrc, status: 'loading' });
    }
  }, [data?.optimalCrop]);

  if (!data) return null;
  
  // Extremely reliable static fallback image if the AI image generator fails
  const fallbackSrc = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="relative h-48 bg-emerald-900">
        {/* Loading Skeleton */}
        {imageState.status !== 'loaded' && (
          <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 animate-pulse z-0">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
          </div>
        )}
        {imageState.src && (
          <img
            src={imageState.src}
            alt={data.optimalCrop || "Crop"}
            onLoad={() => setImageState(prev => ({ ...prev, status: 'loaded' }))}
            onError={() => {
              if (imageState.src !== fallbackSrc) {
                setImageState({ src: fallbackSrc, status: 'loading' });
              } else {
                setImageState(prev => ({ ...prev, status: 'error' }));
              }
            }}
            className={`w-full h-full object-cover transition-opacity duration-500 relative z-0 ${imageState.status === 'loaded' ? "opacity-80" : "opacity-0"}`}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded w-fit mb-2 uppercase">
            {data.modelUsed || "AI VERIFIED MATCH"} • {data.confidence}% CONFIDENCE
          </span>
          <h2 className="text-3xl font-black text-white italic tracking-tight">
            {data.optimalCrop || "Unknown Crop"}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
          Based on the analyzed telemetry, {data.optimalCrop} is the most suitable crop for your field's current conditions and soil composition.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: <Thermometer size={16} />, label: "TEMP", val: `${params?.temperature || "--"}°C` },
            { icon: <Droplets size={16} />, label: "HUMID", val: `${params?.humidity || "--"}%` },
            { icon: <ArrowDownToLine size={16} />, label: "pH", val: `${params?.ph || "--"}` },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-blue-50 dark:bg-slate-900 p-3 rounded-xl flex flex-col items-center gap-1"
            >
              <div className="text-emerald-600">{stat.icon}</div>
              <span className="text-[10px] font-bold text-slate-400">
                {stat.label}
              </span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifiedMatchCard;
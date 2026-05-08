import React, { useState, useEffect } from "react";
import { Thermometer, Droplets, ArrowDownToLine, Loader2 } from "lucide-react";

const VerifiedMatchCard = ({ data, params }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImageLoaded(false);
  }, [data?.optimalCrop]);

  if (!data) return null;
  
  const getCropImage = (crop) => {
    if (!crop) return "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop";
    
    // High-quality fallbacks for common crops for instant loading
    const commonCrops = {
      "wheat": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
      "rice": "https://images.unsplash.com/photo-1536622437645-0cbbdfa2a3f0?q=80&w=800&auto=format&fit=crop",
      "corn": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop",
      "maize": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop",
      "cotton": "https://images.unsplash.com/photo-1592500305630-419da01a7c23?q=80&w=800&auto=format&fit=crop",
      "soybean": "https://images.unsplash.com/photo-1600333859429-c2901b0b5d5d?q=80&w=800&auto=format&fit=crop",
      "potato": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop",
      "tomato": "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop",
      "sugarcane": "https://images.unsplash.com/photo-1532025178696-857502c77d4c?q=80&w=800&auto=format&fit=crop",
      "coffee": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
      "tea": "https://images.unsplash.com/photo-1587843468305-64535de4fb90?q=80&w=800&auto=format&fit=crop"
    };
    
    const key = crop.toLowerCase().trim();
    if (commonCrops[key]) return commonCrops[key];
    
    // Generate an image on the fly for any unknown/niche crops
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(`Realistic close up photo of ${crop} growing in an agricultural farm field, highly detailed, sunny day`)}?width=800&height=400&nologo=true`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="relative h-48 bg-emerald-900">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 animate-pulse z-0">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
          </div>
        )}
        <img
          src={getCropImage(data.optimalCrop)}
          alt={data.optimalCrop || "Crop"}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 relative z-0 ${imageLoaded ? "opacity-80" : "opacity-0"}`}
        />
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
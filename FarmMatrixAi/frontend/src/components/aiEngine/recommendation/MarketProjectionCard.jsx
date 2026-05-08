import { TrendingUp } from "lucide-react";

const MarketRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-xl">
    <span className="text-xs font-semibold text-slate-500 uppercase">
      {label}
    </span>
    <span className="text-sm font-black text-slate-800 dark:text-slate-200">
      {value}
    </span>
  </div>
);

const MarketProjectionCard = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="bg-blue-50 dark:bg-slate-900 rounded-2xl p-6 border border-blue-100 dark:border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-blue-600 font-bold">
          <TrendingUp size={20} />
          <span>Market Projection</span>
        </div>
      </div>
      <div className="space-y-3">
        <MarketRow label="Global Index" value="Analyzing..." />
        <MarketRow label="Estimated Yield" value={data.yieldProjection || "--"} />
        <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-xl">
          <span className="text-xs font-semibold text-slate-500 uppercase">
            Market Demand
          </span>
          <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-0.5 rounded uppercase">
            {data.marketDemand || "MODERATE"}
          </span>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xs text-slate-400 italic">
          Powered by Neural Ensemble
        </span>
        <button className="text-blue-600 text-xs font-bold flex items-center gap-1">
          Full Report →
        </button>
      </div>
    </div>
  );
};

export default MarketProjectionCard;
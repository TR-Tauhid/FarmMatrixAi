import { Thermometer, Droplets, ArrowDownToLine } from "lucide-react";

const VerifiedMatchCard = () => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
    <div className="relative h-48 bg-emerald-900">
      <img
        src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop"
        alt="Coffee"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded w-fit mb-2">
          AI VERIFIED MATCH
        </span>
        <h2 className="text-3xl font-black text-white italic tracking-tight">
          Premium Coffee
        </h2>
      </div>
    </div>
    <div className="p-6">
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
        Which is critical for the development of high-density coffee cherries.
        Your current altitude and rainfall align with optimal Arabica strains.
      </p>
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Thermometer size={16} />, label: "TEMP", val: "20-26°C" },
          { icon: <Droplets size={16} />, label: "HUMID", val: "75-85%" },
          { icon: <ArrowDownToLine size={16} />, label: "DEPTH", val: "1.5m+" },
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

export default VerifiedMatchCard;
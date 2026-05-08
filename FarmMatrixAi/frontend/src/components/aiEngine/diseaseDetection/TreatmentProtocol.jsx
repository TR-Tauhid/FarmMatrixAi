import { ShieldAlert, ShieldCheck, Droplets, Leaf } from "lucide-react";

const TreatmentProtocol = ({ result, isAnalyzing }) => {
  if (isAnalyzing) {
    return (
      <div className="bg-white dark:bg-[#0f172a] p-6 md:p-8 rounded-4xl md:rounded-4xl border border-slate-100 dark:border-slate-800 h-full flex flex-col gap-5 md:gap-6 opacity-50 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        </div>
        <div className="space-y-4 grow">
           <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-md mb-4"></div>
           <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-md"></div>
           <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-md"></div>
           <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        </div>
        <div className="h-24 w-full bg-slate-200 dark:bg-slate-700 rounded-2xl"></div>
        <div className="h-14 w-full bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white dark:bg-[#0f172a] p-6 md:p-8 rounded-4xl md:rounded-4xl border border-slate-100 dark:border-slate-800 h-full flex flex-col gap-6 justify-center items-center text-center opacity-50 min-h-[250px]">
         <ShieldAlert size={48} className="text-slate-400 mb-2" />
         <p className="text-sm">Protocol will be generated once diagnostic is complete.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#0f172a] p-6 md:p-8 rounded-4xl md:rounded-4xl border border-slate-100 dark:border-slate-800 h-full flex flex-col gap-5 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
           <ShieldCheck size={24} />
        </div>
        <h3 className="font-bold text-lg leading-tight">Treatment & <br/>Cure Protocol</h3>
      </div>

      <div className="space-y-5 grow overflow-y-auto custom-scrollbar pr-2">
        <div>
          <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3 flex items-center gap-2">
            <Droplets size={12} /> Recommended Actions
          </p>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
             {result.treatment.split(/(?:(?:\r\n|\n)[•-]? |(?:\r\n|\n))/).map((step, idx) => (
                step.trim() && (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{step.replace(/^[•-]\s*/, '')}</span>
                  </div>
                )
             ))}
          </div>
        </div>

        <div className="p-5 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
          <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase mb-2 flex items-center gap-2">
            <Leaf size={12} /> Sanitation & Prevention
          </p>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 italic">
            {result.prevention || "Remove and destroy all infected plant parts immediately to prevent further spread. Maintain optimal plant spacing for good airflow."}
          </p>
        </div>
      </div>

      <button className="btn btn-outline border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white dark:text-emerald-500 dark:hover:text-white rounded-xl h-14 normal-case font-bold shrink-0 w-full">
        Order Treatment Kit
      </button>
    </div>
  );
};

export default TreatmentProtocol;
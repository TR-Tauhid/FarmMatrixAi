import { Activity } from "lucide-react";



const DiagnosticResult = ({ displayImage, result, isAnalyzing }) => {
  // Fallback image if none uploaded
  const defaultImage =
    "https://i.ibb.co/MyzbBdmW/istockphoto-1573587743-612x612.jpg";

  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-4xl md:rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col-reverse md:flex-row h-full">
      <div className="p-6 md:p-10 flex flex-col justify-between w-full md:w-1/2 relative">
        {isAnalyzing ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm">
            <Activity
              size={48}
              className="text-emerald-500 animate-pulse mb-4"
            />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white animate-pulse">
              Running Neural Scan...
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Identifying pathogens and cellular damage
            </p>
          </div>
        ) : !result ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
            <Activity size={48} className="mb-4" />
            <p>Awaiting sample upload and analysis...</p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-[0.2em] uppercase mb-2 block">
                Primary Detection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 dark:text-white">
                {result.diseaseName}
              </h2>

              <div className="flex flex-wrap gap-4 md:gap-10 mb-6 md:mb-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                    AI Confidence
                  </p>
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {Math.round(result.confidence * 100)}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                    Plant Type
                  </p>
                  <p className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {result.cropType || "Unknown"}
                  </p>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl border mb-6 ${
                  result.severity === "high"
                    ? "bg-rose-50 border-rose-100 dark:bg-rose-900/10 dark:border-rose-900/20 text-rose-800 dark:text-rose-300"
                    : result.severity === "medium"
                      ? "bg-amber-50 border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/20 text-amber-800 dark:text-amber-300"
                      : "bg-emerald-50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                }`}
              >
                <p className="text-sm leading-relaxed">
                  <b className="uppercase tracking-wide text-xs opacity-80 block mb-1">
                    Risk Alert: {result.severity}
                  </b>
                  {result.description}
                </p>
              </div>
            </div>

            <button className="btn bg-[#111a2e] hover:bg-[#1e293b] text-white border-none normal-case h-14 rounded-2xl shrink-0 mt-4 w-full">
              📥 Export Full Report
            </button>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[400px]">
        {isAnalyzing && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-emerald-900/20 backdrop-blur-md">
            <div className="w-full h-1 bg-emerald-500/30 absolute top-1/2 transform -translate-y-1/2">
              <div
                className="h-full bg-emerald-400 animate-[loading_1.5s_ease-in-out_infinite]"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        )}
        <img
          src={displayImage || defaultImage}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          alt="Scan Result"
        />
        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-white dark:from-[#0f172a] via-white/50 dark:via-[#0f172a]/50 to-transparent" />
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-[9px] font-mono font-bold tracking-widest text-white/80 uppercase">
          {result
            ? `ID_${result._id?.substring(0, 6).toUpperCase() || "NEW"}`
            : "AWAITING SCAN"}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticResult;

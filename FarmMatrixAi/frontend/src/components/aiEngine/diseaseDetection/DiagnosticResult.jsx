const DiagnosticResult = ({ displayImage }) => {
  // Fallback image if none uploaded
  const defaultImage =
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row h-full">
      <div className="p-10 flex flex-col justify-between md:w-1/2">
        <div>
          <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-[0.2em] uppercase mb-2 block">
            Primary Detection
          </span>
          <h2 className="text-5xl font-bold mb-8">Early Blight</h2>

          <div className="flex gap-10 mb-8">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                AI Confidence
              </p>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                94.2%
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                Pathogen
              </p>
              <p className="text-xl font-bold">A. solani</p>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/20 mb-8">
            <p className="text-sm leading-relaxed text-rose-800 dark:text-rose-300">
              <b className="text-rose-600 dark:text-rose-400">Risk Alert:</b>{" "}
              Spreading pattern detected in <b>Zone 4</b>. Immediate
              intervention required to prevent 20% yield reduction.
            </p>
          </div>
        </div>

        <button className="btn bg-[#111a2e] hover:bg-[#1e293b] text-white border-none normal-case h-14 rounded-2xl">
          📥 Export Full Report
        </button>
      </div>

      <div className="md:w-1/2 relative min-h-[400px]">
        <img
          src={displayImage || defaultImage}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          alt="Scan Result"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white dark:from-[#0f172a] via-transparent" />
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-[8px] font-mono text-white/60">
          REFERENCE IMAGE: ID_8829
        </div>
      </div>
    </div>
  );
};

export default DiagnosticResult;

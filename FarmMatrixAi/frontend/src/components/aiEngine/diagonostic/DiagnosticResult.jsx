const DiagnosticResult = () => (
  <div className="h-full flex flex-col bg-white dark:bg-[#0f172a] rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden">
    <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-[#111a2e]/50 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xl">
          ✓
        </div>
        <div>
          <h3 className="font-bold text-emerald-500">Diagnostic Successful</h3>
          <p className="text-[10px] text-slate-400">Model confidence: 98.4%</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
          Analysis ID
        </p>
        <p className="text-[10px] font-mono">TRP-992-ALPHA</p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row grow">
      {/* Content Area */}
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
            Optimal Cultivation
          </span>
          <h2 className="text-5xl font-bold mt-2 mb-6 dark:text-white">
            Premium Coffee
          </h2>
          <div className="flex gap-3 mb-8">
            <div className="text-emerald-500 text-xl">✨</div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              The high rainfall (202.9mm) and humidity (82%) levels, paired with
              the acidic soil pH (6.5), create the perfect micro-climate for
              high-yield <b>Coffea Arabica</b>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl border border-slate-100 dark:border-emerald-500/30 bg-slate-50 dark:bg-emerald-500/5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Expected Yield
              </p>
              <p className="text-xl font-bold">
                1.8 <span className="text-xs font-normal">Tons/Ha</span>
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-100 dark:border-emerald-500/30 bg-slate-50 dark:bg-emerald-500/5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Maturity Cycle
              </p>
              <p className="text-xl font-bold">
                3-4 <span className="text-xs font-normal">Years</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white dark:text-emerald-950 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
            Download Strategy
          </button>
          <button className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-emerald-500 transition-colors">
            Share
          </button>
        </div>
      </div>

      {/* Visual Side */}
      <div className="md:w-1/3 relative min-h-[400px]">
        <img
          src="https://i.ibb.co/Kx7Z71hk/photo-1447933601403-0c6688de566e.avif"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Coffee Cherries"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white dark:from-[#0f172a] via-transparent" />
        <div className="absolute bottom-6 right-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[8px] font-bold text-white uppercase tracking-widest">
              Real-time Visualisation
            </p>
          </div>
          <p className="text-[9px] text-white/60 italic leading-tight">
            "Typical phenological stage at 1450m elevation with current moisture
            settings."
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DiagnosticResult;

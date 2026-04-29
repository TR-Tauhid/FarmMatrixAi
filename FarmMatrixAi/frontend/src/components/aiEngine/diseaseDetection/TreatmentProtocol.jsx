const TreatmentProtocol = () => (
  <div className="bg-white dark:bg-[#0f172a] p-8 rounded-4xl border border-slate-100 dark:border-slate-800 h-full flex flex-col gap-6">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-500">➕</div>
      <h3 className="font-bold text-lg">Treatment & Cure Protocol</h3>
    </div>

    <div className="space-y-4 flex-grow">
      <div>
        <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">Recommended Fungicides</p>
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex gap-2"><span>🛡️</span> Chlorothalonil (Group M5) every 7-10 days.</li>
          <li className="flex gap-2"><span>🛡️</span> Mancozeb or Copper-based sprays.</li>
        </ul>
      </div>

      <div className="p-6 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-50 dark:border-emerald-900/20">
        <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase mb-2">Sanitation Advice</p>
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 italic">
          Remove all lower infected leaves to reduce spore count. Improve air circulation and avoid overhead irrigation...
        </p>
      </div>
    </div>

    <button className="btn btn-outline border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600 dark:hover:text-white rounded-xl h-14 normal-case font-bold">
      Order Treatment Kit
    </button>
  </div>
);

export default TreatmentProtocol;
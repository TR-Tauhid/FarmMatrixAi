const SoilHealthSummary = () => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
    <h3 className="text-lg font-bold mb-4">Soil Health Summary</h3>
    <div className="space-y-3">
      {/* Root Temp */}
      <div className="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 text-xs">🌡️</div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Root Temp</p>
            <p className="font-bold">18.4°C</p>
          </div>
        </div>
        <span className="badge badge-sm border-none bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold p-3">OPTIMAL</span>
      </div>
      
      {/* Salinity */}
      <div className="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 text-xs">💧</div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Salinity (EC)</p>
            <p className="font-bold">1.2 dS/m</p>
          </div>
        </div>
        <span className="badge badge-sm border-none bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold p-3">STABLE</span>
      </div>

      {/* Nitrogen Alert */}
      <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
        <div className="flex items-center gap-3">
          <div className="text-red-500">⚠️</div>
          <div>
            <p className="text-[10px] font-bold text-red-400 uppercase">Nitrogen Alert</p>
            <p className="font-bold text-red-700 dark:text-red-400">Low Flux</p>
          </div>
        </div>
        <span className="text-red-400 font-bold">›</span>
      </div>
    </div>
  </div>
);

export default SoilHealthSummary;
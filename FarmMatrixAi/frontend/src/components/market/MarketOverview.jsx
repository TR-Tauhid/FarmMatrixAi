const MarketOverview = () => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-between">
    <div>
      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Total Valuation</span>
      <div className="flex items-baseline gap-2 mt-2">
        <h2 className="text-5xl font-bold tracking-tighter">$142.8k</h2>
        <span className="text-emerald-500 font-bold text-sm">↑ 12.4%</span>
      </div>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Updated 2 mins ago • NYSE</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
        <p className="text-[10px] uppercase font-bold text-slate-400">Daily Volume</p>
        <p className="text-xl font-bold mt-1">1.2M <span className="text-sm font-normal text-slate-500">shares</span></p>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
        <p className="text-[10px] uppercase font-bold text-slate-400">Alpha Score</p>
        <p className="text-xl font-bold mt-1">0.84 <span className="text-sm font-normal text-slate-500">High</span></p>
      </div>
    </div>
  </div>
);

export default MarketOverview;
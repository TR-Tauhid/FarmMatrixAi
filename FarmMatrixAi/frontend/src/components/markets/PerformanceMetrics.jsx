const PerformanceMetrics = () => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
    <h3 className="text-lg font-bold mb-4">Performance Metrics</h3>
    <div className="space-y-3">
      {/* Volatility Index */}
      <div className="flex items-center justify-between p-4 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-indigo-500 text-xs">📉</div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Volatility (VIX)</p>
            <p className="font-bold">14.20</p>
          </div>
        </div>
        <span className="badge badge-sm border-none bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold p-3">LOW RISK</span>
      </div>
      
      {/* Sharpe Ratio */}
      <div className="flex items-center justify-between p-4 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-indigo-500 text-xs">📊</div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Sharpe Ratio</p>
            <p className="font-bold">2.1</p>
          </div>
        </div>
        <span className="badge badge-sm border-none bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 font-bold p-3">STRONG</span>
      </div>

      {/* Margin Alert */}
      <div className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors">
        <div className="flex items-center gap-3">
          <div className="text-amber-500">🔔</div>
          <div>
            <p className="text-[10px] font-bold text-amber-500 uppercase">Margin Alert</p>
            <p className="font-bold text-amber-700 dark:text-amber-400">Low Equity</p>
          </div>
        </div>
        <span className="text-amber-400 font-bold">›</span>
      </div>
    </div>
  </div>
);

export default PerformanceMetrics;
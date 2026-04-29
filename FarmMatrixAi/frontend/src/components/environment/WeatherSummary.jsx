const WeatherSummary = () => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-between">
    <div>
      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Current Conditions</span>
      <div className="flex items-center gap-4 mt-2">
        <h2 className="text-6xl font-bold">24°C</h2>
        <div className="text-emerald-500 text-4xl">☀️</div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Partly Cloudy • Humidity 62%</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
        <p className="text-[10px] uppercase font-bold text-slate-400">Evapotranspiration</p>
        <p className="text-xl font-bold mt-1">4.2 <span className="text-sm font-normal text-slate-500">mm/day</span></p>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
        <p className="text-[10px] uppercase font-bold text-slate-400">Wind Speed</p>
        <p className="tnext-xl font-bold mt-1">12 km/h <span className="text-sm font-normal text-slate-500">NW</span></p>
      </div>
    </div>
  </div>
);

export default WeatherSummary;
const DiagnosticPulse = () => (
  <div className="bg-emerald-600 dark:bg-emerald-700 p-8 rounded-4xl text-white h-full relative overflow-hidden flex flex-col justify-between">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
    <div>
      <span className="bg-black/20 px-3 py-1 rounded-full text-[8px] font-black tracking-widest uppercase mb-4 inline-block">Real-time Insights</span>
      <h3 className="text-2xl font-bold mb-4">AI Diagnostic Pulse</h3>
      <p className="text-white/70 text-sm leading-relaxed">
        Currently processing 1,240 hectares across the northern quadrant with 98.4% system uptime.
      </p>
    </div>

    <div className="mt-8">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-bold opacity-60 uppercase">Processing Queue</span>
        <span className="text-xl font-black">82%</span>
      </div>
      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
        <div className="bg-white h-full w-[82%] shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-1000" />
      </div>
    </div>
  </div>
);
export default DiagnosticPulse;
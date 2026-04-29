const MarketProjection = () => (
  <div className="bg-[#111a2e]/50 p-6 rounded-2xl border border-slate-800">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-500">📈</div>
      <div>
        <h4 className="font-bold">Market Projection</h4>
        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Q4 Global Coffee Index</p>
      </div>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed">
      Futures are up by 4.2% due to supply chain tightening in the equatorial belt. High ROI anticipated for this crop cycle.
    </p>
  </div>
);

export default MarketProjection;
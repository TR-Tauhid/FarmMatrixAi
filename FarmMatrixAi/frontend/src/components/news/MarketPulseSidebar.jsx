const MarketPulseSidebar = () => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-100 dark:border-slate-800">
    <div className="flex items-center gap-2 mb-6">
      <span className="text-emerald-500">📈</span>
      <h3 className="font-bold text-lg">Market Pulse</h3>
    </div>
    <div className="space-y-4">
      {[
        { label: 'CORN (CBOT)', price: '4.38', change: '+ 2.4%', up: true },
        { label: 'SOYBEANS', price: '11.92', change: '+ 0.0%', up: true },
        { label: 'WHEAT', price: '5.54', change: '+ 1.1%', up: true }
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
          <div>
            <p className="text-[10px] font-bold text-slate-400">{item.label}</p>
            <p className="text-lg font-bold">${item.price} <span className="text-xs font-normal text-slate-400">/bu</span></p>
          </div>
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.up ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' : 'bg-rose-100 text-rose-700'}`}>
            {item.change}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MarketPulseSidebar;
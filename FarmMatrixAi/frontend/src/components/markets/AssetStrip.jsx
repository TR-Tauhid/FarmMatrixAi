export default function AssetStrip() {
  const assets = [
    { ticker: "AAPL", price: "189.20", trend: "+1.2%", up: true },
    { ticker: "BTC", price: "64,102", trend: "-2.4%", up: false },
    { ticker: "NVDA", price: "822.10", trend: "+5.8%", up: true, active: true },
    { ticker: "TSLA", price: "175.40", trend: "+0.4%", up: true },
    { ticker: "ETH", price: "3,450", trend: "-0.8%", up: false },
  ];

  return (
    <div className="flex gap-4 h-full overflow-x-auto pb-2 scrollbar-hide">
      {assets.map((item) => (
        <div
          key={item.ticker}
          className={`min-w-[140px] flex-1 flex flex-col items-center justify-between py-6 rounded-3xl transition-all border ${
            item.active
              ? "bg-indigo-600 text-white border-indigo-500 shadow-xl scale-105"
              : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
          }`}
        >
          <span className="text-xs font-black">{item.ticker}</span>
          <div
            className={`my-4 text-2xl font-bold ${item.active ? "text-white" : item.up ? "text-emerald-500" : "text-rose-500"}`}
          >
            {item.up ? "↗" : "↘"}
          </div>
          <div className="text-center">
            <p className="font-bold">${item.price}</p>
            <p
              className={`text-xs ${item.active ? "opacity-80" : item.up ? "text-emerald-600" : "text-rose-400"}`}
            >
              {item.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

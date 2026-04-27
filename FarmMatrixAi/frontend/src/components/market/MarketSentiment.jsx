const MarketSentiment = () => (
  <div className="relative overflow-hidden bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800">
    <h3 className="text-lg font-bold mb-2">Market Sentiment</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
      Whale accumulation detected in mid-cap tech sectors. Retail sentiment is shifting to <b>Greed</b>.
    </p>
    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4">
      <span>⚡</span> AI Signal: Bullish Bias
    </div>
    <div className="italic text-xs text-slate-500 dark:text-slate-400 border-l-2 border-indigo-300 dark:border-indigo-700 pl-3">
      "Resistance at $840 likely to break if volume maintains current trajectory."
    </div>
  </div>
);

export default MarketSentiment;
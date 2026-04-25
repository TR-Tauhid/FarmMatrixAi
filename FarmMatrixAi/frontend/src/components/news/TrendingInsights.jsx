const TrendingInsights = () => (
  <div className="bg-[#0f172a] p-8 rounded-4xl text-white">
    <div className="flex items-center gap-2 mb-6 text-emerald-400">
      <span>✨</span>
      <h3 className="font-bold text-lg text-white">Trending Insights</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {['#CarbonCredits', '#DroughtResilience', '#FertilizerCosts', '#EU_Subsidies', '#RegenerativeAg'].map(tag => (
        <span key={tag} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-xl text-xs font-medium border border-slate-700 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default TrendingInsights;
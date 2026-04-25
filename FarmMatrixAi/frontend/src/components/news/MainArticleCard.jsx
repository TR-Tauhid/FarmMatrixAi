const MainArticleCard = () => (
  <div className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 h-full">
    <div className="md:w-1/3 relative min-h-[300px]">
      <img 
        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Irrigation sensor"
      />
    </div>
    <div className="md:w-2/3 p-10 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
            Ag-Tech Focus
          </span>
          <span className="text-xs text-slate-400 font-medium">MARCH 24, 2024</span>
        </div>
        <h2 className="text-3xl font-bold mb-4 leading-snug">
          Precision Irrigation Startup Secures $45M in Series B Funding
        </h2>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          Innovative sensor technology promises to reduce water consumption by up to 30% while increasing crop yield. Venture capital interest in sustainable farming solutions continues to grow...
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">🌱</div>
          <div>
            <p className="text-xs font-bold">TechFarm Daily</p>
            <p className="text-[10px] text-slate-400">Industry Insights</p>
          </div>
        </div>
        <button className="text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline">
          View Detailed Report ›
        </button>
      </div>
    </div>
  </div>
);

export default MainArticleCard;
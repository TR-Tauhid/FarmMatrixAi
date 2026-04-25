const HeroNews = () => (
  <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden mb-8 group">
    <img 
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      alt="Wheat field"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute bottom-0 left-0 p-10 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Grain Exports Surging: New Trade Agreements Opening Markets in Southeast Asia
      </h1>
      <p className="text-slate-200 mt-4 text-lg">
        Leading economists predict a 15% increase in export volume following the landmark bilateral trade deal signed yesterday...
      </p>
      <div className="flex items-center gap-6 mt-6">
        <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-none px-8 rounded-xl text-white">
          Read Full Analysis
        </button>
        <span className="text-white/60 text-sm flex items-center gap-2">
          🕒 2 hours ago
        </span>
      </div>
    </div>
  </div>
);

export default HeroNews;
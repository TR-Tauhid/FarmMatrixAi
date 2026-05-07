const HeroNews = ({ article, loading }) => {
  if (loading || !article) {
    return <div className="h-[400px] w-full rounded-[40px] bg-slate-200 dark:bg-slate-800 animate-pulse mb-8" />;
  }

  return (
    <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden mb-8 group">
      <img 
        src={article.imageUrl || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"} 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000";
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={article.title}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-10 max-w-3xl">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-emerald-600 rounded-full uppercase tracking-wider">
          {article.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {article.title}
        </h1>
        <p className="text-slate-200 mt-4 text-lg line-clamp-2">
          {article.summary}
        </p>
        <div className="flex items-center gap-6 mt-6">
          <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-none px-8 rounded-xl text-white cursor-pointer">
            Read Full Analysis
          </button>
          <span className="text-white/60 text-sm flex items-center gap-2">
            🕒 {new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
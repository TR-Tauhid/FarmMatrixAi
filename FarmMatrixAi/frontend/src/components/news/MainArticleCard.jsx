const MainArticleCard = ({ article, loading }) => {
  if (loading || !article) {
    return <div className="h-full min-h-[300px] w-full rounded-4xl bg-slate-200 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 h-full">
      <div className="md:w-1/3 relative min-h-[300px]">
        <img 
          src={article.imageUrl || "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800"} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800";
          }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={article.title}
        />
      </div>
      <div className="md:w-2/3 p-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {new Date(article.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            {article.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">🌱</div>
            <div>
              <p className="text-xs font-bold">{article.source || "FarmMatrixAI"}</p>
              <p className="text-[10px] text-slate-400">Industry Insights</p>
            </div>
          </div>
          <button className="text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline cursor-pointer">
            View Detailed Report ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArticleCard;
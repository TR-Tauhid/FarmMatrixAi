import React from "react";

const ArticleGrid = ({ articles = [], loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[400px] bg-slate-200 dark:bg-slate-800 rounded-3xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!articles.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 flex flex-col"
        >
          {/* Article Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={article.imageUrl || "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600";
              }}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span
                className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40"
              >
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <div className="grow">
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-widest">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Footer / Author */}
            <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
                  📝
                </div>
                <div>
                  <p className="text-xs font-bold">{article.source || "FarmMatrixAI"}</p>
                  <p className="text-[10px] text-slate-400">Reporter</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-emerald-600 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleGrid;

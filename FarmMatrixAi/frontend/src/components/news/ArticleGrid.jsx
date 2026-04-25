import React from "react";

const articles = [
  {
    id: 1,
    category: "LEGISLATION",
    categoryColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40",
    title: "Revised Farm Bill Targets Carbon Capture...",
    excerpt:
      "The latest legislative draft introduces aggressive tax credits for farmers adopting high-sequestration tiling...",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600",
    author: "Julian Rossi",
    role: "Policy Expert",
    avatar: "https://i.pravatar.cc/150?u=julian",
  },
  {
    id: 2,
    category: "MARKETS",
    categoryColor: "text-blue-600 bg-blue-50 dark:bg-blue-950/40",
    title: "Fertilizer Supply Chains Stabilize as Natural Gas...",
    excerpt:
      "Operational costs for nitrogen-based fertilizers are expected to drop by 12% in the coming quarter, providi...",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600",
    author: "Maria Chen",
    role: "Market Analyst",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: 3,
    category: "GEOPOLITICS",
    categoryColor: "text-slate-600 bg-slate-100 dark:bg-slate-800/40",
    title: "Brazil-China Trade Pact Disrupts North America...",
    excerpt:
      "Shift in procurement strategy by Chinese state buyers marks a significant geopolitical pivot in...",
    image:
      "https://images.unsplash.com/photo-1611974714658-71d33116892a?auto=format&fit=crop&q=80&w=600",
    author: "David Thorne",
    role: "Global Reporter",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

const ArticleGrid = () => {
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
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span
                className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm ${article.categoryColor}`}
              >
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <div className="grow">
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-widest">
                Policy Updates
              </p>
              <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Footer / Author */}
            <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={article.avatar}
                  className="w-8 h-8 rounded-full border border-slate-100 dark:border-slate-700"
                  alt={article.author}
                />
                <div>
                  <p className="text-xs font-bold">{article.author}</p>
                  <p className="text-[10px] text-slate-400">{article.role}</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-emerald-600 transition-colors">
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

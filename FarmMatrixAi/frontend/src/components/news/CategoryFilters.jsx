import React, { useState } from 'react';

const CategoryFilters = () => {
  const [activeCategory, setActiveCategory] = useState('All News');

  const categories = [
    'All News',
    'Global Trade',
    'Ag-Tech',
    'Policy Updates',
    'Commodity Prices'
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      {/* Category Pills */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-emerald-900 text-white border-emerald-900 dark:bg-emerald-600 dark:border-emerald-600 shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800'
            }`}
          >
            {cat === 'All News' && <span className="mr-1">📰</span>}
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="dropdown dropdown-end">
        <label 
          tabIndex={0} 
          className="btn btn-sm bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl normal-case text-xs font-bold text-slate-600 dark:text-slate-300 h-10 px-4"
        >
          <span className="text-slate-400 mr-2">⇅</span>
          Sort by: <span className="text-slate-900 dark:text-white ml-1">Latest</span>
        </label>
        <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow-xl bg-white dark:bg-slate-800 rounded-xl w-40 mt-2 border border-slate-100 dark:border-slate-700">
          <li><a className="text-xs font-bold">Latest</a></li>
          <li><a className="text-xs font-bold">Trending</a></li>
          <li><a className="text-xs font-bold">Oldest</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilters;
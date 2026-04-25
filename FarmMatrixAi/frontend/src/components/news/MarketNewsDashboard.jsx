import React from "react";
import HeroNews from "./HeroNews";
import CategoryFilters from "./CategoryFilters";
import MainArticleCard from "./MainArticleCard";
import MarketPulseSidebar from "./MarketPulseSidebar";
import TrendingInsights from "./TrendingInsights";
import ArticleGrid from "./ArticleGrid";

const MarketNewsDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 1. Hero Section */}
      <HeroNews />

      {/* 2. Filters */}
      <CategoryFilters />

      {/* 3. Middle Section: Split Layo t */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-8">
          <MainArticleCard />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <MarketPulseSidebar />
          <TrendingInsights />
        </div>
      </div>

      {/* 4. Bottom Article Grid */}
      <ArticleGrid />

      {/* Load More */}
      <div className="flex justify-center mt-12 pb-12">
        <button className="btn btn-outline border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600 dark:hover:text-white px-12 rounded-xl">
          LOAD MORE INSIGHTS <span className="ml-2">↓</span>
        </button>
      </div>
    </div>
  );
};

export default MarketNewsDashboard;

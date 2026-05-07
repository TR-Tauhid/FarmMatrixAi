import React, { useState, useEffect } from "react";
import HeroNews from "./HeroNews";
import CategoryFilters from "./CategoryFilters";
import MainArticleCard from "./MainArticleCard";
import MarketPulseSidebar from "./MarketPulseSidebar";
import TrendingInsights from "./TrendingInsights";
import ArticleGrid from "./ArticleGrid";
import { MdLocationOn, MdAccessTime, MdCalendarToday } from "react-icons/md";

const MarketNewsDashboard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All News");
  const [locationName, setLocationName] = useState("Detecting location...");
  const [isEditingLoc, setIsEditingLoc] = useState(false);
  const [locInput, setLocInput] = useState("");
  const [time, setTime] = useState(new Date());

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Geolocation fetching
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );
            const data = await res.json();
            setLocationName(
              data.address.city ||
                data.address.state ||
                data.address.country ||
                "Local Area",
            );
          } catch {
            setLocationName("Location unavailable");
          }
        },
        () => setLocationName("Location access denied"),
      );
    } else {
      setLocationName("Geolocation not supported");
    }
  }, []);

  // Handle manual location change
  const handleLocationSubmit = (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      setIsEditingLoc(false);
      if (locInput.trim()) setLocationName(locInput.trim());
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const isLocalhost =
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1";
        const API_URL = isLocalhost
          ? "http://localhost:5000/api"
          : import.meta.env.VITE_API_URL ||
            "https://farmmatrixai.onrender.com/api";

        let url = `${API_URL}/news`;
        const params = new URLSearchParams();
        if (activeCategory !== "All News")
          params.append("category", activeCategory.toLowerCase());
        if (
          locationName &&
          !locationName.includes("Detecting") &&
          !locationName.includes("denied")
        ) {
          params.append("location", locationName);
        }
        if (params.toString()) url += `?${params.toString()}`;

        const response = await fetch(url);
        const result = await response.json();

        if (result.success) {
          setNews(result.data.news || []);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory]);

  const heroArticle = news.length > 0 ? news[0] : null;
  const mainArticle = news.length > 1 ? news[1] : null;
  const gridArticles = news.length > 2 ? news.slice(2) : [];

  return (
    <div className="p-4 md:p-8 lg:p-12 min-h-screen bg-[#F8FAFC] dark:bg-[#0B1121] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-500">
      {/* Magazine-style Header */}
      <header className="mb-10 border-b-2 border-slate-200 dark:border-slate-800/80 pb-6 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
          <div className="flex flex-col gap-1 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <span>
              {time.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-emerald-600 dark:text-emerald-500">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-100/50 dark:bg-emerald-500/10 px-4 py-2.5 rounded-full text-emerald-800 dark:text-emerald-400 shadow-sm border border-emerald-200/50 dark:border-emerald-800/30">
            <MdLocationOn size={18} className="shrink-0 animate-bounce" />
            {isEditingLoc ? (
              <input
                autoFocus
                type="text"
                className="bg-transparent border-b-2 border-emerald-500 text-sm font-black outline-none w-32 md:w-48 placeholder-emerald-800/30 dark:placeholder-emerald-200/30"
                value={locInput}
                onChange={(e) => setLocInput(e.target.value)}
                onBlur={handleLocationSubmit}
                onKeyDown={handleLocationSubmit}
                placeholder="Enter city..."
              />
            ) : (
              <span
                className="font-black text-sm whitespace-nowrap line-clamp-1 cursor-pointer hover:text-emerald-600 transition-colors"
                onClick={() => {
                  setIsEditingLoc(true);
                  setLocInput(
                    locationName.includes("Detecting") ? "" : locationName,
                  );
                }}
                title="Click to manually change location"
              >
                {locationName}{" "}
                <span className="opacity-40 text-[10px] ml-1">✎ EDIT</span>
              </span>
            )}
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85] uppercase">
          THE{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-400">
            AGRI
          </span>{" "}
          TIMES.
        </h1>
      </header>

      {/* 2. Filters (Moved up for better UX when empty) */}
      <CategoryFilters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {!loading && news.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border-t border-slate-200 dark:border-slate-800 mt-8">
          <div className="text-6xl mb-4 opacity-50">📰</div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            No News Available
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
            We couldn't find any recent agricultural news matching your current
            filters or location.
          </p>
        </div>
      ) : (
        <>
          {/* 1. Hero Section */}
          <HeroNews article={heroArticle} loading={loading} />

          {/* 3. Middle Section: Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <MainArticleCard article={mainArticle} loading={loading} />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <MarketPulseSidebar />
              <TrendingInsights />
            </div>
          </div>

          {/* 4. Bottom Article Grid */}
          <ArticleGrid articles={gridArticles} loading={loading} />
        </>
      )}

      {/* Load More */}
      {gridArticles.length > 0 && (
        <div className="flex justify-center mt-12 pb-12">
          <button className="btn btn-outline border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:border-emerald-600 dark:hover:text-white px-12 rounded-xl cursor-pointer">
            LOAD MORE INSIGHTS <span className="ml-2">↓</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketNewsDashboard;

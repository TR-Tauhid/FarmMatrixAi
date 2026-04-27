import React from 'react';
import MarketOverview from './MarketOverview';
import AssetStrip from './AssetStrip';
import TrendAnalysisChart from './TrendAnalysisChart';
import PerformanceMetrics from './PerformanceMetrics';
import MarketSentiment from './MarketSentiment';

const MarketTrendDashboard = () => {
  return (
    <div className="mx-auto w-11/12 mt-20 p-6 rounded-xl min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Real-time equity flow and volumetric trends. Data synchronized with global exchanges.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-ghost bg-slate-200 dark:bg-slate-800 border-none normal-case">
            Export CSV
          </button>
          <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white normal-case">
            Live View
          </button>
        </div>
      </div>

      {/* Top Row: Portfolio & Assets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-4">
          <MarketOverview />
        </div>
        <div className="lg:col-span-8">
          <AssetStrip />
        </div>
      </div>

      {/* Bottom Row: Deep Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <TrendAnalysisChart />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <PerformanceMetrics />
          <MarketSentiment />
        </div>
      </div>
    </div>
  );
};

export default MarketTrendDashboard;
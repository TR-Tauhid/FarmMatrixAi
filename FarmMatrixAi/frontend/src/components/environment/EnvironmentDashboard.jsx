import React from "react";
import WeatherSummary from "./WeatherSummary";
import WeeklyForecast from "./WeeklyForecast";
import SoilMoistureChart from "./SoilMoistureChart";
import SoilHealthSummary from "./SoilHealthSummary";
import DeepSoilProfile from "./DeepSoilProfile";
import WeatherAlerts from "./WeatherAlerts";

const InsightsDashboard = () => {
  return (
    <div className="w-11/12 mx-auto md:mt-10 rounded-sm p-6 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Weather & Soil Insights
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Real-time atmospheric monitoring paired with deep-layer soil
            analytics for precise irrigation and planting schedules.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-ghost bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-none normal-case">
            Download Report
          </button>
          <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case">
            Update Sensors
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-4">
          <WeatherSummary />
        </div>
        <div className="lg:col-span-8">
          <WeeklyForecast />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-6">
            <WeatherAlerts />
            <SoilMoistureChart />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <SoilHealthSummary />
          <DeepSoilProfile />
        </div>
      </div>
    </div>
  );
};

export default InsightsDashboard;
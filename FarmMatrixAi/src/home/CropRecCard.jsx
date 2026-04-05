import React from "react";
import { useTranslation } from "react-i18next";
import WeatherSection from "./WeatherSection";
import SoilSection from "./SoilSection";
import CropCompare from "./CropCompare";

const CropRecCard = () => {
  const { t } = useTranslation();

  return (
    <div className="group bg-base-100 dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-50 dark:border-slate-800 flex flex-col gap-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-emerald-700 dark:text-emerald-400 leading-tight">
            {t("cropRecCard.title")}
          </h3>
          <p className="text-base-content opacity-70 mt-3 font-medium leading-relaxed">
            {t("cropRecCard.description")}
          </p>
        </div>

        <button className="shrink-0 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-black rounded-2xl shadow-lg shadow-emerald-200 dark:shadow-none transition-all transform hover:-translate-y-1 active:scale-95 text-lg">
          {t("cropRecCard.buttonText")}
        </button>
      </div>

      {/* Data Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* We wrap the imported components in theme-aware containers if they don't have them internally */}
        <div className="bg-base-200 dark:bg-slate-800/50 p-1 rounded-3xl border border-transparent dark:border-slate-700">
          <WeatherSection />
        </div>
        <div className="bg-base-200 dark:bg-slate-800/50 p-1 rounded-3xl border border-transparent dark:border-slate-700">
          <SoilSection />
        </div>
        <div className="bg-base-200 dark:bg-slate-800/50 p-1 rounded-3xl border border-transparent dark:border-slate-700 lg:col-span-1 md:col-span-2 lg:col-auto">
          <CropCompare />
        </div>
      </div>
    </div>
  );
};

export default CropRecCard;

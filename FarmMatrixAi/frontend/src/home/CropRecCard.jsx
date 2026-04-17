import React from "react";
import { useTranslation } from "react-i18next";
import WeatherSection from "./WeatherSection";
import SoilSection from "./SoilSection";
import CropCompare from "./CropCompare";

const CropRecCard = () => {
  const { t } = useTranslation();

  return (
    <div className="group bg-base-100 dark:bg-slate-900 p-4 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-lg transition-all duration-500 border border-emerald-50 dark:border-slate-800 flex flex-col gap-4 md:gap-10">
      {/* Compact Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-6">
        <div className="max-w-2xl w-full">
          <h3 className="text-xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500 leading-tight">
            {t("cropRecCard.title")}
          </h3>
          <p className="text-[10px] md:text-base text-base-content opacity-60 mt-1 md:mt-3 font-medium leading-tight md:leading-relaxed">
            {t("cropRecCard.description")}
          </p>
        </div>

        <button className="w-full md:w-auto px-4 md:px-8 py-2 md:py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-black rounded-xl md:rounded-2xl shadow-md transition-all active:scale-95 text-[10px] md:text-lg uppercase tracking-wider md:normal-case">
          {t("cropRecCard.buttonText")}
        </button>
      </div>

      {/* Data Insights Grid - 2 columns on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        <div className="bg-base-200/50 dark:bg-slate-800/30 p-0.5 rounded-xl md:rounded-3xl border border-transparent dark:border-slate-700 h-full">
          <WeatherSection />
        </div>
        <div className="bg-base-200/50 dark:bg-slate-800/30 p-0.5 rounded-xl md:rounded-3xl border border-transparent dark:border-slate-700 h-full">
          <SoilSection />
        </div>
        {/* Spans 2 columns on mobile to keep the grid height short */}
        <div className="col-span-2 lg:col-span-1 bg-base-200/50 dark:bg-slate-800/30 p-0.5 rounded-xl md:rounded-3xl border border-transparent dark:border-slate-700 h-full">
          <CropCompare />
        </div>
      </div>
    </div>
  );
};

export default CropRecCard;

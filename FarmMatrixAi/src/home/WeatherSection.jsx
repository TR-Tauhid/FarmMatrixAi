import React from "react";
import { useTranslation } from "react-i18next";
import { FaCloudSun } from "react-icons/fa";

const WeatherSection = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full py-8 px-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30 transition-colors duration-500 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
            <FaCloudSun className="text-2xl text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-black text-blue-800 dark:text-blue-300">
            {t("weather.title")}
          </h3>
        </div>

        <p className="text-sm font-medium text-base-content opacity-70 leading-relaxed">
          {t("weather.temperature")}, {t("weather.humidity")} &{" "}
          {t("weather.rainfall")} {t("common.data")}
        </p>
      </div>

      <div className="mt-6">
        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-95 text-sm">
          {t("common.submit")}
        </button>
      </div>
    </section>
  );
};

export default WeatherSection;

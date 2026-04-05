import React from "react";
import { useTranslation } from "react-i18next";
import { FaChartBar } from "react-icons/fa";

const CropCompare = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full py-8 px-6 bg-purple-50/50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/30 transition-colors duration-500 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
            <FaChartBar className="text-2xl text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-black text-purple-800 dark:text-purple-300">
            {t("cropCompare.heading")}
          </h3>
        </div>

        <p className="text-sm font-medium text-base-content opacity-70 leading-relaxed">
          {t("cropCompare.description")}
        </p>
      </div>

      <div className="mt-6">
        <button className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-none transition-all active:scale-95 text-sm">
          {t("cropCompare.button")}
        </button>
      </div>
    </section>
  );
};

export default CropCompare;

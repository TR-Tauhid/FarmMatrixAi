import React from "react";
import { useTranslation } from "react-i18next";
import { FaChartBar } from "react-icons/fa";

const CropCompare = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full py-4 px-3 md:py-8 md:px-6 bg-purple-50/50 dark:bg-purple-900/10 rounded-2xl md:rounded-3xl border border-purple-100 dark:border-purple-900/30 transition-colors duration-500 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
          <div className="p-1.5 md:p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
            <FaChartBar className="text-sm md:text-2xl text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-[10px] md:text-xl font-black text-purple-800 dark:text-purple-300 uppercase tracking-tighter md:normal-case">
            {t("cropCompare.heading")}
          </h3>
        </div>

        <p className="text-[9px] md:text-sm font-medium text-base-content opacity-70 leading-tight md:leading-relaxed">
          {t("cropCompare.description")}
        </p>
      </div>

      <div className="mt-3 md:mt-6">
        <button className="w-full py-1.5 md:py-2.5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white font-black rounded-lg md:rounded-xl shadow-md transition-all active:scale-95 text-[9px] md:text-sm uppercase">
          {t("cropCompare.button")}
        </button>
      </div>
    </section>
  );
};

export default CropCompare;

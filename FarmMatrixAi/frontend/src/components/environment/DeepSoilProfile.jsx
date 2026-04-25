import React from "react";

const DeepSoilProfile = () => (
  <div className="relative overflow-hidden bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-800">
    <h3 className="text-lg font-bold mb-2">Deep Soil Profile</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
      Stable moisture levels detected at the 60cm horizon. Root development is
      projected to reach deeper nutrients by Week 12.
    </p>
    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-4">
      <span>✓</span> Agronomist Recommendation
    </div>
    <div className="italic text-xs text-slate-500 dark:text-slate-400 border-l-2 border-slate-300 dark:border-slate-700 pl-3">
      "Maintain current irrigation pulse duration. Soil profile shows excellent
      retention."
    </div>
  </div>
);

export default DeepSoilProfile;

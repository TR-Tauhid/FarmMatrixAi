import React from "react";
import { Settings } from "lucide-react";

const InputField = ({ label, value, unit, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
      {label}
    </label>
    <div className="bg-blue-50 dark:bg-slate-900 border border-transparent focus-within:border-emerald-500 rounded-lg p-3 flex justify-between items-center cursor-text transition-colors">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="bg-transparent border-none outline-none w-full text-slate-700 dark:text-slate-200 font-medium"
      />
      <span className="text-slate-400 dark:text-slate-500 text-xs italic ml-2 shrink-0">
        {unit}
      </span>
    </div>
  </div>
);

const TextInputField = ({ label, value, placeholder, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
      {label}
    </label>
    <div className="bg-blue-50 dark:bg-slate-900 border border-transparent focus-within:border-emerald-500 rounded-lg p-3 flex justify-between items-center cursor-text transition-colors">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none w-full text-slate-700 dark:text-slate-200 font-medium placeholder:text-slate-400/50"
      />
    </div>
  </div>
);

const ParameterInputForm = ({ params, handleChange }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Precision Parameter Input
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Provide field chemical and environmental data.
          </p>
        </div>
        <button className="p-2 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-600 rounded-lg transition-colors cursor-pointer">
          <Settings size={20} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Nitrogen (N)" value={params.nitrogen} onChange={(e) => handleChange("nitrogen", e.target.value)} unit="mg/kg" />
        <InputField label="Phosphorus (P)" value={params.phosphorus} onChange={(e) => handleChange("phosphorus", e.target.value)} unit="mg/kg" />
        <InputField label="Potassium (K)" value={params.potassium} onChange={(e) => handleChange("potassium", e.target.value)} unit="mg/kg" />
        <InputField label="Temperature" value={params.temperature} onChange={(e) => handleChange("temperature", e.target.value)} unit="°C" />
        <InputField label="Humidity" value={params.humidity} onChange={(e) => handleChange("humidity", e.target.value)} unit="%" />
        <InputField label="Soil pH" value={params.ph} onChange={(e) => handleChange("ph", e.target.value)} unit="" />
        <InputField label="Rainfall" value={params.rainfall} onChange={(e) => handleChange("rainfall", e.target.value)} unit="mm" />
        <div className="col-span-2 mt-2">
          <TextInputField label="Additional Notes / Crop Preferences" placeholder="e.g., High yield, drought resistant..." value={params.additionalNotes} onChange={(e) => handleChange("additionalNotes", e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default ParameterInputForm;
import { Settings } from "lucide-react";

const InputField = ({ label, value, unit }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
      {label}
    </label>
    <div className="bg-blue-50 dark:bg-slate-900 border border-transparent focus-within:border-emerald-500 rounded-lg p-3 flex justify-between items-center">
      <span className="text-slate-700 dark:text-slate-200 font-medium">
        {value}
      </span>
      <span className="text-slate-400 dark:text-slate-500 text-xs italic">
        {unit}
      </span>
    </div>
  </div>
);

const ParameterInputForm = () => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          Precision Parameter Input
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Provide field chemical and environmental data.
        </p>
      </div>
      <button className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
        <Settings size={20} />
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <InputField label="Nitrogen (N)" value="90" unit="mg/kg" />
      <InputField label="Phosphorus (P)" value="42" unit="mg/kg" />
      <InputField label="Potassium (K)" value="43" unit="mg/kg" />
      <InputField label="Temperature" value="24.5" unit="°C" />
      <InputField label="Humidity" value="82" unit="%" />
      <InputField label="Soil pH" value="6.5" unit="" />
      <div className="col-span-2">
        <InputField label="Rainfall" value="202.9" unit="mm" />
      </div>
    </div>
  </div>
);

export default ParameterInputForm;
import { Info } from "lucide-react";

const AgronomistTip = ({ data }) => {
  if (!data || !data.agronomistTip) return null;
  
  return (
    <div className="bg-emerald-900 text-white rounded-2xl p-6 flex gap-4">
      <div className="mt-1 text-emerald-400">
        <Info size={24} />
      </div>
      <div>
        <h4 className="font-bold mb-1">Agronomist Pro-Tip</h4>
        <p className="text-xs leading-relaxed opacity-80">
          {data.agronomistTip}
        </p>
      </div>
    </div>
  );
};
export default AgronomistTip;
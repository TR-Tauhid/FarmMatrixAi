import { Info } from "lucide-react";

const AgronomistTip = () => (
  <div className="bg-emerald-900 text-white rounded-2xl p-6 flex gap-4">
    <div className="mt-1 text-emerald-400">
      <Info size={24} />
    </div>
    <div>
      <h4 className="font-bold mb-1">Agronomist Pro-Tip</h4>
      <p className="text-xs leading-relaxed opacity-80">
        To maximize yield in your specific soil pH, consider an early-stage
        dolomite application to stabilize calcium levels before the primary
        rainy season begins.
      </p>
    </div>
  </div>
);
export default AgronomistTip;
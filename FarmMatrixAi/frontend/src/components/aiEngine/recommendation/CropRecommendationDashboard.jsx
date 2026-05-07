import React from "react";
import ParameterInputForm from "./ParameterInputForm";
import LocationMapping from "./LocationMapping";
import VerifiedMatchCard from "./VerifiedMatchCard";
import MarketProjectionCard from "./MarketProjectionCard";
import AgronomistTip from "./AgronomistTip";

const CropRecommendationDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Inputs & Mapping */}
        <div className="lg:col-span-7 space-y-6">
          <ParameterInputForm />
          <LocationMapping />
        </div>

        {/* Right Column: Results & Market */}
        <div className="lg:col-span-5 space-y-6">
          <VerifiedMatchCard />
          <MarketProjectionCard />
          <AgronomistTip />
        </div>
      </div>
    </div>
  );
};

export default CropRecommendationDashboard;

import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import DiagnosticPulse from "./DiagnosticPulse";
import DiagnosticResult from "./DiagnosticResult";
import TreatmentProtocol from "./TreatmentProtocol";
import RecentScansTable from "./RecentScansTable";

const DiseaseDetectionDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  if(uploadedImage) console.log("uploaded");

  return (
    <div className="p-6 min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Section: Upload & Pulse */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageUploader onImageUpload={setUploadedImage} />
          </div>
          <div className="lg:col-span-1">
            <DiagnosticPulse />
          </div>
        </div>

        {/* Middle Section: Results & Protocol */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-2xl font-bold">Diagnostic Result</h2>
            <span className="badge badge-success gap-2 py-3 px-4 font-bold border-none text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
              Analysis Complete
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DiagnosticResult displayImage={uploadedImage} />
            </div>
            <div className="lg:col-span-1">
              <TreatmentProtocol />
            </div>
          </div>
        </div>

        {/* Bottom Section: History */}
        <RecentScansTable />
      </div>
    </div>
  );
};

export default DiseaseDetectionDashboard;

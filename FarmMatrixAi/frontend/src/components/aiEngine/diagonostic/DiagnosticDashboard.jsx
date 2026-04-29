import React from "react";
import ParameterInputForm from "./ParameterInputForm";
import DiagnosticResult from "./DiagnosticResult";
import FooterStats from "./FooterStats";

const DiagnosticDashboard = () => {
  return (
    <div className="min-h-screen p-8 transition-colors duration-500 bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <header className="mb-4">
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">Diagnostic Module</p>
          <h1 className="text-4xl font-bold tracking-tight dark:text-white">Predictive Crop Advisor</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ParameterInputForm />
          </div>

          {/* Right Column: Result */}
          <div className="lg:col-span-7">
            <DiagnosticResult />
          </div>
        </div>

        {/* Bottom Section: Footer Stats */}
        <FooterStats />
      </div>
    </div>
  );
};

export default DiagnosticDashboard;
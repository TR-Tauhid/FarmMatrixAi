import React from "react";

const Loading = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full h-screen overflow-hidden font-sans transition-colors duration-300 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      {/* Blurred Background Mockup mimicking the AgriPulse dashboard layout */}
      <div
        className={`absolute inset-0 flex flex-col filter blur-xl opacity-30 pointer-events-none scale-105 transition-opacity ${isDark ? "opacity-20" : "opacity-40"}`}
      >
        <div
          className={`h-16 border-b flex items-center px-8 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
        >
          <div
            className={`w-32 h-6 rounded ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
          />
        </div>
        <div className="flex flex-1">
          <div
            className={`w-64 border-r p-6 space-y-4 ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded w-full ${isDark ? "bg-slate-800" : "bg-slate-100"}`}
              />
            ))}
          </div>
          <div className="flex-1 p-10 space-y-8">
            <div
              className={`h-10 rounded w-1/4 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            />
            <div className="grid grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`h-32 rounded-xl shadow-sm border ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}
                />
              ))}
            </div>
            <div
              className={`h-96 rounded-xl w-full ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            />
          </div>
        </div>
      </div>

      {/* Foreground Loading Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center backdrop-blur-xs ${isDark ? "bg-slate-950/40" : "bg-white/30"}`}
      >
        <div className="relative flex flex-col items-center">
          {/* Pulsing Brand Icon */}
          <div className="mb-6 relative">
            <div className="w-20 h-20 border-4 border-emerald-500/20 rounded-full animate-ping absolute" />
            <div
              className={`w-20 h-20 border-t-4 border-emerald-500 rounded-full animate-spin relative flex items-center justify-center`}
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-sm transform rotate-45 shadow-lg shadow-emerald-500/50" />
            </div>
          </div>

          <div className="text-center">
            <h2
              className={`text-2xl font-bold tracking-tight transition-colors ${isDark ? "" : ""}`}
            >
              AgriPulse Pro
            </h2>
            <p
              className={`text-sm mt-2 font-medium uppercase tracking-widest animate-pulse ${isDark ? "/70" : ""}`}
            >
              Calibrating Sensors...
            </p>
          </div>

          {/* Loading Bar */}
          <div
            className={`mt-8 w-64 h-1 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
          >
            <div
              className="h-full bg-emerald-500 rounded-full animate-[loading_2s_ease-in-out_infinite]"
              style={{ width: "40%" }}
            />
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(-100%); }
        }
      `,
        }}
      />
    </div>
  );
};

export default Loading;

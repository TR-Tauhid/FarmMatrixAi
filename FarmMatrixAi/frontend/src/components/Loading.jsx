import React from "react";
import { Leaf } from "lucide-react";

const Loading = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`fixed inset-0 z-[9999] w-full h-screen flex flex-col items-center justify-center overflow-hidden font-sans transition-colors duration-300 backdrop-blur-md ${isDark ? "bg-slate-950/50" : "bg-white/40"}`}
    >
        <div className={`relative flex flex-col items-center justify-center p-12 rounded-[2.5rem] shadow-2xl border ${isDark ? "bg-slate-900/60 border-slate-700/50" : "bg-white/60 border-white/50"} backdrop-blur-2xl overflow-hidden min-w-[320px]`}>
          
          {/* Decorative Glows */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          {/* Planty / Leaf Icon */}
          <div className="mb-8 relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border-4 border-emerald-500/20 dark:border-emerald-400/20 rounded-full animate-ping"></div>
            <div className="relative w-20 h-20 bg-linear-to-br from-emerald-100 to-green-200 dark:from-emerald-900/60 dark:to-green-800/60 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center animate-pulse border border-emerald-300 dark:border-emerald-600">
               <Leaf className="w-10 h-10 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
            </div>
          </div>

          <div className="text-center z-10">
            <h2
            className={`text-2xl font-bold tracking-tight transition-colors ${isDark ? "text-white" : "text-emerald-950"}`}
            >
              Farm Matrix AI
            </h2>
            <p
              className={`text-[10px] mt-2 font-bold uppercase tracking-[0.3em] animate-pulse ${isDark ? "text-emerald-400/80" : "text-emerald-600/80"}`}
            >
              Cultivating Data...
            </p>
          </div>

          {/* Loading Bar */}
          <div
            className={`mt-8 w-56 h-1.5 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
          >
            <div
              className="h-full bg-linear-to-r from-emerald-400 to-green-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
              style={{ width: "40%" }}
            />
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

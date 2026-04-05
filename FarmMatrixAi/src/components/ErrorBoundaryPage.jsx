import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaSyncAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const WebErrorBoundary = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-3 md:p-10 transition-colors duration-500 overflow-hidden relative">
      {/* Background Tech Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-base-100 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-emerald-500/20 p-5 md:p-10 relative z-10 text-center"
      >
        {/* Compact Status Tag */}
        <div className="flex justify-center mb-4">
          <span className="bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-md text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-rose-500/20">
            Runtime Exception
          </span>
        </div>

        {/* Short & Wide Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <FaCode className="text-2xl md:text-4xl text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-left">
            <h1 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">
              UI <span className="text-emerald-600">Sync</span> Failed.
            </h1>
            <p className="text-[9px] md:text-xs font-bold opacity-40 uppercase tracking-widest mt-1">
              Pipeline Interrupted
            </p>
          </div>
        </div>

        {/* Technical Trace (Mini Version) */}
        <div className="bg-slate-950 text-emerald-400 p-3 rounded-xl border border-emerald-500/20 text-left font-mono mb-6">
          <div className="flex items-center justify-between mb-2 opacity-40">
            <span className="text-[8px] font-black uppercase tracking-widest">
              Trace Log
            </span>
            <span className="text-[8px]">0x7F2A</span>
          </div>
          <p className="text-[9px] md:text-xs leading-tight opacity-90 line-clamp-2 italic">
            {error?.message ||
              "TypeError: Cannot read properties of null (reading 'ui_layer')"}
          </p>
        </div>

        {/* Condensed Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-lg shadow-lg active:scale-95 transition-all text-[9px] md:text-xs uppercase tracking-widest"
          >
            <FaSyncAlt className="text-[10px]" /> Hot Reload
          </button>

          <NavLink to="/" className="w-full">
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-black rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 text-[9px] md:text-xs uppercase tracking-widest">
              <FaHome className="text-[10px]" /> Base
            </button>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default WebErrorBoundary;

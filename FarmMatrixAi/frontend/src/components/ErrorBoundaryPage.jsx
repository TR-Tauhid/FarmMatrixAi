import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaSyncAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const WebErrorBoundary = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-800"
      >
        <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <FaCode className="text-3xl" />
        </div>
        
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
          System Glitch
        </h1>
        
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          We encountered an unexpected error while processing your request. Our AI engineers have been notified.
          </p>

        <div className="bg-slate-100 dark:bg-slate-950 rounded-2xl p-5 mb-8 text-left overflow-x-auto border border-slate-200 dark:border-slate-800 shadow-inner">
          <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Error Log</span>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">SYS_ERR</span>
          </div>
          <p className="text-xs font-mono text-rose-600 dark:text-rose-400 leading-relaxed whitespace-pre-wrap">
            {error?.message || "An unknown rendering error occurred."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-600/20 text-sm uppercase tracking-wide cursor-pointer"
          >
            <FaSyncAlt /> Try Again
          </button>

          <NavLink
            to="/"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-black rounded-xl transition-all active:scale-95 text-sm uppercase tracking-wide cursor-pointer"
          >
            <FaHome /> Go Back
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default WebErrorBoundary;

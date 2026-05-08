import React, { useRef } from "react";
import { Camera, Upload, Loader2, Stethoscope } from "lucide-react";

const ImageUploader = ({ onImageSelected, previewUrl, isAnalyzing, onAnalyze }) => {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelected(file, URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      onImageSelected(file, URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="bg-white dark:bg-[#0f172a] p-6 md:p-8 rounded-4xl md:rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm h-full flex flex-col">
      <h3 className="text-lg md:text-xl font-bold mb-2">Upload Field Sample</h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
        Initiate a deep-scan of your crops using our proprietary Vision-AI. Supports high-resolution imagery of leaves, soil, and stems.
      </p>
      
      <input type="file" className="hidden" ref={fileInputRef} onChange={handleFile} accept="image/*" />
      <input type="file" className="hidden" ref={cameraInputRef} onChange={handleFile} accept="image/*" capture="environment" />

      {previewUrl ? (
        <div className="grow flex flex-col items-center justify-center gap-4">
          <div className="border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-3xl bg-emerald-50/30 dark:bg-emerald-900/5 p-4 relative overflow-hidden w-full flex justify-center">
            <img
              src={previewUrl}
              alt="Uploaded preview"
              className="max-h-56 rounded-2xl object-contain shadow-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isAnalyzing}
              className="btn bg-slate-100 hover:bg-slate-200 border-none text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 flex-1 rounded-xl normal-case w-full"
            >
              Change
            </button>
            <button
              onClick={onAnalyze}
              disabled={isAnalyzing}
              className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white flex-2 rounded-xl normal-case font-bold shadow-lg shadow-emerald-500/30 w-full"
            >
              {isAnalyzing ? <Loader2 className="animate-spin" size={20} /> : <Stethoscope size={20} />}
              {isAnalyzing ? "Running Diagnostics..." : "Analyze Sample"}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="grow border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl md:rounded-3xl bg-slate-50/50 dark:bg-slate-800/20 flex flex-col items-center justify-center p-6 md:p-8 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40 group cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
            <Upload className="text-emerald-500" size={28} />
          </div>
          <p className="font-bold text-slate-800 dark:text-slate-200">Drag and drop crop images</p>
          <p className="text-xs text-slate-400 mt-1 mb-6 text-center italic">or click to browse local files</p>
          
          <div className="flex flex-col sm:flex-row justify-around w-full gap-2 md:gap-4 max-w-xs sm:max-w-none" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn bg-white hover:bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 flex-1 rounded-xl normal-case shadow-sm w-full"
            >
              <Upload size={18} className="mr-1" /> Browse
            </button>
            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="btn bg-white hover:bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 flex-1 rounded-xl normal-case shadow-sm w-full"
            >
              <Camera size={18} className="mr-1" /> Camera
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
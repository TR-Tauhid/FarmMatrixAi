import { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {

  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (r) => {
        setPreview(r.target.result);
        onImageUpload(r.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (r) => {
        setPreview(r.target.result);
        onImageUpload(r.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white dark:bg-[#0f172a] p-8 rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">Upload Field Sample</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
        Initiate a deep-scan of your crops using our proprietary Vision-AI. Supports high-resolution imagery of leaves, soil, and stems.
      </p>
      
      {preview ? (
        <div className="grow border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-3xl bg-emerald-50/30 dark:bg-emerald-900/5 flex flex-col items-center justify-center p-6 transition-colors relative overflow-hidden">
          <img
            src={preview}
            alt="Uploaded preview"
            className="max-h-64 rounded-2xl object-contain shadow-md"
          />
          <label className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-none text-white mt-4 cursor-pointer">
            Change Image
            <input type="file" className="hidden" onChange={handleFile} accept="image/*" />
          </label>
        </div>
      ) : (
        <div 
          className="grow border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl bg-blue-50/30 dark:bg-blue-900/5 flex flex-col items-center justify-center p-12 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/10 group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
            <span className="text-emerald-500 text-2xl text-center">☁️</span>
          </div>
          <p className="font-bold text-slate-800 dark:text-slate-200">Drag and drop crop images here</p>
          <p className="text-xs text-slate-400 mt-1 mb-6 text-center italic">or click to browse local files (HEIC, JPG, PNG)</p>
          
          <label className="btn btn-primary bg-white hover:bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 px-10 rounded-xl normal-case cursor-pointer">
            Select Files
            <input type="file" className="hidden" onChange={handleFile} accept="image/*" />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
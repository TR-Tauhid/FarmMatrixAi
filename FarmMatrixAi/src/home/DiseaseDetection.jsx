import { useState } from "react";
import { useTranslation } from "react-i18next";

const DiseaseDetection = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <section className="py-16 px-6 md:px-16 transition-colors duration-500">
      {/* Container: uses base-100 for the main card background */}
      <div className="max-w-4xl mx-auto bg-base-100 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-base-200 dark:border-slate-700">
        
        <h2 className="text-3xl font-black text-center text-base-content">
          {t("diseaseDetection.title")}
        </h2>
        <p className="text-base-content opacity-70 text-center mt-2 max-w-2xl mx-auto">
          {t("diseaseDetection.description")}
        </p>

        {/* Upload Box */}
        <div className="mt-10 flex flex-col items-center">
          {!image && (
            <label className="w-full border-2 border-dashed border-emerald-400 dark:border-emerald-600/50 rounded-2xl p-12 text-center cursor-pointer 
              hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all group">
              <div className="space-y-2">
                <div className="text-4xl mb-4">🍃</div>
                <p className="text-base-content font-medium group-hover:text-emerald-600 transition-colors">
                  {t("diseaseDetection.uploadPrompt")}
                </p>
                <p className="text-xs opacity-50 uppercase tracking-widest font-bold">PNG, JPG up to 10MB</p>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          )}

          {/* Image Preview */}
          {image && (
            <div className="w-full relative group">
              <img
                src={image}
                alt="Leaf preview"
                className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg mt-5 border-4 border-base-200 dark:border-slate-700"
              />

              <button
                onClick={() => setImage(null)}
                className="btn btn-sm btn-circle btn-error absolute top-8 right-4 shadow-lg"
                title={t("diseaseDetection.removeImage")}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Analyze Button */}
        <div className="mt-10 flex justify-center">
          <button className="btn btn-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white border-none px-10 rounded-xl shadow-emerald-200 dark:shadow-none shadow-lg">
            {t("diseaseDetection.analyzeButton")}
          </button>
        </div>

        {/* Result Box */}
        <div className="mt-10 bg-base-200 dark:bg-slate-900/50 p-6 rounded-2xl border border-base-300 dark:border-slate-700">
          <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {t("diseaseDetection.resultTitle")}
          </h3>
          <p className="mt-3 text-base-content opacity-80 leading-relaxed italic">
            {t("diseaseDetection.resultPlaceholder")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetection;
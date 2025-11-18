import { useState } from "react";

const DiseaseDetection = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-emerald-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-emerald-700 text-center">
          Disease Detection System
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Upload a leaf image to detect plant diseases using AI.
        </p>

        {/* Upload Box */}
        <div className="mt-10 flex flex-col items-center">
          {!image && (
            <label className="w-full border-2 border-dashed border-emerald-400 rounded-xl p-10 text-center cursor-pointer hover:bg-emerald-100 transition">
              <p className="text-gray-700">Click to Upload Leaf Image</p>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          )}

          {/* Image Preview */}
          {image && (
            <div className="w-full">
              <img
                src={image}
                alt="Leaf preview"
                className="w-full max-h-80 object-cover rounded-xl shadow mt-5"
              />

              <button
                onClick={() => setImage(null)}
                className="text-red-600 underline mt-3 text-sm"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        {/* Analyze Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-emerald-600 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 transition">
            Analyze Disease
          </button>
        </div>

        {/* Result Box */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-xl font-semibold text-gray-800">Result</h3>
          <p className="text-gray-600 mt-2">
            (AI prediction will show here after integration.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetection;

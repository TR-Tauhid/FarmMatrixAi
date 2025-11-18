import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaCameraRetro } from "react-icons/fa";

const DiseaseDetectionUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Optionally, you can trigger the upload or prediction here
    // For now, we'll just track the file state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`Simulating upload for: ${selectedFile.name}`);
      // In a real app: call API endpoint to upload and detect
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <section className="py-20 px-6 bg-white" id="disease-upload">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          Disease Detection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-2xl mx-auto"
        >
          Upload a clear image of the affected plant leaf to receive an immediate AI-powered diagnostic.
        </motion.p>

        {/* Upload Card / Dropzone */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 bg-green-50 p-8 rounded-xl shadow-xl border border-green-100 max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">
              Upload Leaf Image
            </h3>
            
            <label 
              htmlFor="leaf-upload"
              className={`block w-full p-10 border-4 border-dashed rounded-lg transition duration-300 cursor-pointer ${
                selectedFile ? 'border-green-500 bg-green-100' : 'border-green-300 hover:border-green-500 hover:bg-green-100'
              }`}
            >
              <div className="text-center">
                <FaCloudUploadAlt className="text-6xl text-green-500 mx-auto mb-3" />
                <p className="text-lg font-medium text-green-700">
                  {selectedFile ? `File Selected: ${selectedFile.name}` : "Click or Drag File Here"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PNG, JPG, or JPEG (Max 5MB)
                </p>
              </div>
            </label>
            
            {/* Hidden native file input */}
            <input
              type="file"
              id="leaf-upload"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className="hidden" 
            />
            
            {/* Action Buttons */}
            <div className="mt-6 flex flex-col space-y-4">
                
                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!selectedFile}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 transition"
                >
                    <FaCameraRetro />
                    <span>Analyze Image</span>
                </motion.button>

                {/* Optional: 'Capture from Camera' button */}
                <button
                    type="button"
                    className="w-full text-center text-sm text-green-600 hover:text-green-800 transition"
                    onClick={() => alert("Simulating Camera capture... (Requires access to user's camera)")}
                >
                    Or Capture using Device Camera
                </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default DiseaseDetectionUpload;
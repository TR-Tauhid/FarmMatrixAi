import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaMapMarkerAlt,
  FaSyncAlt,
  FaExclamationTriangle,
} from "react-icons/fa"; // Icons for location, loading, error

const CropRecommendationInput = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetLocation = () => {
    setLoading(true);
    setError("");
    setLatitude("");
    setLongitude("");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(6));
          setLongitude(position.coords.longitude.toFixed(6));
          setLoading(false);
        },
        (err) => {
          console.error("Geolocation Error:", err);
          setLoading(false);
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError(
                "Permission denied to access location. Please enable location services for your browser."
              );
              break;
            case err.POSITION_UNAVAILABLE:
              setError(
                "Location information is unavailable. Please try again later."
              );
              break;
            case err.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An unknown error occurred while fetching location.");
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Options for getCurrentPosition
      );
    } else {
      setLoading(false);
      setError("Geolocation is not supported by your browser.");
    }
  };

  

  return (
    <section className="py-20 px-6 bg-white" id="crop-recommendation-input">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 text-center"
        >
          Crop Recommendation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 text-center max-w-2xl mx-auto"
        >
          Input your location to get tailored crop recommendations. Our system
          leverages your GPS coordinates for precise guidance.
        </motion.p>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 bg-green-50 p-8 rounded-xl shadow-xl border border-green-100 max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">
            Location Input
          </h3>

          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="latitude"
                className="block text-gray-700 font-medium mb-1"
              >
                Latitude:
              </label>
              <input
                type="text"
                id="latitude"
                className="w-full p-3 border border-green-200 rounded-md text-black bg-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="e.g., 31.253910"
                aria-label="Latitude input"
              />
            </div>
            <div>
              <label
                htmlFor="longitude"
                className="block text-gray-700 font-medium mb-1"
              >
                Longitude:
              </label>
              <input
                type="text"
                id="longitude"
                className="w-full p-3 border border-green-200 rounded-md text-black bg-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="e.g., 75.692311"
                aria-label="Longitude input"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGetLocation}
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400 transition"
            >
              {loading ? (
                <>
                  <FaSyncAlt className="animate-spin" />
                  <span>Fetching Location...</span>
                </>
              ) : (
                <>
                  <FaMapMarkerAlt />
                  <span>Get My Location</span>
                </>
              )}
            </motion.button>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded-md flex items-center space-x-2"
              >
                <FaExclamationTriangle />
                <span>{error}</span>
              </motion.div>
            )}

            {latitude && longitude && !error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-100 text-green-700 border border-green-200 rounded-md text-center"
              >
                <p className="font-medium">Location fetched successfully!</p>
                <p className="text-sm">
                  Latitude: {latitude}, Longitude: {longitude}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <MapContainer
        id="find-me"
        className="h-128 w-full mt-8 rounded-lg shadow-lg"
        center={[latitude > 0 ? latitude : 31.253910, longitude > 0 ? longitude : 75.692311]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude > 0 ? latitude : 31.253910, longitude > 0 ? longitude : 75.692311]}>
          <Popup>
            Longitude: {latitude > 0 ? latitude : 31.253910} <br /> Latitude: { longitude > 0 ? longitude : 75.692311}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default CropRecommendationInput;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
import {
  FaMapMarkerAlt,
  FaSyncAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

// Helper to handle map centering when coordinates change
function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

const CropRecommendationInput = () => {
  const { t } = useTranslation();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultPos = [31.25391, 75.692311];
  const currentPos =
    latitude && longitude
      ? [parseFloat(latitude), parseFloat(longitude)]
      : defaultPos;

  const handleGetLocation = () => {
    setLoading(true);
    setError("");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(6));
          setLongitude(position.coords.longitude.toFixed(6));
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          setError(t("cropRecommendationInput.unknownError"));
        },
        { enableHighAccuracy: true, timeout: 10000 },
      );
    } else {
      setLoading(false);
      setError(t("cropRecommendationInput.geolocationNotSupported"));
    }
  };

  return (
    <section
      className="py-20 px-4 md:px-10 transition-colors duration-500 bg-base-100"
      id="crop-recommendation-input"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-emerald-700 dark:text-emerald-500 text-center"
        >
          {t("cropRecommendationInput.title")}
        </motion.h2>

        <motion.p className="mt-4 text-center max-w-2xl mx-auto opacity-70">
          {t("cropRecommendationInput.description")}
        </motion.p>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-base-200 dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-base-300 dark:border-slate-700 max-w-lg mx-auto"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            {t("cropRecommendationInput.locationInputLabel")}
          </h3>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase opacity-60 ml-1">
                  {t("cropRecommendationInput.latitude")}
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-100 dark:bg-slate-900 border-base-300 dark:border-slate-600 focus:border-emerald-500"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="0.000000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase opacity-60 ml-1">
                  {t("cropRecommendationInput.longitude")}
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-100 dark:bg-slate-900 border-base-300 dark:border-slate-600 focus:border-emerald-500"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="0.000000"
                />
              </div>
            </div>

            <button
              onClick={handleGetLocation}
              disabled={loading}
              className="btn btn-block bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white border-none shadow-lg shadow-emerald-200 dark:shadow-none"
            >
              {loading ? (
                <FaSyncAlt className="animate-spin" />
              ) : (
                <FaMapMarkerAlt />
              )}
              <span>
                {loading
                  ? t("common.loading")
                  : t("cropRecommendationInput.getLocation")}
              </span>
            </button>

            {error && (
              <div className="alert alert-error rounded-xl py-2 text-sm">
                <FaExclamationTriangle />
                <span>{error}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Map Section */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-base-200 dark:border-slate-800 relative">
          <MapContainer
            center={currentPos}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[450px] w-full z-0 leaflet-dark-mode" // Added custom class for CSS filter
          >
            <ChangeView center={currentPos} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={currentPos}>
              <Popup className="dark:text-slate-900">
                {latitude}, {longitude}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationInput;

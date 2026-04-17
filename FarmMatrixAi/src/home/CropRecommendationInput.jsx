import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
import {
  FaMapMarkerAlt,
  FaSyncAlt,
  FaExclamationTriangle,
  FaCompass,
} from "react-icons/fa";

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
        () => {
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
      className="py-8 md:py-16 px-4 bg-base-100 transition-colors duration-500"
      id="input-node"
    >
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500 tracking-tighter"
          >
            {t("cropRecommendationInput.title")}
          </motion.h2>
          <motion.p className="text-[10px] md:text-sm text-base-content opacity-60 font-medium md:max-w-md md:text-right leading-tight">
            {t("cropRecommendationInput.description")}
          </motion.p>
        </div>

        {/* Dashboard Layout: Side-by-Side */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Input Control Node */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-base-200 dark:bg-slate-900 p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-base-300 dark:border-slate-800 flex flex-col justify-center gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaCompass className="text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xs md:text-lg font-black uppercase tracking-widest opacity-80">
                {t("cropRecommendationInput.locationInputLabel")}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase opacity-40 ml-1 tracking-tighter">
                  Lat
                </label>
                <input
                  type="text"
                  className="w-full bg-base-100 dark:bg-slate-800 p-2 rounded-lg text-xs font-mono font-bold border border-emerald-500/20 focus:outline-emerald-500 transition-all"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="0.0000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase opacity-40 ml-1 tracking-tighter">
                  Lng
                </label>
                <input
                  type="text"
                  className="w-full bg-base-100 dark:bg-slate-800 p-2 rounded-lg text-xs font-mono font-bold border border-emerald-500/20 focus:outline-emerald-500 transition-all"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="0.0000"
                />
              </div>
            </div>

            <button
              onClick={handleGetLocation}
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
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
              <div className="text-[9px] text-rose-500 font-bold bg-rose-500/10 p-2 rounded-lg flex items-center gap-2 border border-rose-500/20">
                <FaExclamationTriangle className="shrink-0" /> {error}
              </div>
            )}
          </motion.div>

          {/* Squeezed Map Node */}
          <div className="lg:col-span-2 h-64 md:h-full min-h-[250px] md:min-h-[400px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-base-200 dark:border-slate-800 z-0">
            <MapContainer
              center={currentPos}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <ChangeView center={currentPos} />
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={currentPos}>
                <Popup className="text-[10px] font-bold">
                  {latitude || "0"}, {longitude || "0"}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationInput;

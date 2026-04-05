import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext"; // Path to your actual context
import {
  FaSeedling,
  FaCloud,
  FaSearch,
  FaMapMarkerAlt,
  FaSyncAlt,
  FaExclamationTriangle,
  FaFlask,
  FaSun,
  FaChartLine,
} from "react-icons/fa";

// --- Map View Change Component ---
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

const VirtualSensorModule = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext); // Consuming your specific Context

  const LPU_COORDS = [31.2559, 75.7027];
  const [latitude, setLatitude] = useState(LPU_COORDS[0].toFixed(6));
  const [longitude, setLongitude] = useState(LPU_COORDS[1].toFixed(6));
  const [mapCenter, setMapCenter] = useState(LPU_COORDS);
  const [userLocation, setUserLocation] = useState(LPU_COORDS);
  const [loadingAI, setLoadingAI] = useState(false);
  const [resultData, setResultData] = useState(null);

  // We use standard OpenStreetMap for both modes for maximum clarity
  const mapTileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <section className="py-20 px-6 bg-base-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Module Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-emerald-700 dark:text-emerald-500 flex items-center justify-center gap-4">
            <FaSeedling /> <span>{t("virtualSensor.title")}</span>
          </h2>

          {/* Workflow Steps */}
          <div className="mt-12 flex justify-center items-center flex-wrap gap-6">
            <div className="flex flex-col items-center p-6 bg-emerald-50 dark:bg-slate-800 rounded-2xl shadow-lg w-44 border-b-4 border-emerald-500">
              <FaCloud className="text-3xl text-emerald-600 dark:text-emerald-400 mb-2" />
              <p className="font-bold text-sm text-base-content uppercase tracking-tighter">
                Data Fusion
              </p>
            </div>
            <div className="hidden md:block text-3xl text-emerald-300">→</div>
            <div className="flex flex-col items-center p-6 bg-base-200 dark:bg-slate-800 rounded-2xl shadow-xl w-44 border-b-4 border-blue-500">
              <FaSearch className="text-3xl text-blue-600 mb-2" />
              <p className="font-bold text-sm text-base-content uppercase tracking-tighter">
                AI Analysis
              </p>
            </div>
            <div className="hidden md:block text-3xl text-emerald-300">→</div>
            <div className="flex flex-col items-center p-6 bg-emerald-100 dark:bg-slate-800 rounded-2xl shadow-lg w-44 border-b-4 border-emerald-800">
              <FaSeedling className="text-3xl text-emerald-800 dark:text-emerald-300 mb-2" />
              <p className="font-bold text-sm text-base-content uppercase tracking-tighter">
                Output
              </p>
            </div>
          </div>
        </div>

        {/* Action Card */}
        {!resultData && (
          <div className="max-w-lg mx-auto bg-base-200 dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border border-base-300 dark:border-slate-700">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase opacity-50">
                  Lat
                </p>
                <input
                  type="text"
                  value={latitude}
                  readOnly
                  className="input input-bordered w-full bg-base-100 dark:bg-slate-900 border-none"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase opacity-50">
                  Lng
                </p>
                <input
                  type="text"
                  value={longitude}
                  readOnly
                  className="input input-bordered w-full bg-base-100 dark:bg-slate-900 border-none"
                />
              </div>
            </div>
            <button className="btn btn-block bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-lg">
              <FaMapMarkerAlt /> Fetch & Analyze
            </button>
          </div>
        )}

        {/* Map Window */}
        <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-base-200 dark:border-slate-800">
          <MapContainer
            center={LPU_COORDS}
            zoom={14}
            className="h-96 w-full z-0"
          >
            <ChangeView center={mapCenter} zoom={14} />
            <TileLayer url={mapTileUrl} attribution="&copy; OpenStreetMap" />
            <Marker position={userLocation}>
              {/* Note: Popup class handled in CSS below */}
              <Popup>
                <div className="font-bold">
                  {latitude}, {longitude}
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default VirtualSensorModule;

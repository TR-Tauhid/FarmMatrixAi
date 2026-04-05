import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSeedling, FaMapMarkerAlt, FaCrosshairs } from "react-icons/fa";

// --- 1. The "Click to Select" Logic ---
const LocationMarker = ({ setLat, setLng }) => {
  useMapEvents({
    click(e) {
      setLat(e.latlng.lat.toFixed(6));
      setLng(e.latlng.lng.toFixed(6));
    },
  });
  return null;
};

// --- 2. The "Fly To" Logic ---
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 14, { duration: 1.5 });
  }, [center, map]);
  return null;
};

const VirtualSensorModule = () => {
  const LPU_COORDS = [31.2559, 75.7027];
  const [lat, setLat] = useState(LPU_COORDS[0]);
  const [lng, setLng] = useState(LPU_COORDS[1]);
  const [mapCenter, setMapCenter] = useState(LPU_COORDS);

  // Browser GPS Locate Function
  const handleLocate = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude.toFixed(6));
      setLng(longitude.toFixed(6));
      setMapCenter([latitude, longitude]);
    });
  };

  return (
    <section className="py-12 px-4 bg-base-100 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Telemetry Control Panel */}
          <div className="bg-base-200 dark:bg-slate-900 p-6 rounded-[2rem] border border-base-300 dark:border-slate-800 flex flex-col gap-4">
            <h3 className="text-xl font-black text-emerald-700 dark:text-emerald-500 flex items-center gap-2">
              <FaSeedling /> Sensor Node
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-base-100 dark:bg-slate-800 rounded-xl border border-emerald-500/20">
                <p className="text-[9px] font-black uppercase opacity-40">
                  Latitude
                </p>
                <p className="font-mono font-bold text-xs">{lat}</p>
              </div>
              <div className="p-3 bg-base-100 dark:bg-slate-800 rounded-xl border border-emerald-500/20">
                <p className="text-[9px] font-black uppercase opacity-40">
                  Longitude
                </p>
                <p className="font-mono font-bold text-xs">{lng}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleLocate}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-lg text-[10px] uppercase flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <FaCrosshairs /> My Location
              </button>

              <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95">
                <FaMapMarkerAlt /> Run AI Diagnostics
              </button>
            </div>

            <p className="text-[9px] text-center opacity-50 italic">
              *Click anywhere on the map to manually set coordinates.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2 h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-base-200 dark:border-slate-800 z-0 relative">
            <MapContainer
              center={mapCenter}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <ChangeView center={mapCenter} />
              <LocationMarker setLat={setLat} setLng={setLng} />
              <Marker position={[lat, lng]} />
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualSensorModule;

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSeedling, FaCrosshairs, FaSpinner } from "react-icons/fa";

const LocationMarker = ({ setLat, setLng }) => {
  useMapEvents({
    click(e) {
      setLat(e.latlng.lat.toFixed(6));
      setLng(e.latlng.lng.toFixed(6));
    },
  });
  return null;
};

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 14, { duration: 1.5 });
  }, [center, map]);
  return null;
};

const LocationMapping = ({ lat, lng, setLat, setLng }) => {
  const LPU_COORDS = [31.2559, 75.7027];
  const [mapCenter, setMapCenter] = useState(LPU_COORDS);
  const [isLocating, setIsLocating] = useState(false);

  // Browser GPS Locate Function
  const handleLocate = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude.toFixed(6));
      setLng(longitude.toFixed(6));
      setMapCenter([latitude, longitude]);
      setIsLocating(false);
    }, (err) => {
      console.error(err);
      alert("Could not fetch location. Please ensure location services are enabled.");
      setIsLocating(false);
    }, { timeout: 10000 });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <FaSeedling className="text-emerald-600" /> Sensor Node Mapping
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Click on the map or enter coordinates to set the analysis location.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-slate-900 p-3 rounded-xl flex flex-col gap-1 focus-within:ring-2 focus-within:ring-emerald-500 border border-transparent transition-all">
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Latitude</label>
          <input 
            type="number" 
            value={lat} 
            onChange={(e) => {
              setLat(e.target.value);
              const newLat = parseFloat(e.target.value);
              if (!isNaN(newLat)) setMapCenter([newLat, mapCenter[1]]);
            }}
            className="bg-transparent border-none outline-none text-sm font-black text-slate-800 dark:text-slate-200 w-full"
          />
        </div>
        <div className="bg-blue-50 dark:bg-slate-900 p-3 rounded-xl flex flex-col gap-1 focus-within:ring-2 focus-within:ring-emerald-500 border border-transparent transition-all">
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Longitude</label>
          <input 
            type="number" 
            value={lng} 
            onChange={(e) => {
              setLng(e.target.value);
              const newLng = parseFloat(e.target.value);
              if (!isNaN(newLng)) setMapCenter([mapCenter[0], newLng]);
            }}
            className="bg-transparent border-none outline-none text-sm font-black text-slate-800 dark:text-slate-200 w-full"
          />
        </div>
      </div>

      <button
        onClick={handleLocate}
        disabled={isLocating}
        className={`w-full mb-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs uppercase flex items-center justify-center gap-2 transition-all active:scale-95 ${isLocating ? "opacity-75 cursor-wait" : "cursor-pointer"}`}
      >
        {isLocating ? <FaSpinner className="animate-spin" /> : <FaCrosshairs />}
        {isLocating ? "Locating..." : "Use My Location"}
      </button>

      {/* Interactive Map */}
      <div className="h-64 w-full rounded-xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700 z-0 relative">
        <MapContainer center={mapCenter} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ChangeView center={mapCenter} />
          <LocationMarker setLat={setLat} setLng={setLng} />
          <Marker position={[lat || LPU_COORDS[0], lng || LPU_COORDS[1]]} />
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMapping;

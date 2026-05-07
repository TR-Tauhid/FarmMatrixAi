import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { MapPin, Settings } from "lucide-react";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

const LocationMapping = () => {
  const [latitude, setLatitude] = useState("31.25391");
  const [longitude, setLongitude] = useState("75.69231");
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
          setError("Permission denied. Please enable location services.");
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLoading(false);
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-2 mb-6 text-emerald-600 font-bold">
        <MapPin size={20} />
        <span>Location Mapping</span>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleGetLocation}
          disabled={loading}
          className="flex-1 py-3 px-4 rounded-xl border-2 border-emerald-500 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold flex items-center justify-center gap-2"
        >
          <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
            <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
          </div>
          {loading ? 'Fetching...' : 'Detect Automatically'}
        </button>
        <button className="flex-1 py-3 px-4 rounded-xl bg-blue-50 dark:bg-slate-900 text-slate-500 dark:text-slate-300 font-semibold flex items-center justify-center gap-2">
          <Settings size={18} /> Manual Entry
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mb-4">{error}</p>}
      <div className="relative h-80 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center">
        <MapContainer center={currentPos} zoom={13} scrollWheelZoom={false} className="h-full w-full">
          <ChangeView center={currentPos} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={currentPos}>
            <Popup className="text-[10px] font-bold">COORDINATES: {latitude || "0"}, {longitude || "0"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMapping;
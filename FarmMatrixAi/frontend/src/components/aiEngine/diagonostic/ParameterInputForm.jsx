import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ParameterInputForm = () => {
  const [coords] = useState([4.5709, -74.2973]); // Demo coords from image

  const inputStyle = `w-full transition-all p-3 rounded-xl border bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 dark:bg-[#111a2e] dark:border-slate-800 dark:text-emerald-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20`;
  const labelStyle = `block text-[10px] font-black uppercase tracking-[0.1em] mb-1.5 text-slate-500 dark:text-slate-400`;

  return (
    <div className="flex flex-col gap-6">
      {/* Parameters Card */}
      <div className="p-6 bg-white dark:bg-[#0f172a]/80 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-emerald-500">📊</span>
          <h2 className="text-sm font-bold uppercase tracking-tight">Soil & Climate Matrix</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Nitrogen (N)', unit: 'mg/kg', val: '90' },
            { label: 'Phosphorus (P)', unit: 'mg/kg', val: '42' },
            { label: 'Potassium (K)', unit: 'mg/kg', val: '43' },
            { label: 'Soil pH', unit: '', val: '6.5' },
            { label: 'Temperature', unit: '°C', val: '20.8' },
            { label: 'Humidity', unit: '%', val: '82' }
          ].map((field) => (
            <div key={field.label} className="relative">
              <label className={labelStyle}>{field.label}</label>
              <div className="relative">
                <input type="text" defaultValue={field.val} className={inputStyle} />
                <span className="absolute right-3 top-3 text-[10px] text-slate-400">{field.unit}</span>
              </div>
            </div>
          ))}
          <div className="col-span-2">
            <label className={labelStyle}>Annual Rainfall</label>
            <div className="relative">
              <input type="text" defaultValue="202.9" className={inputStyle} />
              <span className="absolute right-3 top-3 text-[10px] text-slate-400">mm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="p-6 bg-white dark:bg-[#0f172a]/80 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">📍</span>
            <h2 className="text-sm font-bold uppercase tracking-tight">Precision Location</h2>
          </div>
          <button className="text-[10px] font-bold text-emerald-500 hover:underline">Edit Coordinates</button>
        </div>
        <div className="h-48 rounded-2xl overflow-hidden relative border border-slate-100 dark:border-slate-800">
          <MapContainer center={coords} zoom={12} className="h-full w-full dark:invert-[0.9] dark:hue-rotate-180 brightness-90">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={coords} />
          </MapContainer>
          <div className="absolute bottom-3 left-3 z-[1000] bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
            <p className="text-[8px] text-white/80 font-mono">Region: Central Highlands</p>
            <p className="text-[8px] text-white/60 font-mono italic">Alt: 1,450m | Lat: 4.5709° N</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParameterInputForm;
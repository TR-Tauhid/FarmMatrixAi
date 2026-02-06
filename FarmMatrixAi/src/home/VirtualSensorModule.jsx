import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
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

// --------------------------------------------------------
// --- MOCK DATA & CONFIG ---
// --------------------------------------------------------

// LPU Jalandhar Default Coordinates
const LPU_COORDS = [31.2559, 75.7027];
const DEFAULT_ZOOM = 14;

// Fix Default Leaflet Icon Issue (Required for Vite/Webpack)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Simulate API & AI Analysis
const getAndAnalyzeData = (lat, lng) => {
  // Simple logic: Recommend Rice if the coordinates fall roughly within Punjab/Haryana region
  const isRiceArea = lat > 30 && lat < 33 && lng > 75 && lng < 78;

  if (isRiceArea) {
    return {
      optimalCrop: "Rice",
      modelUsed: "Random Forest Classifier",
      metrics: {
        N_Ratio: 98,
        P_Ratio: 51,
        K_Ratio: 45,
        pH: 6.6,
        temperature: 27.2,
        humidity: 85,
      },
    };
  } else {
    return {
      optimalCrop: "Maize",
      modelUsed: "Random Forest Classifier",
      metrics: {
        N_Ratio: 125,
        P_Ratio: 58,
        K_Ratio: 33,
        pH: 7.3,
        temperature: 31.5,
        humidity: 65,
      },
    };
  }
};

// --- Framer Motion Variants ---
const headingVariant = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  viewport: { once: true },
};
const cardVariant = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.4 },
  },
  viewport: { once: true },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

// --------------------------------------------------------
// --- Map View Change Component ---
// --------------------------------------------------------

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

// --------------------------------------------------------
// --- Main Unified Component ---
// --------------------------------------------------------

const VirtualSensorModule = () => {
  const [latitude, setLatitude] = useState(LPU_COORDS[0].toFixed(6));
  const [longitude, setLongitude] = useState(LPU_COORDS[1].toFixed(6));
  const [mapCenter, setMapCenter] = useState(LPU_COORDS);
  const [userLocation, setUserLocation] = useState(LPU_COORDS);

  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [error, setError] = useState("");
  const [resultData, setResultData] = useState(null);

  const handleGetLocation = () => {
    setLoadingLocation(true);
    setError("");
    setResultData(null); // Reset results

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLng = position.coords.longitude;
          const newCoords = [newLat, newLng];

          setLatitude(newLat.toFixed(6));
          setLongitude(newLng.toFixed(6));
          setUserLocation(newCoords);
          setMapCenter(newCoords); // Moves the map
          setLoadingLocation(false);

          // Automatically trigger AI analysis after successful location fetch
          handleLocationSubmit(newLat, newLng);
        },
        (err) => {
          setLoadingLocation(false);
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError("Permission denied. Please enable location services.");
              break;
            case err.TIMEOUT:
              setError("Location request timed out.");
              break;
            default:
              setError("An unknown error occurred while fetching location.");
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLoadingLocation(false);
      setError("Geolocation is not supported by your browser.");
    }
  };

  const handleLocationSubmit = (lat, lng) => {
    setLoadingAI(true);

    // Simulate API calls and AI processing (1.5s delay)
    setTimeout(() => {
      const data = getAndAnalyzeData(lat, lng);
      setResultData(data);
      setLoadingAI(false);
    }, 1500);
  };

  // --- Render Functions ---

  const renderInputCard = () => (
    <motion.div
      {...cardVariant}
      className="mt-14 bg-green-50 p-8 rounded-xl shadow-xl border border-green-100 max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">
        Location Input
      </h3>

      {/* Lat/Lng Display (read only) */}
      <div className="flex flex-col space-y-4 mb-6">
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
            className="w-full p-3 border border-green-200 rounded-md text-black bg-white transition"
            value={latitude}
            readOnly
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
            className="w-full p-3 border border-green-200 rounded-md text-black bg-white transition"
            value={longitude}
            readOnly
          />
        </div>
      </div>

      {/* Get Location Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGetLocation}
        disabled={loadingLocation || loadingAI}
        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition disabled:bg-green-400"
      >
        {loadingLocation ? (
          <>
            {" "}
            <FaSyncAlt className="animate-spin" /> <span>Fetching GPS...</span>{" "}
          </>
        ) : (
          <>
            {" "}
            <FaMapMarkerAlt /> <span>Get My Current Location</span>{" "}
          </>
        )}
      </motion.button>

      {/* Status Messages */}
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
      {/* {!error && !loadingAI && !loadingLocation && (
        <div className="mt-4 p-3 bg-blue-100 text-blue-700 border border-blue-200 rounded-md text-center">
          Click "Get Your Location" to run the AI analysis.
        </div>
      )} */}
    </motion.div>
  );

  const renderResultCard = () => {
    const { optimalCrop, modelUsed, metrics } = resultData;
    const metricItems = [
      {
        label: "Nitrogen (N)",
        value: metrics.N_Ratio,
        unit: "mg/kg",
        icon: <FaFlask />,
      },
      {
        label: "Phosphorus (P)",
        value: metrics.P_Ratio,
        unit: "mg/kg",
        icon: <FaFlask />,
      },
      {
        label: "Potassium (K)",
        value: metrics.K_Ratio,
        unit: "mg/kg",
        icon: <FaFlask />,
      },
      { label: "Soil pH", value: metrics.pH, unit: "", icon: <FaChartLine /> },
      {
        label: "Temperature",
        value: metrics.temperature,
        unit: "°C",
        icon: <FaSun />,
      },
      {
        label: "Humidity",
        value: metrics.humidity,
        unit: "%",
        icon: <FaChartLine />,
      },
    ];

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="mt-14 max-w-7xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-green-700 text-center mb-8">
          AI Recommendation Result
        </h3>

        {/* Main Crop Result */}
        <motion.div
          {...cardVariant}
          className="bg-white p-8 rounded-xl shadow-2xl border-2 border-green-300 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <FaSeedling className="text-6xl text-green-600" />
            <h4 className="text-5xl font-extrabold text-green-800">
              {optimalCrop}
            </h4>
          </div>
          <p className="text-lg text-gray-600 mt-2">
            Recommended by: {modelUsed} model
          </p>
        </motion.div>

        {/* Detailed Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {metricItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={staggerItem}
              className="bg-white p-4 rounded-lg shadow-md border border-green-100 flex flex-col items-center text-center transition hover:bg-green-50"
            >
              <div className="text-3xl text-green-500 mb-2">{item.icon}</div>
              <p className="text-sm text-gray-500 uppercase font-semibold">
                {item.label}
              </p>
              <p className="text-3xl font-bold text-green-700 mt-1">
                {item.value}{" "}
                <span className="text-base font-normal ml-1">{item.unit}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setResultData(null);
              setUserLocation(LPU_COORDS);
              setMapCenter(LPU_COORDS);
              setLatitude(LPU_COORDS[0].toFixed(6));
              setLongitude(LPU_COORDS[1].toFixed(6));
            }}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Run New Analysis
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-6 bg-white" id="virtual-sensor">
      <div className="max-w-7xl mx-auto">
        {/* --- Module Header --- */}
        <motion.div {...headingVariant} className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-green-800 flex items-center justify-center space-x-3">
            <FaSeedling className="text-green-600" />
            <span>The Virtual Sensor</span>
          </h2>
          <div className="mt-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center flex-wrap gap-4 text-center"
            >
              {/* Step 1: Data Fusion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center p-4 bg-green-100 rounded-xl shadow-lg w-40 h-32 justify-center border-b-4 border-green-500"
              >
                <FaCloud className="text-3xl text-green-700 mb-1" />
                <p className="font-bold text-gray-800">Data Fusion</p>
                <p className="text-xs text-gray-600 mt-1">
                  (Soil Grids & Weather API)
                </p>
              </motion.div>

              {/* Arrow 1 */}
              <div className="text-4xl text-green-600 hidden md:block">
                &rarr;
              </div>

              {/* Step 2: AI Brain */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-2xl w-40 h-32 justify-center border-b-4 border-blue-500 transform hover:scale-105 transition duration-300"
              >
                <FaSearch className="text-3xl text-blue-700 mb-1" />
                <p className="font-bold text-gray-800">AI Brain</p>
                <p className="text-xs text-gray-600 mt-1">
                  (Random Forest Model)
                </p>
              </motion.div>

              {/* Arrow 2 */}
              <div className="text-4xl text-green-600 hidden md:block">
                &rarr;
              </div>

              {/* Step 3: Output */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center p-4 bg-green-200 rounded-xl shadow-lg w-40 h-32 justify-center border-b-4 border-green-700"
              >
                <FaSeedling className="text-3xl text-green-800 mb-1" />
                <p className="font-bold text-gray-800">Scientific</p>
                <p className="text-xs text-gray-600 mt-1">Recommendation</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Input Card & Loading --- */}
        {!resultData && (
          <>
            {loadingAI ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-green-50 rounded-xl shadow-xl border border-green-200 max-w-lg mx-auto"
              >
                <FaCloud className="text-6xl text-green-500 mx-auto animate-pulse" />
                <p className="mt-4 text-2xl font-semibold text-green-700">
                  Analyzing Data Fusion...
                </p>
                <p className="text-gray-500 mt-2">
                  Running Random Forest Model on real-time soil and weather
                  parameters.
                </p>
              </motion.div>
            ) : (
              renderInputCard()
            )}
          </>
        )}

        {/* --- Result Display --- */}
        {resultData && renderResultCard()}

        {/* --- Map Container --- */}
        <MapContainer
          id="find-me"
          className={`h-96 w-full mt-8 rounded-lg shadow-xl transition-opacity duration-700 ${
            resultData ? "opacity-50" : "opacity-100"
          }`}
          center={LPU_COORDS}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom={false}
        >
          {/* Custom component to move the map when coordinates change */}
          <ChangeView center={mapCenter} zoom={DEFAULT_ZOOM} />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marker for User Location or LPU Default */}
          <Marker position={userLocation}>
            <Popup>
              {userLocation[0] === LPU_COORDS[0]
                ? "Default Location: LPU Jalandhar"
                : `Current Location: ${latitude}, ${longitude}`}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default VirtualSensorModule;

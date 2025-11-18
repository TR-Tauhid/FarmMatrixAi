import { FiCalendar, FiTrendingUp, FiChevronRight } from "react-icons/fi";

const mockHistory = [
  {
    id: 1,
    date: "12 Jan 2025",
    soil: "pH 6.8, NPK: 30-22-15",
    weather: "Temp: 28°C, Humidity: 60%",
    recommended: "Wheat",
  },
  {
    id: 2,
    date: "03 Jan 2025",
    soil: "pH 7.1, NPK: 28-20-18",
    weather: "Temp: 24°C, Humidity: 72%",
    recommended: "Sugarcane",
  },
  {
    id: 3,
    date: "20 Dec 2024",
    soil: "pH 6.5, NPK: 25-18-14",
    weather: "Temp: 22°C, Humidity: 55%",
    recommended: "Mustard",
  },
];

const HistorySection = () => {
  return (
    <section className="py-16 px-6 w-full mx-auto shadow">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Recommendation History
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Review all your past AI-generated crop suggestions.
      </p>

      <div className="mt-10 space-y-6 relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 rounded-full hidden md:block"></div>

        {mockHistory.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center md:pl-20 hover:shadow-lg transition border border-gray-100"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-4 top-6 w-5 h-5 bg-green-600 rounded-full border-4 border-white shadow"></div>

            {/* Date */}
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <FiCalendar className="text-xl" />
              <span>{item.date}</span>
            </div>

            {/* Info */}
            <div className="mt-3 md:mt-0 md:ml-10 flex-1">
              <p className="text-gray-700"><strong>Soil:</strong> {item.soil}</p>
              <p className="text-gray-700 mt-1"><strong>Weather:</strong> {item.weather}</p>
              <p className="text-green-700 font-semibold mt-2">
                Recommended Crop: <span className="text-green-600">{item.recommended}</span>
              </p>
            </div>

            {/* View button */}
            <button className="mt-4 md:mt-0 flex items-center gap-2 text-green-600 hover:text-green-800 transition">
              <span>View Details</span>
              <FiChevronRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;

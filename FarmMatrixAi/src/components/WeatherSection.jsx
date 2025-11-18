const WeatherSection = () => {
  return (
    <section className="py-12 px-6 bg-blue-50 rounded-lg shadow ">
      <h3 className="text-2xl font-bold text-blue-700">Weather Insights</h3>
      <p className="text-gray-700 mt-2">Live temperature, humidity & rainfall data.</p>

      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Check Weather
      </button>
    </section>
  );
};

export default WeatherSection;

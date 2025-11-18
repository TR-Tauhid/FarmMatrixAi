const SoilSection = () => {
  return (
    <section className="py-12 px-6 bg-yellow-50 rounded-lg shadow ">
      <h3 className="text-2xl font-bold text-yellow-700">Soil Analysis</h3>
      <p className="text-gray-700 mt-2">Analyze NPK values, pH level & soil quality.</p>

      <button className="mt-4 px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
        Analyze Soil
      </button>
    </section>
  );
};

export default SoilSection;

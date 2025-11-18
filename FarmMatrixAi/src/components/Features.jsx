const features = [
  { title: "Crop Recommendation", desc: "Suggests the best crops for your land." },
  { title: "Weather Integration", desc: "Real-time climate & rainfall data." },
  { title: "Soil Condition Analysis", desc: "Analyze NPK, pH & soil type." },
  { title: "Crop Comparison", desc: "Compare crops before selecting." },
  { title: "Multilingual Support", desc: "Hindi, Punjabi, English & more." },
  { title: "History Tracking", desc: "Review past recommendations." },
];

const Features = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div key={index} className="p-6 shadow-md rounded-lg bg-green-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700">{f.title}</h3>
            <p className="text-gray-700 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

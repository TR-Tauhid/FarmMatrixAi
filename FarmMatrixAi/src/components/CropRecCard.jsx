const CropRecCard = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-xl font-bold text-green-700">AI Crop Recommendation</h3>
      <p className="text-gray-700 mt-2">Get the best crop suggestions based on soil & weather.</p>

      <button className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Try Recommendation
      </button>
    </div>
  );
};

export default CropRecCard;

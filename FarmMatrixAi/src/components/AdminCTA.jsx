const AdminCTA = () => {
  return (
    <section className="py-12 px-6 bg-red-50 max-w-4xl mx-auto rounded-lg shadow mt-10">
      <h3 className="text-2xl font-bold text-red-700">Admin Dashboard</h3>
      <p className="text-gray-700 mt-2">Manage crops database & AI model updates.</p>

      <button className="mt-4 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Go to Admin Panel
      </button>
    </section>
  );
};

export default AdminCTA;

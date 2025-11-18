const Hero = () => {
  return (
    <section className="bg-green-100 py-20 px-6 md:px-16 my-5 rounded-2xl">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Farm Matrix AI
        </h1>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Smart farming assistant powered by AI — helping farmers make
          data-driven decisions.
        </p>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

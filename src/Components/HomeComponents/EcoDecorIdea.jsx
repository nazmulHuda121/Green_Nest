const EcoDecorIdea = ({ decorIdeas }) => {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700">
          Sustainable Home Decor
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Eco-friendly ideas to refresh your living space
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 lg:max-w-7xl mx-auto">
        {decorIdeas.map((idea) => (
          <div
            key={idea.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md border border-white/40 transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={idea.img}
                alt={idea.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-green-700 transition">
                {idea.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcoDecorIdea;

const PlantCareTips = ({ tips }) => {
  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-green-50 to-white">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-green-800 tracking-wide">
          Essential Plant Care Tips
        </h2>
        <p className="text-gray-600 mt-2">
          Help your plants thrive with simple and effective care guidance.
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid md:grid-cols-3 gap-10 lg:max-w-7xl mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-7 rounded-2xl shadow-lg bg-white border border-green-100 
                       hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              {tip.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;

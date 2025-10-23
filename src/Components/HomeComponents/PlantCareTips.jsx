import { GiMapleLeaf } from 'react-icons/gi';

const PlantCareTips = ({ tips }) => {
  return (
    <>
      <section className="py-16 px-4 md:px-12 ">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-10 flex items-center justify-center">
          <GiMapleLeaf className="inline mr-2 text-purple-600 text-4xl" /> Plant
          Care Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/40"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PlantCareTips;

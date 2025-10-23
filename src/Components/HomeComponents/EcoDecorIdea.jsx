import { GiFlowerPot } from 'react-icons/gi';

const EcoDecorIdea = ({ decorIdeas }) => {
  return (
    <>
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-10 flex items-center justify-center">
          <GiFlowerPot className="inline mr-2 text-purple-600 text-4xl" /> Eco
          Decor Ideas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {decorIdeas.map((idea) => (
            <div
              key={idea.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md border border-white/40"
            >
              <img
                src={idea.img}
                alt={idea.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {idea.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EcoDecorIdea;

import { useLoaderData } from 'react-router';
import IndoorPlant from '../Components/HomeComponents/IndoorPlant';

const Plants = () => {
  const plants = useLoaderData();

  return (
    <div>
      <section className="py-16 px-4 md:px-12">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-3">
            All Indoor Plants
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our wide variety of indoor plants to purify your home,
            brighten your space, and bring nature closer to you. Find the
            perfect plant for your lifestyle and skill level.
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <IndoorPlant plant={plant} key={plant.plantId}></IndoorPlant>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Plants;

import { GiPlantsAndAnimals, GiPlantSeed } from 'react-icons/gi';
import { useLoaderData } from 'react-router';
import IndoorPlant from '../Components/HomeComponents/IndoorPlant';

const Plants = () => {
  const plants = useLoaderData();
  return (
    <div>
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold flex items-center justify-center text-green-700 mb-10">
          <GiPlantsAndAnimals className="inline mr-2 text-purple-600 text-4xl" />
          All Indoor Plants
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <IndoorPlant plant={plant} key={plant.plantId}></IndoorPlant>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Plants;

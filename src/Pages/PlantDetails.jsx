import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';

const PlantDetails = () => {
  const { id } = useParams();
  const plants = useLoaderData();
  console.log(typeof id, plants);

  const filteredPlant = plants.find((plant) => plant.plantId === Number(id));
  console.log(filteredPlant);
  const {
    image,
    plantName,
    description,
    price,
    rating,
    availableStock,
    careLevel,
    providerName,
  } = filteredPlant;
  console.log(plantName);

  //   if (loading)
  //     return (
  //       <p className="text-center py-20 text-gray-400">Loading details...</p>
  //     );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 text-white flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <img
          src={image}
          alt={plantName}
          className="w-full h-100 object-cover"
        />

        <div className="p-6 space-y-3 text-center">
          <h2 className="text-3xl font-bold text-green-400">{plantName}</h2>
          <p className="text-gray-300">{description}</p>

          <div className="flex justify-center gap-6 mt-3">
            <span className="bg-green-700 px-4 py-1 rounded-lg">💲{price}</span>
            <span>⭐ {rating}</span>
            <span>🪴 In Stock: {availableStock}</span>
          </div>

          <p className="text-sm text-gray-400 mt-2">Care Level: {careLevel}</p>
          <p className="text-sm text-gray-400">Provided by: {providerName}</p>
        </div>
      </div>

      {/* Book Consultation Form */}
      <div className="mt-10 w-full max-w-md bg-gray-800/60 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-green-400 mb-4 text-center">
          Book Consultation
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value="name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-green-700 focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-green-700 focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition font-semibold py-2 rounded-lg shadow-md"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;

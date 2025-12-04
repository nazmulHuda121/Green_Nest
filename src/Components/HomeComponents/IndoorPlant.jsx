import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const IndoorPlant = ({ plant }) => {
  const { image, plantName, price, rating, plantId } = plant;

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-white/20 bg-white/50 backdrop-blur-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      {/* Plant Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
            {plantName}
          </h3>
          <p className="text-amber-600 font-bold text-xl mt-1">{price}$</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="flex items-center text-amber-500 gap-1">
            <FaStar /> {rating.toFixed(1)}
          </p>
          <Link to={`/plant-details/${plantId}`}>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndoorPlant;

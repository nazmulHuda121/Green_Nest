import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const IndoorPlant = ({ plant }) => {
  const { image, name, plantName, price, rating, plantId } = plant;
  return (
    <div className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-lg border border-white/40 p-6 hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-xl w-full h-56 object-cover"
      />
      <div className="flex items-center justify-between my-4">
        <h3 className="text-xl font-semibold text-gray-800">{plantName}</h3>
        <p className="font-semibold text-2xl text-amber-600">{price}$</p>
      </div>
      <p className="text-amber-500 flex items-center gap-1">
        {' '}
        Ratings:
        <FaStar />
        {rating}
      </p>
      <Link to={`/plant-details/${plantId}`}>
        <p className="mt-4 text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer">
          View Details
        </p>
      </Link>
    </div>
  );
};

export default IndoorPlant;

import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { useContext, useState } from 'react';
import {
  FaStar,
  FaStore,
  FaLeaf,
  FaWater,
  FaRuler,
  FaGlobe,
  FaHeart,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { toast } from 'react-toastify';

const PlantDetails = () => {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const plants = useLoaderData();
  const navigate = useNavigate();

  const plant = plants.find((p) => p.plantId === Number(id));
  if (!plant)
    return <p className="text-center mt-20 text-red-500">Plant not found!</p>;

  if (loading) return <Loading />;

  const {
    image,
    plantName,
    description,
    price,
    rating,
    availableStock,
    careLevel,
    providerName,
    lightRequirement,
    waterFrequency,
    size,
    origin,
    benefits,
    category,
  } = plant;

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [activeTab, setActiveTab] = useState('Description');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Consultation booked successfully!');
    setFormData({ name: '', email: '' });
    setTimeout(() => navigate('/plants'), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-12 space-y-12 bg-green-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start max-w-6xl w-full gap-8">
        {/* Image */}
        <motion.img
          src={image}
          alt={plantName}
          className="w-full md:w-1/2 h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <h1 className="text-4xl font-bold text-green-700">{plantName}</h1>
          <p className="text-2xl font-semibold text-green-800">${price}</p>
          <p className="text-gray-600 mt-2">Provider: {providerName}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <DetailCard label="Category" value={category} icon={<FaLeaf />} />
            <DetailCard
              label="Light"
              value={lightRequirement}
              icon={<FaGlobe />}
            />
            <DetailCard
              label="Water"
              value={waterFrequency}
              icon={<FaWater />}
            />
            <DetailCard label="Size" value={size} icon={<FaRuler />} />
            <DetailCard label="Care" value={careLevel} icon={<FaHeart />} />
            <DetailCard
              label="Stock"
              value={availableStock}
              icon={<FaStore />}
            />
            <DetailCard label="Rating" value={rating} icon={<FaStar />} />
          </div>
        </motion.div>
      </div>

      {/* Tabs for Description & Benefits */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-6">
        <div className="flex border-b border-green-200">
          {['Description', 'Benefits'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 font-semibold ${
                activeTab === tab
                  ? 'border-b-4 border-green-600 text-green-700'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 text-gray-700 text-lg space-y-3">
          {activeTab === 'Description' ? (
            <p>{description}</p>
          ) : (
            <p>{benefits}</p>
          )}
        </div>
      </div>

      {/* Consultation Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md"
      >
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Book a Consultation
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-700"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-700"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition transform hover:scale-105"
          >
            Book Now
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const DetailCard = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 p-3 rounded-2xl bg-green-50/50 backdrop-blur-sm shadow-sm">
    <span className="text-green-600 text-xl">{icon}</span>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default PlantDetails;

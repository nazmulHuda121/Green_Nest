import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  GiFarmer,
  GiFlowerPot,
  GiMapleLeaf,
  GiPlantSeed,
} from 'react-icons/gi';

const Home = () => {
  // fake JSON data
  const topPlants = [
    {
      id: 1,
      name: 'Aloe Vera',
      price: '$25',
      rating: '4.8',
      img: '/plants/aloe.jpg',
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: '$30',
      rating: '4.6',
      img: '/plants/snake.jpg',
    },
    {
      id: 3,
      name: 'Peace Lily',
      price: '$22',
      rating: '4.9',
      img: '/plants/lily.jpg',
    },
  ];

  const tips = [
    {
      id: 1,
      title: 'Water Regularly',
      desc: 'Keep soil moist but not soggy. Water every 2-3 days.',
    },
    {
      id: 2,
      title: 'Sunlight Needs',
      desc: 'Most indoor plants love bright, indirect sunlight.',
    },
    {
      id: 3,
      title: 'Fertilize Monthly',
      desc: 'Use organic fertilizer once a month for growth.',
    },
  ];

  const experts = [
    {
      id: 1,
      name: 'Emma Green',
      role: 'Indoor Plant Specialist',
      img: '/experts/expert1.jpg',
    },
    {
      id: 2,
      name: 'Noah Leaf',
      role: 'Eco Decor Designer',
      img: '/experts/expert2.jpg',
    },
    {
      id: 3,
      name: 'Olivia Bloom',
      role: 'Plant Therapist',
      img: '/experts/expert3.jpg',
    },
  ];

  const decorIdeas = [
    { id: 1, title: 'Minimalist Green Corner', img: '/decor/decor1.jpg' },
    { id: 2, title: 'Hanging Plant Heaven', img: '/decor/decor2.jpg' },
    { id: 3, title: 'Desk Garden Setup', img: '/decor/decor3.jpg' },
  ];

  return (
    <div className="bg-gradient-to-r from-green-200 via-gray-300 to-purple-300 text-gray-700">
      {/* HERO SECTION */}
      <section className="relative w-full">
        <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
          <SwiperSlide>
            <motion.div
              className="h-[500px] flex flex-col justify-center items-center text-center bg-[url('/hero/hero1.jpg')] bg-cover bg-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-purple-700 text-4xl md:text-6xl font-bold drop-shadow-lg">
                Grow Fresh. Live Green.
              </h1>
              <p className="text-green-600 mt-4 text-lg md:text-xl">
                Bringing nature to your home with love 🌿
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="h-[500px] flex flex-col justify-center items-center text-center bg-[url('/hero/hero2.jpg')] bg-cover bg-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-purple-700 text-4xl md:text-6xl font-bold drop-shadow-lg">
                Your Space. Your Green Style.
              </h1>
              <p className="text-green-600 mt-4 text-lg md:text-xl">
                Discover beauty in every leaf 🍃
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* TOP RATED INDOOR PLANTS */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold flex items-center justify-center text-green-700 mb-10">
          <GiPlantSeed className="inline mr-2 text-purple-600 text-4xl" /> Top
          Rated Indoor Plants
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topPlants.map((plant) => (
            <div
              key={plant.id}
              className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-lg border border-white/40 p-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={plant.img}
                alt={plant.name}
                className="rounded-xl w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {plant.name}
              </h3>
              <p className="text-green-700 font-semibold">{plant.price}</p>
              <p className="text-yellow-500">⭐ {plant.rating}</p>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PLANT CARE TIPS */}
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

      {/* MEET OUR GREEN EXPERTS */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10 flex items-center justify-center">
          <GiFarmer className="inline mr-2 text-purple-600 text-4xl" /> Meet Our
          Green Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((ex) => (
            <div
              key={ex.id}
              className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 text-center"
            >
              <img
                src={ex.img}
                alt={ex.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {ex.name}
              </h3>
              <p className="text-green-600">{ex.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION: ECO DECOR IDEAS */}
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
    </div>
  );
};

export default Home;

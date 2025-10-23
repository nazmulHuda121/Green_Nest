import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  GiFarmer,
  GiFlowerPot,
  GiMapleLeaf,
  GiPlantSeed,
} from 'react-icons/gi';
import { useLoaderData } from 'react-router';
import IndoorPlant from '../Components/HomeComponents/IndoorPlant';
import ExpartTeam from '../Components/HomeComponents/ExpartTeam';
import PlantCareTips from '../Components/HomeComponents/PlantCareTips';

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
    img: 'https://media.istockphoto.com/id/1181196053/photo/smiling-indian-young-woman-sales-professional-arms-crossed-looking-at-camera-isolated-on-grey.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hn_k8Pa5Zh8MU1oVw-iOZUpyVhyCab5uGEwLpADRZP4=',
  },

  {
    id: 2,
    name: 'Olivia Bloom',
    role: 'Plant Therapist',
    img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 3,
    name: 'Noah Leaf',
    role: 'Eco Decor Designer',
    img: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
];

const decorIdeas = [
  {
    id: 1,
    title: 'Minimalist Green Corner',
    img: 'https://images.unsplash.com/photo-1632120953531-1654025d5881?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRlY29yJTIwaWRlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 2,
    title: 'Hanging Plant Heaven',
    img: 'https://images.unsplash.com/photo-1665954551919-604ea46f2958?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxkZWNvciUyMGlkZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
  {
    id: 3,
    title: 'Desk Garden Setup',
    img: 'https://images.unsplash.com/photo-1760120482099-3fd0983b1b60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxkZWNvciUyMGlkZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
  },
];

const Home = () => {
  const plants = useLoaderData();
  console.log(plants);
  const topRated = plants.filter((plant) => plant.rating >= 4.7);

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
          {topRated.map((plant) => (
            <IndoorPlant plant={plant} key={plant.plantId}></IndoorPlant>
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
            <PlantCareTips tip={tip} key={tip.id} />
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
          {experts.map((expart) => (
            <ExpartTeam expart={expart} key={expart.id} />
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

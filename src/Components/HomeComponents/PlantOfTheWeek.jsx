import { motion } from 'framer-motion';
import { FaRegStar } from 'react-icons/fa';
import { GiFallingLeaf } from 'react-icons/gi';

const PlantOfTheWeek = () => {
  const plant = {
    name: 'Golden Pothos',
    image:
      'https://images.unsplash.com/photo-1647299852598-38be6199b3be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdvbGRlbiUyMFBvdGhvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
    desc: 'Known as the ‘Money Plant’, Golden Pothos purifies indoor air and adds a vibrant green touch to your home. It’s easy to grow and loves indirect sunlight.',
    price: '22',
    rating: '4.9',
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-950 via-black to-green-950 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-200 flex justify-center items-center gap-2 mb-6">
          <GiFallingLeaf className="text-green-500 text-4xl" />
          Plant of the Week
        </h2>

        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-md"
          />

          <div className="text-left md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-300 mb-2">
              {plant.name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{plant.desc}</p>

            <div className="flex gap-6 text-green-400 font-medium">
              <span>${plant.price}</span>
              <span className="flex items-center gap-1">
                <FaRegStar className="text-amber-400" />
                {plant.rating}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlantOfTheWeek;

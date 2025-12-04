// components/CTA.js
import { motion } from 'framer-motion';

const CTA = ({
  title = 'Join Our Green Family',
  description = 'Be part of our journey to bring nature into every home. Discover plants, tips, and eco-friendly ideas for a healthier indoor environment.',
  buttonText = 'Explore Now',
  buttonAction = () => {},
}) => {
  return (
    <motion.section
      className="py-16 px-6 md:px-12 my-12 text-center bg-green-100 rounded-3xl shadow-inner max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        {title}
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">{description}</p>
      <button
        onClick={buttonAction}
        className="bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition transform hover:scale-105"
      >
        {buttonText}
      </button>
    </motion.section>
  );
};

export default CTA;

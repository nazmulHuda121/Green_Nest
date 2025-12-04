// pages/NotFound.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Number */}
        <h1 className="text-7xl md:text-9xl font-bold text-gray-800">404</h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Line divider */}
        <div className="w-24 h-1 bg-gray-400 mx-auto my-6 rounded"></div>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          It might have been moved or deleted. Please check the URL or return to
          the homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-black transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

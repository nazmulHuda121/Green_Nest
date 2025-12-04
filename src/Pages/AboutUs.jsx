import { FaLeaf, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-gray-100 to-purple-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-green-50 py-24 px-6 md:px-12 text-center rounded-b-3xl shadow-lg">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-green-700 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are passionate about bringing nature closer to your home. Our team
          of experts carefully selects each plant to improve your indoor
          environment and add a touch of green to your life.
        </motion.p>
      </section>

      {/* OUR MISSION */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaLeaf className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To create healthier and happier indoor spaces by providing
            high-quality plants, care tips, and eco-friendly solutions for every
            home.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">Our Team</h3>
          <p className="text-gray-600">
            A group of plant enthusiasts, designers, and eco-conscious
            professionals dedicated to making your home greener and healthier.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaHandsHelping className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To inspire people to embrace nature indoors, cultivate green habits,
            and create eco-friendly spaces for future generations.
          </p>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alice Green',
              role: 'Plant Specialist',
              img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
            },
            {
              name: 'John Leaf',
              role: 'Interior Designer',
              img: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
            },
            {
              name: 'Emma Flora',
              role: 'Horticulturist',
              img: 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 md:px-12 text-center bg-green-100 rounded-3xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Join Our Green Family
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Be a part of our journey to bring nature into every home. Discover
          plants, tips, and eco-friendly ideas for a healthier indoor
          environment.
        </p>
        <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition transform hover:scale-105">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';

const HeroSection = () => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;

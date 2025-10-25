import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { GiChestnutLeaf, GiMonsteraLeaf } from 'react-icons/gi';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: 'Grow Fresh. Live Green.',
      subtitle: 'Bringing nature to your home with love',
      icon: <GiMonsteraLeaf />,
    },
    {
      id: 2,
      title: 'Your Space. Your Green Style.',
      subtitle: 'Discover beauty in every leaf',
      icon: <GiChestnutLeaf />,
    },
    {
      id: 3,
      title: 'Care for Nature, Care for Life.',
      subtitle: 'Let green inspire your soul',
      icon: <GiMonsteraLeaf />,
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className="h-[500px] flex flex-col justify-center items-center text-center bg-[url('/hero/hero1.jpg')] bg-cover bg-center text-white overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-purple-700 text-4xl md:text-6xl font-bold drop-shadow-lg">
                Grow Fresh. Live Green.
              </h1>
              <p className="text-green-600 mt-4 text-lg md:text-xl flex items-center gap-1">
                Bringing nature to your home with love <GiMonsteraLeaf />
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;

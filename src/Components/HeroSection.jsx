import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { GiChestnutLeaf, GiMonsteraLeaf } from 'react-icons/gi';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: 'Grow Fresh. Live Green.',
      desc: 'Bringing nature to your home with love',
      img: 'https://plus.unsplash.com/premium_photo-1669865741988-e7e8f9505076?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHx0cmVlfGVufDB8fDB8fHww',
      icon: <GiMonsteraLeaf className="inline-block ml-2" />,
      btn: 'Shop Now',
    },
    {
      id: 2,
      title: 'Your Space. Your Green Style.',
      desc: 'Discover beauty in every leaf',
      img: 'https://images.unsplash.com/photo-1510325805092-2951ab330b7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHx0cmVlfGVufDB8fDB8fHww',
      icon: <GiChestnutLeaf className="inline-block ml-2" />,
      btn: 'Explore Plants',
    },
    {
      id: 3,
      title: 'Care for Nature, Care for Life.',
      desc: 'Let green inspire your soul',
      img: 'https://images.unsplash.com/photo-1759496607068-f2892afdaf23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHx0cmVlJTIwcGxhbnRpbmd8ZW58MHx8MHx8fDA%3D',
      icon: <GiMonsteraLeaf className="inline-block ml-2" />,
      btn: 'Get Started',
    },
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-20 text-white max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-5xl font-extrabold leading-tight mb-2"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base md:text-lg text-gray-200 mb-3 flex items-center"
                >
                  {slide.desc} {slide.icon}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md w-fit"
                >
                  {slide.btn}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

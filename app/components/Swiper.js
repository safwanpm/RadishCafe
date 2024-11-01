"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const slides = [
  { id: 1, name: 'Pizza', price: '$20', category: 'Dishes', img: '/images/f6.png' },
  { id: 2, name: 'Burger', price: '$15', category: 'Dishes', img: '/images/f2.png' },
  { id: 3, name: 'Pasta', price: '$17', category: 'Dishes', img: '/images/f9.png' },
  { id: 4, name: 'Fried Chicken', price: '$12', category: 'Dishes', img: '/images/fried.png' },
  { id: 5, name: 'Crispy Fries', price: '$8', category: 'Dishes', img: '/images/f5.png' },
  { id: 6, name: 'Steak', price: '$8', category: 'Dishes', img: '/images/steak.png' },
  { id: 7, name: 'Healthy Salads', price: '$8', category: 'Dishes', img: '/images/salad.png' },
  { id: 8, name: 'Momos', price: '$8', category: 'Dishes', img: '/images/momo.png' },
];

export default function SwiperComponent() {
  return (
    <section className="relative px-4 py-16 lg:py-32 bg-blue text-center h-full md:h-screen">
      <h2 className="text-2xl md:text-4xl font-bold mb-6  text-black inline-block pb-2" data-aos="fade-down">
        Our Popular <span className="text-white ">Dishes</span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
      </h2>

      {/* <img
        src="/images/left 2.png"
        alt="Decorative Image Left"
        className="absolute top-0 left-4 lg:left-16 w-24 lg:w-48"
      />
      <img
        src="/images/right 2.png"
        alt="Decorative Image Right"
        className="hidden lg:block absolute top-0 right-4 lg:right-10 w-28 lg:w-64"
      /> */}

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 4, spaceBetween: 50 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
         <div className='bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl text-center px-4 my-8 mt-4 md:mt-20'>
              <div className="flex flex-col items-center justify-center py-4 lg:py-12">
                <img src={slide.img} alt={slide.alt} className="swiper-img rounded-lg h-20 md:h-44 w-28 md:w-44" loading="lazy" />
                <h3 className="mt-4 text-xs md:text-xl font-bold text-white">{slide.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

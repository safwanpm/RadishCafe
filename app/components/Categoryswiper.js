"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const slides = [
  { id: 9, name: 'Buble Tea', price: '$8', category: 'Bevarges', img: '/images/buble.png' },
  { id: 10, name: 'Shake', price: '$8', category: 'Bevarges', img: '/images/shake.png' },
  { id: 11, name: 'Ice Tea', price: '$8', category: 'Bevarges', img: '/images/ice.png' },
  { id: 12, name: 'Mocktails', price: '$8', category: 'Bevarges', img: '/images/mocktails.png' },
  { id: 13, name: 'Juices', price: '$8', category: 'Bevarges', img: '/images/juice.png' },
  { id: 14, name: 'Healthy Drinks', price: '$8', category: 'Bevarges', img: '/images/healthy.png' },
];

export default function Categoryswiper() {
  return (
    <section>
      <div className="relative text-center px-4 md:px-20 py-16 lg:py-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black inline-block pb-2" data-aos="fade-down">
          Discover Our <span className="text-blue">Beverages</span>
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
          grabCursor
          loop
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl text-start px-4 my-8">
                <div className="flex flex-col items-center justify-center py-4 lg:py-12">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="swiper-img rounded-lg max-w-[400px] max-h-[250px] w-full sm:max-w-[300px] md:max-w-[250px] mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-center mt-4 text-xs md:text-xl font-bold text-blue">{slide.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

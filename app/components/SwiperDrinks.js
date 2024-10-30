'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const slides = [
    { id: 9, name: 'Buble Tea', price: '$8', category: 'Bevarges', img: '/images/buble.png' },
    { id: 10, name: 'Shake', price: '$8', category: 'Bevarges', img: '/images/shake.png' },
    { id: 11, name: 'Ice Tea', price: '$8', category: 'Bevarges', img: '/images/ice.png' },
    { id: 12, name: 'Mocktails', price: '$8', category: 'Bevarges', img: '/images/mocktails.png' },
    { id: 13, name: 'Juices', price: '$8', category: 'Bevarges', img: '/images/juice.png' },
    { id: 14, name: 'Healthy Drinks', price: '$8', category: 'Bevarges', img: '/images/healthy.png' },
];
export default function SwiperDrinks() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
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
                        <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl text-center px-4 my-8">
                            <div className="flex flex-col items-center justify-center py-4 lg:py-12">
                                <img src={slide.img} alt={slide.alt} className="swiper-img rounded-lg h-20 md:h-44 w-28 md:w-44" loading="lazy" />
                                <h3 className="mt-4 text-xs md:text-xl font-bold text-white">{slide.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

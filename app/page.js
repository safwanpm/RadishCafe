'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Swipercomponent from "./components/Swiper";
import Categoryswiper from "./components/Categoryswiper";
import TestimonialSection from "./components/Testimonial";
import SwiperDrinks from "./components/SwiperDrinks";


export default function Home() {

  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled beyond 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the animation duration
      // once: true, // Ensure animation happens only once
    });
  }, []);

  return (
    <>
      <div className="relative">
        <Navbar />
        {/* Hero Section */}


        <div className=" py-4 lg:py-12  px-4 md:px-8 bg-blue text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            {/* <img
              src="/images/left 1.png"
              alt="Spoon"
              className="absolute top-16 lg:top-18 left-0 w-24 h-auto lg:w-48 lg:h-auto"
              data-aos="fade-right"
            />
            <img
              src="/images/right 1.png"
              alt="Tomato"
              className="absolute top-24 right-0 w-24 h-auto lg:w-48 lg:h-auto"
              data-aos="fade-left"
            /> */}
            {/* Text Content */}
            <div className="lg:w-1/2 ms-12 lg:ms-16" data-aos="fade-right" data-aos-delay="200">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Where Every <br /> Meal is an Experience
              </h1>
              <p
                className="text-white text-lg md:text-xl mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                "Bringing you the finest flavors, crafted from the world’s best ingredients!"
              </p>
              {/* <div className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
                <a
                  href="tel:+971526346199"
                  className="bg-blue text-white text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-16 rounded-full hover:bg-background hover:text-textcolor border-2 hover:border-textcolor transition"
                >
                  Explore Now
                </a>
              </div> */}
            </div>
            {/* Image section */}
            <div
              className="relative w-full lg:w-1/2  lg:mt-0 flex justify-center"
              
              data-aos-delay="200"
            >
              {/* Gray Circle Background */}
              {/* <div data-aos="zoom-out" className="absolute w-48 h-48 lg:w-80 lg:h-80 bg-green-100 rounded-full mt-10 lg:mt-28"></div> */}

              {/* Image */}
              <img src="/images/friedbg.png" alt="Top Products" data-aos="slide-up"className="relative lg:w-5/5 h-auto" />
            </div>

          </div>
        </div>



        {/* swiper */}

        <secction>
          <Swipercomponent />
          {/* <SwiperDrinks/> */}
        </secction>




        {/*welcome */}






        <div className="relative text-blue py-16 px-6 md:px-16 lg:px-32 text-center md:text-left" id="about">
          {/* Decorative Image */}
          {/* <img
            src="/images/right3.png"
            alt="Decorative Image Right"
            className="absolute top-0 right-10 w-24 lg:w-64"
          /> */}

          <div className="flex flex-col md:flex-row items-center">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 lg:pr-10" data-aos="zoom-in" data-aos-duration="500">
              <img
                src="/images/gridimage2.png"
                alt="image"
                className="w-full md:w-4/5 rounded-lg"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-full h-full md:w-1/2 lg:pr-20 text-black" data-aos="fade-up">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black inline-block pb-2 relative">
                Welcome to <span className="text-blue">Radish</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
              </h2>

              <p className="text-lg font-thin  mb-4" data-aos="fade-up" data-aos-delay="300">
                At Radish, we take pride in serving an extensive menu that caters to diverse tastes. From freshly brewed coffee to gourmet meals, our offerings include a wide array of delicacies made from high-quality ingredients.
              </p>

              <p className="text-lg mb-6 font-thin" data-aos="fade-up" data-aos-delay="300">
                Whether you're looking for a quick bite or a relaxing meal with friends, Radish Resto Cafe is your one-stop place for great food, warm hospitality, and a cozy ambiance.
              </p>

              <a href="/about" data-aos="fade-up" data-aos-delay="400">
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="relative  rounded-full bg-blue isolation-auto z-10 border-2 border-gray-50
                                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                                          before:-right-full before:hover:right-0 before:rounded-full before:bg-orange-500 before:-z-10
                                           before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                                            inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white
                                              shadow-sm gap-x-2 hover:bg-gray-50
                                              disabled:opacity-50 disabled:pointer-events-none"
                >
                  Read more
                </button>
              </a>
            </div>
          </div>
        </div>




        {/* category swiper */}

        <Categoryswiper />

        <TestimonialSection />

        {/* About Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 lg:py-16 bg  shadow-lg">
          {/* Decorative Images */}
          {/* <img
            src="/images/left5.png"
            alt="Decorative Image Left"
            className="absolute top-10 left-0 w-24 lg:w-56"
          />
          <img
            src="/images/right4.png"
            alt="Decorative Image Right"
            className="absolute top-0 right-10 w-28 lg:w-64"
          /> */}

          {/* Heading */}
          <h2 className="relative text-4xl font-bold mb-6 text-blue inline-block pb-2" data-aos="fade-down">
            About Us
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
          </h2>

          {/* Image Section */}
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="300">
            <img src="./images/radishhome.png" alt="Food Illustration" className="w-full max-w-md rounded-full" />
          </div>

          {/* Description Text */}
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <p className="text-black mb-6">
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one
              of the more obscure Latin words.
            </p>
          </div>

          {/* Action Button */}
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative  rounded-full bg-blue isolation-auto z-10 border-2 border-gray-50
                                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                                          before:-right-full before:hover:right-0 before:rounded-full before:bg-orange-500 before:-z-10
                                           before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                                            inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white
                                              shadow-sm gap-x-2 hover:bg-gray-50
                                              disabled:opacity-50 disabled:pointer-events-none"
          >
            →
          </button>
        </section>

      </div>


      {/* top arrow button */}


      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-10 rounded-full bg-blue hover:bg-orangecolor border-2 border-gray-50 shadow-lg 
      inline-flex items-center justify-center w-12 h-12 text-white text-2xl font-bold transition-transform duration-300
      transform hover:scale-110 hover:shadow-2xl hover:text-white"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>





      <Footer />
    </>
  );
}

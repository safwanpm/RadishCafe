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
import Sample from "./components/Sample";


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
      <div className="relative overflow-hidden">
        <Navbar />
        {/* Hero Section */}


        <div>
          {/* Hero Section */}
          <div className="py-4 lg:py-6 px-4 md:px-8 bg-blue text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
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
              </div>

              {/* Image Section */}
              <div
                className="relative w-full lg:w-1/2 lg:mt-0 flex justify-center"
                data-aos-delay="200"
              >
                <img src="/images/pizza-heo.png" alt="Top Products" data-aos="slide-up" className="  relative w-3/4 md:w-4/4 h-auto" />
              </div>
            </div>
          </div>

          {/* Featured Dishes Section */}
          <div className="hidden md:block bg-blue text-white px-4 md:px-8 -mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Dish Card 1 */}
                <div
                  data-aos="fade-right"
                  className="text-white p-4 rounded-lg text-center bg-opacity-30 backdrop-blur-lg transition-transform transform hover:scale-105 hover:bg-opacity-50"
                >
                  <img
                    src="/images/burgerbg.png"
                    alt="Dish 1"
                    className="rounded-full w-24 h-24 mx-auto transition-transform transform hover:scale-110"
                  />
                  <p className="mt-2 text-lg font-semibold hover:text-yellow-300">Spicy Burger</p>
                </div>

                {/* Dish Card 2 */}
                <div
                  data-aos="fade-up"
                  className="text-white p-4 rounded-lg text-center bg-opacity-5 transition-transform transform hover:scale-105 hover:bg-opacity-50"
                >
                  <img
                    src="/images/pizza-hero.png"
                    alt="Dish 2"
                    className="rounded-full w-24 h-24 mx-auto transition-transform transform hover:scale-110"
                  />
                  <p className="mt-2 text-lg font-semibold hover:text-yellow-300">Italian Pizza</p>
                </div>

                {/* Dish Card 3 */}
                <div
                  data-aos="fade-left"
                  className="text-white p-4 rounded-lg text-center transition-transform transform hover:scale-200 hover:bg-opacity-50"
                >
                  <img
                    src="/images/steak.png"
                    alt="Dish 3"
                    className="rounded-full w-24 h-24 mx-auto transition-transform transform hover:scale-110"
                  />
                  <p className="mt-2 text-lg font-semibold hover:text-yellow-300">Turkish Steak</p>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* swiper */}

        <secction>
          <Swipercomponent />
          {/* <SwiperDrinks/> */}
        </secction>



        {/*welcome */}






        <div className=" relative text-blue py-24 px-6 md:px-16 lg:px-32 text-center md:text-left" id="about">
          {/* Decorative Image */}
          {/* <img
            src="/images/right3.png"
            alt="Decorative Image Right"
            className="absolute top-0 right-10 w-24 lg:w-64"
          /> */}

          <div className=" relative flex flex-col md:flex-row items-center ">
            {/* Left Section: Image */}
            <div data-aos="zoom-out" className=" left-20 md:left-28 absolute w-48 h-48 lg:w-80 lg:h-80 bg-green-100 rounded-full mt-10 lg:mt-20 ml-2"></div>

            <div className="w-full md:w-1/2 mb-10 md:mb-0 lg:pr" data-aos="zoom-in" data-aos-duration="500">
              <img
                src="/images/friedbg.png"
                alt="image"
                className="w-4/5 md:w-4/5 rounded-lg mx-auto"
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
                  className="relative  bg-blue isolation-auto z-10 border-2 border-gray-50
                                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                                          before:-right-full before:hover:right-0 before:rounded-full before:bg-gray-400 before:-z-10
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
        <Sample />

        {/* <TestimonialSection /> */}

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
          <h2 className="relative text-4xl font-bold mb-6 text-black inline-block pb-2" data-aos="fade-down">
            About <span className="text-blue">Us</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
          </h2>

          {/* Image Section */}
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="300">
            <img src="./images/radishhome.png" alt="Food Illustration" className="w-full max-w-md rounded-full" />
          </div>

          {/* Description Text */}
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <p className="text-black mb-6">
              At Radish, we believe that dining is more than just enjoying a meal;
              it’s an experience. Our commitment to using fresh, high-quality ingredients
              ensures every dish delights your senses. With a menu that caters to a variety
              of tastes and dietary needs, a cozy ambiance, and warm, attentive service,
              Radish stands out as a place where customers feel at home. Choose us for
              an exceptional culinary journey where quality meets comfort,
              making every visit a memorable one.
            </p>
          </div>


          {/* Action Button */}
          {/* <button
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
          </button> */}
        </section>

      </div>


      {/* top arrow button */}


      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-10 rounded-full bg-blue hover:bg-white border-2 border-gray-50 shadow-lg 
      inline-flex items-center justify-center w-12 h-12 text-white text-2xl font-bold transition-transform duration-300
      transform hover:scale-110 hover:shadow-2xl hover:text-blue hover:boder-2 hover:border-blue"
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

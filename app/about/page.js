'use client';
import React from "react";
import Navbar from "../components/Navbar";


import { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
const About = () => {
  

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
      <Navbar />


      <div
        className="text-center md:text-left  text-blue py-8 px-4 sm:px-6 md:px-16 lg:px-32"
        
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div
            className="w-full md:w-1/2 mb-6 md:mb-0"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <img
              src="/images/burgerbg.png"
              alt="Radish -About"
              className="w-full sm:w-3/4 md:w-4/5 mx-auto rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full h-full md:w-1/2 px-4 sm:px-6 lg:px-10" data-aos="fade-up">
  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black inline-block pb-2" data-aos="fade-down">
    About <span className="text-blue">Radish</span>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-10 bg-gray-300 mt-2"></span>
  </h2>

  <p className="text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
    At Radish, we take pride in serving an extensive menu that caters to diverse tastes. From freshly brewed coffee to gourmet meals, our offerings include a wide array of delicacies made from high-quality ingredients.
  </p>
  <p className="text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
    Whether you're looking for a quick bite or a relaxing meal with friends, Radish Resto Cafe is your one-stop place for great food, warm hospitality, and a cozy ambiance.
  </p>
</div>

        </div>
      </div>




      <div className="flex flex-col items-center justify-center bg py-8 ">
        <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black inline-block pb-2" data-aos="fade-down">
          Our <span className='text-blue'>Journey</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
        </h2><div className="relative w-full max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="border-r-8 border-blue absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline Item 1 */}
          <div className="mb-16 flex items-center justify-center w-full px-8 md:px-28 py-4 md:py-24">
            <div className="w-1/2 text-center pr-8" data-aos="fade-right">
              <p className="text-sm sm:text-base md:text-lg  md text-blue  ">
                In 2022, we started our journey as a cloud kitchen
                in Kannur, serving sandwiches and burgers.
                We quickly gained a reputation for our great
                service and delicious food.
              </p>
            </div>
            <div className="w-1/2 pl-8 flex justify-start" data-aos="fade-left">
              <span className=" px-4 md:px-12 text-xl md:text-4xl font-semibold">2022</span>
            </div>
            {/* Year and Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full border-2
             border-blue w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">

              <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue rounded-full 
            border-2 border-blue w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-16 flex items-center justify-between w-full flex-row-reverse px-8 md:px-28 py-4 md:py-24">
            <div className="w-1/2 text-center pl-8" data-aos="fade-left">
              <p className="text-sm sm:text-base md:text-lg  p-2 text-blue">
                In 2023, we had plans to open a full-fledged cafe.
                Unfortunately, due to various challenges, we had
                to pause this project. However, our passion for
                providing authentic, healthy, and affordable food
                remained strong.
              </p>
            </div>
            <div className="w-1/2 pr-8 flex justify-end" data-aos="fade-right">
              <span className="px-4 md:px-12 text-xl md:text-4xl font-semibold">2023</span>
            </div>
            {/* Year and Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full border-2
             border-blue w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">

              <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue rounded-full 
            border-2 border-blue w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"></div>
            </div></div>

          {/* Timeline Item 3 */}
          <div className="mb-16 flex items-center justify-center w-full px-8 md:px-28 py-4 md:py-28">
            <div className="w-1/2 text-center pr-8" data-aos="fade-right">
              <p className="text-sm sm:text-base md:text-lg  text-blue">
                Today, in 2024, we are proud to present <span className="font-bold">The Radish Grills and Cafe</span>.
                We continue to prioritize quality in everything we do, from the ingredients we use to the service we provide.
              </p>
            </div>
            <div className="w-1/2 pl-8 flex justify-start" data-aos="zoom-in">
              <span className="text-xl md:text-4xl font-semibold px-4 md:px-12">2024</span>
            </div>
            {/* Year and Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full border-2
             border-blue w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">

              <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue rounded-full 
            border-2 border-blue w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div >
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
      <Footer/>
    </>
  );
};

export default About;

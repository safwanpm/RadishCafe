'use client';
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
  return (
    <>
      <div className="relative">
        <Navbar></Navbar>

        {/* herosection */}


        <div className=" py-4 lg:py-12  mt-2  px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">

            {/* Left Decorative Image */}
            <img
              src="/images/left 1.png"
              alt="Spoon"
              className="absolute top-16 lg:top-18 left-0 w-24 h-auto lg:w-48 lg:h-auto"
            />

            {/* Right Decorative Image */}
            <img
              src="/images/right 1.png"
              alt="Tomato"
              className="absolute top-24 right-0 w-24 h-auto lg:w-48 lg:h-auto"
            />

            {/* Left Side */}
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
              <h1
                className="ms-12 lg:ms-16 text-4xl md:text-5xl lg:text-6xl font-extrabold text-textcolor leading-tight mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Take a taste <br />
                Come join Us.
              </h1>
              <p
                className="text-gray-600 text-lg md:text-xl mb-8 ms-12 lg:ms-16"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                "Bringing you the finest flavors, crafted from the world’s best ingredients!"
              </p>
              <div className="ms-12 lg:ms-16 flex gap-4" data-aos="fade-up" data-aos-delay="500">
                <a
                  href="tel:+971526346199"
                  className="bg-blue text-white text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-16 rounded-full hover:bg-background hover:text-textcolor border-2 hover:border-textcolor transition"
                >
                  Explore Now
                </a>
                {/* <a
                  href="/about"
                  className="bg-white border-2 border-textcolor text-textcolor text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full hover:bg-gray-100 transition"
                >
                  Learn more
                </a> */}
              </div>
            </div>

            {/* Right Side */}
            <div
              className="w-lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src="/images/item1.png" alt="Top Products" className="w-5/5 h-auto" />
            </div>
          </div>
        </div>




        {/* What other say */}






        <div
          className="bg relative text-blue py-16 px-6 md:px-16 lg:px-32"
          id="about"
        >


          {/* Left Decorative Image */}
          {/* <img
            src="/images/left 1.png"
            alt="Decorative Image Left"
            className="absolute top-0 left-0 w-24 h-auto lg:w-48 lg:h-auto"
          /> */}

          {/* Right Decorative Image */}
          <img
            src="/images/right 2.png"
            alt="Decorative Image Right"
            className="absolute top-0 right-10 w-24 h-auto lg:w-56 lg:h-auto"
          />
          <div className="flex flex-col md:flex-row items-center">
            <div
              className="w-full md:w-1/2 mb-10 md:mb-0 pr-10"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img
                src="/images/item  5.png"
                alt="Zahrat Al Reef Shopfront"
                className="w-4/5 rounded-lg "
              />
            </div>
            <div
              className="w-full h-full md:w-1/2 lg:pr-20"
              data-aos="fade-up"
            >
              <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
                Welcome to {" "}
                <span className="text-orange-500">Radish</span>{" "}
              </h1>

              <p
                className="text-lg mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                At Radish, we take pride in serving an extensive menu that caters to diverse tastes.
                From freshly brewed coffee to gourmet meals, our offerings include a wide array of
                delicacies made from high-quality ingredients.
              </p>
              <p
                className="text-lg mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Whether you're looking for a quick bite or a relaxing
                meal with friends, Radish Resto Cafe is your one-stop place
                 for great food, warm hospitality, and a cozy ambiance
              </p>
              <a href="/about">
                <>
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
                </>
              </a>
            </div>
          </div>
        </div>



        {/* About */}


        <section className="flex flex-col items-center justify-center text-center px-4 py-16 lg:py-32 bg">
          <h2 className="relative text-4xl font-bold mb-6 text-black inline-block">
            About Us
            {/* Underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-orange-500 mt-2"></span>
          </h2>
          {/* Image */}
          <div className="mb-8">
            <img
              src="./images/about-img.jpg"
              alt="Food Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-gray-600 mb-6">
              Established in the heart of Taliparamba, Kannur,
              Radish Resto Cafe has been a cherished spot for
              food enthusiasts who appreciate a perfect blend of
              authentic flavors and modern culinary techniques.
              With years of experience in delivering exceptional
              dining experiences, Radish is a go-to destination for
              locals and visitors alike.
            </p>

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



          </div>
        </section>


      </div>



      <button

        onClick={scrollToTop}

        className=" fixed bottom-8 right-8   rounded-full bg-blue isolation-auto z-10 border-2 border-gray-50
                                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white
                                          before:-right-full before:hover:right-0 before:rounded-full before:bg-orange-500 before:-z-10
                                           before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
                                            inline-flex items-center justify-center px-4 py-4 text-xl font-extrabold text-white
                                              shadow-sm gap-x-2 hover:bg-gray-50
                                              disabled:opacity-50 disabled:pointer-events-none"
      >
        ↑
      </button>

      <Footer />
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-blue ">
      <div className="py-10 lg:px-24 sm:px-6 mx-4 lg:mx-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="/" className="flex items-center" data-aos="fade-down">
            <img src="./images/icon.png" alt="Icon" className="w-56 h-16" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 " data-aos="fade-down">
            {navLinks.map(({ name, href }) => (
              <a key={name} href={href} className="text-white hover:text-yellow-500">
                {name}
              </a>
            ))}
          </div>

          {/* Enquiry Button (Desktop) */}
          {/* <a
            href="#"
            className="hidden md:flex border-2 border-white text-white 
            text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-2 px-4 
            sm:px-6 md:px-8 rounded-md hover:bg-white hover:text-blue transition"
            data-aos="fade-down"
          >
            Enquiry
          </a> */}
          <a className="text-white">
            abc
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            data-aos="fade-down"
          >
            {isOpen ? (
              // Close Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center px-4 py-2 space-y-4 flex flex-col" data-aos="fade-down">
          {navLinks.map(({ name, href }) => (
            <a key={name} href={href} className="text-gray-800 hover:text-blue-600">
              {name}
            </a>
          ))}
          <a
            href="#"
            className="border-2 border-orangecolor text-orangecolor text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-2 px-4 sm:px-6 md:px-4 rounded-3xl hover:bg-gray-50 transition"
          >
            Enquiry
          </a>
        </div>
      )}
    </nav>
  );
}

"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className={` px-4 md:px-2 w-full ${isHomePage ? "bg-blue" : "bg-white"}`}>
      <div className="py-10 lg:px-24 sm:px-6 mx-4 lg:mx-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          {isHomePage ? (
            <a href="/" className="flex items-center" data-aos="fade-down">
              <img src="./images/bg Green.png" alt="Icon" className="w-56 h-16" />
            </a>
          ) : (
            <a href="/" className="flex items-center" data-aos="fade-down">
              <img src="./images/icon.png" alt="Icon" className="w-56 h-16" />
            </a>
          )}


          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 " data-aos="fade-down">
            {navLinks.map(({ name, href }) => (
              <a key={name} href={href} className={` ${isHomePage ? "text-white" : "text-black"} hover:text-yellow-500`}>
                {name}
              </a>
            ))}
          </div>

          {/* Enquiry Button (Desktop) */}
          <a
          data-aos="fade-down"
            href="#"
            className={`hidden md:flex border ${isHomePage ? "border-white text-white" : "border-blue rext-blue"} 
            text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 md:py-2 px-4 
            sm:px-6 md:px-8  hover:bg-white hover:text-blue transition"
            data-aos="fade-down`}
          >
            Enquiry
          </a>
          {/* <a className=" hidden md:block text-white">
            abc
          </a> */}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isHomePage ? "text-white" : "text-black"} focus:outline-none`}
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
        <div className={`md:hidden text-center px-4 py-2 space-y-4 flex flex-col  ${isHomePage ? "text-white" : "text-black"}`} data-aos="fade-down">
          {navLinks.map(({ name, href }) => (
            <a key={name} href={href} className={`${isHomePage ? "text-white" : "text-black"} hover:text-blue-600`}>
              {name}
            </a>
          ))}
          <a
            href="#"
            className={`border-2 ${isHomePage ? "border-white text-white " : "text-black border-blue"}  text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 
            md:py-2 px-4 sm:px-6 md:px-4 rounded-3xl hover:bg-gray-50 transition`}
          >
            Enquiry
          </a>
        </div>
      )}
    </nav>
  );
}

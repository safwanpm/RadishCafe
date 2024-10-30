'use client';
import { useEffect, useState } from 'react';
import React from 'react'
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

function Contact() {


  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 to-white p-10 flex flex-col md:flex-row items-center 
      justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-10 rounded-lg  mx-2 md:mx-24 py-4 md:py-24">

        {/* Left: Contact Information */}
        <div className="bg-blue text-white p-6 rounded-lg py-24 w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <p className="text-sm mb-6">We’ll create high-quality linkable content and build at least 40 high-authority links.</p>
          <ul>
            <li className="flex items-center mb-4">
              <a href="tel:+919847062630" className="hover:text-orange-500  items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 98470 62630
              </a>
            </li>
            <li className="flex items-center mb-4">
              <a href="mailto:info@s2a.co.in" className="hover:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@s2a.co.in
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Techno Industrial Park, Thaliparamba
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white w-full md:w-2/3 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center md:text-left">Get In Touch</h2>
          <p className="text-center md:text-left text-gray-500 mb-6">
            We’ll create high-quality linkable content and build at least 40 high-authority links.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded w-full" />
              <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <input type="text" placeholder="Your Subject" className="border border-gray-300 p-2 rounded w-full" />
            <textarea placeholder="Write here your message" className="border border-gray-300 p-2 rounded w-full h-32 resize-none"></textarea>
            <button type="submit" className="bg-blue text-white py-2 px-4 rounded w-full">Send Message</button>
          </form>
        </div>
      </div>
<Footer/>

    </>
  )
}

export default Contact
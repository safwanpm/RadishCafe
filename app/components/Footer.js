import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white py-10 pt-16 px-8 lg:px-28 relative bg-blue">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Right Decorative Image */}
        {/* <img
          src="/images/footer onion.png"
          alt="Decorative Image"
          className="absolute top-0 right-0 w-24 lg:w-48"
        /> */}

        <div className='flex flex-col items-center justify-center text-center'>
          <img src='./images/radishWhite (1).png' alt='logo' className='mb-4' />
          <h1>RADISH</h1>
          <p>GRILL & CAFE</p>
        </div>


        {/* Follow Us Section */}
        <div className='text-center'>
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-center">
            <li>
              <a href="/about" className="text-sm lg:text-lg hover:text-gray-300  items-center">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm lg:text-lg hover:text-gray-300  items-center">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/menu" className="text-sm lg:text-lg hover:text-gray-300 items-center">
                Menu
              </a>
            </li>

          </ul>
        </div>



        {/* Contact Info Section */}
        <div className='text-center'>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2 text-sm lg:text-lg">
            <li>
              <a href="tel:+919847062630" className="hover:text-gray-300  items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 98470 62630
              </a>
            </li>
            <li>
              <a href="mailto:info@s2a.co.in" className="hover:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@s2a.co.in
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Techno Industrial Park, Thaliparamba
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/radish_india/profilecard/?igsh=N2tjZ3UyeGpvcTY0" className="hover:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" /> radish india
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm lg:text-md pt-4 text-center md:text-end px-4">
        <p>©2024 all rights reserved.
          Designed by{' '}
          <a
            href="https://tri-design.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black"
          >
            TRIDesign
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Menu = () => {


  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Sample menu items data
  const menuItems = [
    { id: 1, name: 'Pizza', price: '$20', category: 'Dishes', img: '/images/f6.png' },
    { id: 2, name: 'Burger', price: '$15', category: 'Dishes', img: '/images/f2.png' },
    { id: 3, name: 'Pasta', price: '$17', category: 'Dishes', img: '/images/f9.png' },
    { id: 4, name: 'Fried Chicken', price: '$12', category: 'Dishes', img: '/images/fried.png' },
    { id: 5, name: 'Crispy Fries', price: '$8', category: 'Dishes', img: '/images/f5.png' },
    { id: 6, name: 'Steak', price: '$8', category: 'Dishes', img: '/images/steak.png' },
    { id: 7, name: 'Healthy Salads', price: '$8', category: 'Dishes', img: '/images/salad.png' },
    { id: 8, name: 'Momos', price: '$8', category: 'Dishes', img: '/images/momo.png' },
    { id: 9, name: 'Buble Tea', price: '$8', category: 'Beverages', img: '/images/buble.png' },
    { id: 10, name: 'Shakes', price: '$8', category: 'Beverages', img: '/images/shake.png' },
    { id: 11, name: 'Ice Tea', price: '$8', category: 'Beverages', img: '/images/ice.png' },
    { id: 12, name: 'Mocktails', price: '$8', category: 'Beverages', img: '/images/mocktails.png' },
    { id: 13, name: 'Juices', price: '$8', category: 'Beverages', img: '/images/juice.png' },
    { id: 14, name: 'Healthy Drinks', price: '$8', category: 'Beverages', img: '/images/healthy.png' },
    
  ];

  const categories = ['All', 'Dishes','Beverages'];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtered items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (

    <>
      <Navbar />
      <div className="container  p-4 px-8 lg:px-36">
        {/* <h1 className="text-center text-3xl text-blue font-semibold mb-6">Our <span className='text-orange-500'>Menu</span> </h1> */}

        {/* Category filter buttons */}
        <div className="flex justify-center space-x-4  mb-8 text-white">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 md:px-8 py-2 rounded-full ${selectedCategory === category ? 'bg-blue text-white border-2 border-blue' : 'text-black '
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="shadow-lg   p-4 rounded-lg relative"
              // style={{ backgroundImage: 'url("/images/jpg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className='flex p-4 bg-blue  items-center justify-center rounded-es-3xl rounded-se-3xl  h-60 '>
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-26 w-40 object-cover rounded-lg mb-4"
                />
              </div>
              <div className='text-center py-4'>
                <h3 className="text-xl font-bold text-blue">{item.name}</h3>
              </div>
            </div>
          ))}

        </div>
      </div>
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
};

export default Menu;

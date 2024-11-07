'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sample from '../components/Sample'; // Importing the Sample component

const Menu = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { id: 1, name: 'Pizza', price: '$20', category: 'Dishes', img: '/images/f6.png' },
    { id: 2, name: 'Burger', price: '$15', category: 'Dishes', img: '/images/f7.png' },
    { id: 3, name: 'Pasta', price: '$17', category: 'Dishes', img: '/images/pasta1.png' },
    { id: 4, name: 'Fried Chicken', price: '$12', category: 'Dishes', img: '/images/fried.png' },
    { id: 5, name: 'Crispy Fries', price: '$8', category: 'Dishes', img: '/images/french-fries.png' },
    { id: 6, name: 'Steak', price: '$8', category: 'Dishes', img: '/images/steak.png' },
    { id: 7, name: 'Healthy Salads', price: '$8', category: 'Dishes', img: '/images/salad.png' },
    { id: 8, name: 'Momos', price: '$8', category: 'Dishes', img: '/images/momo.png' },
    { id: 9, name: 'Bubble Tea', price: '$8', category: 'Beverages', img: '/images/buble.png' },
    { id: 10, name: 'Shakes', price: '$8', category: 'Beverages', img: '/images/shake.png' },
    { id: 11, name: 'Ice Tea', price: '$8', category: 'Beverages', img: '/images/ice.png' },
    { id: 12, name: 'Mocktails', price: '$8', category: 'Beverages', img: '/images/mocktails.png' },
    { id: 13, name: 'Juices', price: '$8', category: 'Beverages', img: '/images/juice.png' },
    { id: 14, name: 'Healthy Drinks', price: '$8', category: 'Beverages', img: '/images/healthy.png' },
  ];

  const categories = ['All', 'Dishes', 'Beverages'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Navbar />

      <div className="container p-4 px-8 lg:px-36">
        <div className="flex justify-center space-x-4 mb-8 text-black">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 md:px-8 py-2 rounded-full ${selectedCategory === category ? 'bg-blue text-white border-2 border-blue' : 'text-black'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sample Component can be displayed above or below the items grid */}
        

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="flex flex-col gap-5 group  bg-white rounded-  cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="bg-gradient-to-r h-full w-full flex items-center justify-center  overflow ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="p-8 group-hover:ease-in-out  h-40 transition duration-700 
                  group-hover:duration-1000 cursor-pointer object-center object-cover 
                  group-hover:scale-110 sm:group-hover:scale-150 w-40 md:w-full md:max-w-72 md:h-full  aspect-square
                   rotate-0 group-hover group-hover:stroke-lime-600 fill-lime-600 
                   group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
                  />
              </div>
              <div className="flex flex-col items-center text-center py-4">
                <h3 className="text-xl font-bold text-blue mb-1">{item.name}</h3>
                {/* <p className="text-sm text-gray-500">{item.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-10 rounded-full bg-blue hover:bg-orange-500 border-2 border-gray-50 shadow-lg 
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

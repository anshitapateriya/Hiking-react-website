import React, { useState } from 'react';
import hiking from '../assets/hiking logo.jpeg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 md:p-8 flex   items-center">
      <div className="flex items-center space-x-4 md:space-x-16 font-bold text-2xl md:text-4xl">
        <img src={hiking} alt="Logo" className="h-10 md:h-12" />
        <p className="p-2 px-4 md:px-6 rounded-full bg-blue-300 text-black font-bold text-xs md:text-base">
          Hiking Life
        </p>
      </div>
      
      {/* Toggle Menu Button */}
      <button
        className="block md:hidden focus:outline-none"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {showMenu ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Responsive Menu */}
      <div className={`md:hidden  ${showMenu ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 hover:text-gray-300">Home</a>
        <a href="#" className="block py-2 hover:text-gray-300">Class</a>
        <a href="#" className="block py-2 hover:text-gray-300">Promo</a>
        <a href="#" className="block py-2 hover:text-gray-300">OnlineClass</a>
        <a href="#" className="block py-2 hover:text-gray-300">Contact</a>
      </div>

      {/* Regular Menu for Larger Screens */}
      <div className="hidden ml-8 md:flex items-center space-x-8">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Class</a>
        <a href="#" className="hover:text-gray-300">Promo</a>
        <a href="#" className="hover:text-gray-300">OnlineClass</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

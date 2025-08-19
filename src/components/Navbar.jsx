import React, { useState } from "react";
import Club from "./Club";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <>
    
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-xl md:text-2xl font-bold text-green-600 flex items-center"
        >
          🍽️ FoodHub<span className="text-lg text-emerald-500">🥗</span>
        </a>

        {/* Menu items */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#menu" className="hover:text-green-600">Menu</a>
          <a href="#club" className="hover:text-green-600">Club</a>
           <a href="#about" className="hover:text-green-600">About</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>

        {/* Order Button (visible on md and larger) */}
        <a
          href="#order"
          className="hidden md:inline-block bg-green-600 text-white px-4 md:px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition"
        >
          Order Now
        </a>

        {/* Mobile Menu Button (only on small screens) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" className="block hover:text-green-600">Home</a>
          <a href="#menu" className="block hover:text-green-600">Menu</a>
          <a href="#about" className="block hover:text-green-600">About</a>
          <a href="#contact" className="block hover:text-green-600">Contact</a>
          <a
            href="#order"
            className="block bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition text-center"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;

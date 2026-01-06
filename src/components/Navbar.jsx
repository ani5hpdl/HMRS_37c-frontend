import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Hotel Name */}
        <div className="text-2xl font-bold">
          <Link to="/">Luxe Stay</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="#hero" className="hover:text-gray-800">Home</a>
          </li>
          <li>
            <a href="#story" className="hover:text-gray-800">Our Story</a>
          </li>
          <li>
            <a href="#rooms" className="hover:text-gray-800">Rooms</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-800">Gallery</a>
          </li>
          <li>
            <a href="#amenities" className="hover:text-gray-800">Amenities</a>
          </li>
          <li>
            <Link to="/reservation" className="px-4 py-2 border border-black hover:bg-black hover:text-white transition">
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
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
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#hero" className="block hover:text-gray-800">Home</a>
          <a href="#story" className="block hover:text-gray-800">Our Story</a>
          <a href="#rooms" className="block hover:text-gray-800">Rooms</a>
          <a href="#gallery" className="block hover:text-gray-800">Gallery</a>
          <a href="#amenities" className="block hover:text-gray-800">Amenities</a>
          <Link
            to="/reservation"
            className="block px-4 py-2 border border-black hover:bg-black hover:text-white transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

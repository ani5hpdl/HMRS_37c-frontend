import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Luxe-logo.png";
import BookNowButton from "../components/BookNowButton.jsx";

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (location.pathname === "/register" || location.pathname === "/login") return null;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-white/90 backdrop-blur-md shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Luxe Stay Logo"
              className="w-[220px] h-[70px] object-contain"
            />
          </Link>

          {/* Nav Links */}
          <ul className="flex space-x-6 items-center text-gray-800 font-medium text-sm">
            <li>
              <Link to="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-amber-500 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-amber-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/amenities" className="hover:text-amber-500 transition">
                Amenities
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <BookNowButton className="ml-4" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer so content doesn’t jump */}
      <div className="h-[76px]" />
    </>
  );
};

export default Navbar;

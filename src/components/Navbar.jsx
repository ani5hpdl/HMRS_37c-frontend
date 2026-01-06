import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Luxe-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null);
      }
    }
  }, [location, scrollTarget]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");       
      setScrollTarget(id); 
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Luxe Stay Logo" className="w-40 h-16 object-contain"/>
        </Link>

        <ul className="flex space-x-8 items-center text-black font-medium">
          <li><button onClick={() => scrollToSection("hero")} className="hover:text-amber-500 transition">Home</button></li>
          <li><button onClick={() => scrollToSection("story")} className="hover:text-amber-500 transition">Our Story</button></li>
          <li><button onClick={() => scrollToSection("rooms")} className="hover:text-amber-500 transition">Rooms</button></li>
          <li><button onClick={() => scrollToSection("gallery")} className="hover:text-amber-500 transition">Gallery</button></li>
          <li><button onClick={() => scrollToSection("amenities")} className="hover:text-amber-500 transition">Amenities</button></li>
          <li>
            <Link to="/reservation" className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 transition">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

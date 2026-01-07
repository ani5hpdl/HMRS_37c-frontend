import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Luxe-logo.png";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link to="/">
            <img
              src={logo}
              alt="Luxe Stay Logo"
              className="w-[260px] h-[80px] object-contain"
            />
          </Link>

          <ul className="flex space-x-8 items-center text-black font-medium">
            <Link to="/" className="hover:text-amber-500 transition">Home</Link>
            <Link to="/rooms" className="hover:text-amber-500 transition">Rooms</Link>
            <Link to="/gallery" className="hover:text-amber-500 transition">Gallery</Link>
            <Link to="/amenities" className="hover:text-amber-500 transition">Amenities</Link>
            <Link
              to="/reservation"
              className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 transition"
            >
              Book Now
            </Link>
          </ul>

        </div>
      </nav>

      <div className="h-[96px]" />
    </>
  );
};

export default Navbar;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/home.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import Rooms from "./pages/Rooms.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reservation from "./pages/Reservation.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

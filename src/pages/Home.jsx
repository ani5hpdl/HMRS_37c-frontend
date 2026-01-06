import { Link } from "react-router-dom";

import heroImg from "../assets/images/hotel-hero.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import iconBed from "../assets/images/icons/bed.svg";
import iconPool from "../assets/images/icons/pool.svg";
import iconSpa from "../assets/images/icons/spa.svg";
import iconGym from "../assets/images/icons/gym.svg";

const Home = () => {
  return (
    <div className="pt-28">
      {/* ===== Hero Section ===== */}
      <section
        id="hero"
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1 className="text-6xl font-bold mb-4 text-center drop-shadow-lg">
          Welcome to Luxe Stay
        </h1>
        <p className="text-xl mb-8 text-center drop-shadow-lg">
          Luxury 5-star experience in Kathmandu, Nepal
        </p>
        <Link
          to="/reservation"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Book Now
        </Link>
      </section>

      {/* ===== Our Story ===== */}
      <section id="story" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700">
            In 1994, the founder discovered this stunning location in Kathmandu,
            inspired by the Himalayan views and serene surroundings. Today, Luxe Stay offers
            a symbiosis of modern design, luxury, and wellness sanctuary.
          </p>
        </div>
      </section>

      {/* ===== Rooms Preview ===== */}
      <section id="rooms" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Rooms & Suites</h2>
          <p className="text-gray-700 mb-12">
            Experience luxury and comfort in every room.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[room1, room2, room3].map((room, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <img src={room} alt={`Room ${i + 1}`} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">Deluxe Suite {i + 1}</h3>
                  <p className="text-gray-600 mt-2">Modern amenities with Himalayan views.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gallery Preview ===== */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover"/>
              </div>
            ))}
          </div>
          <Link
            to="/gallery"
            className="mt-8 inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* ===== Amenities ===== */}
      <section id="amenities" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: iconBed, label: "Luxury Rooms" },
              { icon: iconPool, label: "Infinity Pool" },
              { icon: iconSpa, label: "Spa & Wellness" },
              { icon: iconGym, label: "Gym & Sauna" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={item.icon} alt={item.label} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Guest Reviews ===== */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Nadia A",
                review: "A beautiful hotel with amazing views and friendly staff!",
              },
              {
                name: "Muku Raj",
                review: "Highly recommended! Relaxing mountain retreat.",
              },
              {
                name: "Richa A",
                review: "Excellent stay, loved the spa and pool!",
              },
            ].map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">"{r.review}"</p>
                <h3 className="font-semibold">{r.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

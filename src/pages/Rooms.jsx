import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";

const roomsData = [
  {
    title: "Deluxe Suite",
    img: room1,
    price: 120,
    description: "Spacious suite with mountain view, king-size bed, and modern amenities."
  },
  {
    title: "Executive Suite",
    img: room2,
    price: 180,
    description: "Elegant suite with living area, balcony, and luxury bathroom."
  },
  {
    title: "Presidential Suite",
    img: room3,
    price: 250,
    description: "Top-tier suite with panoramic views, private terrace, and premium services."
  },
];

const Rooms = () => {
  return (
    <div className="pt-28 bg-gray-50">
      {/* ===== Header ===== */}
      <section className="text-center py-16 bg-white shadow">
        <h1 className="text-5xl font-bold mb-4">Our Rooms</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore our luxurious rooms designed to offer the perfect blend of comfort and elegance.
        </p>
      </section>

      {/* ===== Rooms List ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {roomsData.map((room, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={room.img} alt={room.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{room.title}</h2>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <p className="text-gray-900 font-bold mb-4">${room.price} / night</p>
              <a
                href="/reservation"
                className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Rooms;

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hotel-hero.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import room4 from "../assets/images/room4.jpg";
import room5 from "../assets/images/room5.jpg";
import room6 from "../assets/images/room6.jpg";

const RoomsBooking = () => {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [boardType, setBoardType] = useState("Room Only");
  const [occupancy, setOccupancy] = useState("Any");
  const [priceRange, setPriceRange] = useState(20000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      image: room1,
      price: 5000,
      description: "Cozy room with all basic amenities.",
      amenities: ["WiFi", "AC", "TV"],
      occupancy: "Single",
    },
    {
      id: 2,
      name: "Deluxe King Room",
      image: room2,
      price: 8000,
      description: "Spacious room with king-size bed.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar"],
      occupancy: "Double",
    },
    {
      id: 3,
      name: "Penthouse",
      image: room3,
      price: 15000,
      description: "Luxury penthouse with breathtaking views.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Room Service", "Coffee Maker"],
      occupancy: "Double",
    },
    {
      id: 4,
      name: "Honeymoon Suite",
      image: room4,
      price: 12000,
      description: "Romantic suite perfect for couples.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Coffee Maker"],
      occupancy: "Double",
    },
    {
      id: 5,
      name: "Executive Suite",
      image: room5,
      price: 10000,
      description: "Perfect for business stays.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Room Service"],
      occupancy: "Single",
    },
    {
      id: 6,
      name: "Presidential Suite",
      image: room6,
      price: 20000,
      description: "Ultimate luxury with private lounge.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Room Service", "Coffee Maker"],
      occupancy: "Double",
    },
  ];

  const amenitiesList = ["WiFi", "AC", "TV", "Room Service", "Mini Bar", "Coffee Maker"];

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (room.price > priceRange) return false;
      if (occupancy !== "Any" && room.occupancy !== occupancy) return false;
      if (selectedAmenities.length > 0) {
        for (let a of selectedAmenities) {
          if (!room.amenities.includes(a)) return false;
        }
      }
      return true;
    });
  }, [priceRange, occupancy, selectedAmenities]);

  const handleBookNow = (roomName) => {
    navigate("/reservation", { state: { roomName, checkIn, checkOut, boardType } });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="h-96 bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 p-8 rounded text-center z-10">
          <h1 className="text-5xl font-bold">Find Your Perfect Room</h1>
          <p className="text-xl mt-4">Luxury stays in Kathmandu, tailored for you</p>
        </div>

        {/* Floating Search Box */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg p-6 w-full max-w-4xl flex flex-wrap justify-between items-end gap-4 z-20">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value > checkOut) setCheckOut("");
              }}
              className="border rounded p-2 bg-white text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Check-out</label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border rounded p-2 bg-white text-black"
              disabled={!checkIn}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Board Type</label>
            <select
              value={boardType}
              onChange={(e) => setBoardType(e.target.value)}
              className="border rounded p-2 bg-white text-black"
            >
              <option>Room Only</option>
              <option>Bed & Breakfast</option>
              <option>Full Board</option>
            </select>
          </div>
          <button
            onClick={() => alert("Searching rooms...")}
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition mt-4 md:mt-0"
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row space-x-0 md:space-x-6 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded shadow space-y-6 sticky top-28 h-fit">
          <h3 className="text-lg font-semibold">Filter Rooms</h3>

          <div>
            <label className="text-sm font-medium">Price (max NPR)</label>
            <input
              type="range"
              min="5000"
              max="20000"
              step="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <p className="mt-1 font-semibold">{priceRange} NPR</p>
          </div>

          <div>
            <label className="text-sm font-medium">Occupancy</label>
            <select
              value={occupancy}
              onChange={(e) => setOccupancy(e.target.value)}
              className="border rounded p-2 w-full"
            >
              <option>Any</option>
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Amenities</h4>
            <div className="flex flex-col space-y-2">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-yellow-100 transition ${
                    selectedAmenities.includes(amenity) ? "bg-yellow-100" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="accent-yellow-500"
                  />
                  <span className="text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Rooms Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition cursor-pointer"
            >
              <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-gray-600 mt-1">{room.description}</p>
                <p className="text-gray-800 font-semibold mt-2">{room.price} NPR/night</p>
              </div>
              <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition p-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                <p className="mb-2">{room.description}</p>
                <p className="mb-2">{room.price} NPR/night</p>
                <p className="mb-4">Amenities: {room.amenities.join(", ")}</p>
                <button
                  onClick={() => handleBookNow(room.name)}
                  className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
          {filteredRooms.length === 0 && (
            <p className="col-span-full text-center text-gray-600 mt-10">
              No rooms match your filters
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoomsBooking;

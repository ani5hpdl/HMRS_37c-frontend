import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import heroImg from "../assets/images/hotel-hero.jpg";
import BookNowButton from "../components/BookNowButton.jsx";
import { useEffect, useState } from "react";
import {toast} from 'react-hot-toast';
import { getAllRooms } from "../services/api.js";

const roomsData = [
  {
    id: "deluxe-suite",
    title: "Deluxe Suite",
    img: room1,
    price: 12000,
    description:
      "Spacious suite with a mountain view and modern amenities, perfect for couples or solo travelers.",
    amenities: ["King Size Bed","Free WiFi","Mini Bar","Room Service","Air Conditioning"],
  },
  {
    id: "executive-suite",
    title: "Executive Suite",
    img: room2,
    price: 18000,
    description:
      "Elegant suite with balcony, luxury bathroom and panoramic valley views.",
    amenities: ["Balcony","Free WiFi","Mini Bar","Jacuzzi Tub","Air Conditioning"],
  },
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    img: room3,
    price: 25000,
    description:
      "Premium suite with private outdoor space, terrace lounge, and premium services.",
    amenities: ["Private Terrace","Premium Mini Bar","Room Service","Jacuzzi","Panoramic View"],
  },
];

const Rooms = () => {

  const [allRooms,setAllRooms] = useState([]);

  const fetchRooms = async() => {
    try {
      const response = await getAllRooms();
      if(response.data.success){
        setAllRooms(response.data.data);
        return toast.success("Fetched Sucessfully");
      }
    } catch (error) {
      return toast.error(error.message);
    }
  }

  useEffect(()=>{ 
    fetchRooms();
    console.log(allRooms);
  },[]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== Hero Section / Top Bar ===== */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 p-8 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Rooms
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md max-w-3xl mx-auto">
            Experience exceptional comfort, refinement, and breathtaking views in every room category we offer.
          </p>
        </div>
      </section>

      {/* ===== Rooms List ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {allRooms.map((room, index) => (
          <div
            key={room.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={room1} alt={room.RoomType.name} className="w-full h-96 object-cover" />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{room.RoomType.name}</h2>
              <p className="text-xl text-amber-500 font-semibold">{room.RoomType.pricePerNight.toLocaleString("en-NP")} NPR / night</p>
              <p className="text-gray-800 text-lg">{room.RoomType.description}</p>

              {/* Amenity List */}
              <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
                {room.RoomType?.RoomAmenity &&
                  Object.entries(room.RoomType.RoomAmenity)
                    .filter(([key, value]) => value === true)
                    .map(([key]) => (
                      <li key={key}>
                        {key.replace(/([A-Z])/g, " $1")}
                      </li>
                    ))}
              </ul>

              {/* Book Now */}
              <BookNowButton className="mt-4" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Rooms;

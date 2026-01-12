import heroImg from "../assets/images/hotel-hero.jpg";
import iconBed from "../assets/images/bed.jpg";
import iconPool from "../assets/images/pool.jpg";
import iconSpa from "../assets/images/spa.jpg";
import iconGym from "../assets/images/gym.jpg";
import iconWifi from "../assets/images/gallery1.jpg";
import iconBar from "../assets/images/bar.jpg";
import iconService from "../assets/images/services.jpg";

const amenitiesList = [
  {
    icon: iconBed,
    title: "Luxury Rooms",
    description: "Elegant, comfortable rooms designed with your ultimate comfort in mind.",
  },
  {
    icon: iconPool,
    title: "Infinity Pool",
    description: "Relax and enjoy breathtaking views from our rooftop infinity pool.",
  },
  {
    icon: iconSpa,
    title: "Spa & Wellness",
    description: "Rejuvenate with our full-service spa and wellness treatments.",
  },
  {
    icon: iconGym,
    title: "Gym & Sauna",
    description: "State-of-the-art fitness center and sauna for your health and wellness.",
  },
  {
    icon: iconWifi,
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed internet throughout the resort.",
  },
  {
    icon: iconBar,
    title: "Mini Bar & Lounge",
    description: "Enjoy a curated selection of drinks and snacks in your room or lounge.",
  },
  {
    icon: iconService,
    title: "Room Service",
    description: "24/7 dedicated room service to cater to your needs anytime.",
  },
];

const Amenities = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 p-8 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Explore Our Amenities
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Luxury services and features designed for your comfort and relaxation
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Exclusive Amenities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {amenitiesList.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={amenity.icon}
                alt={amenity.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Amenities;

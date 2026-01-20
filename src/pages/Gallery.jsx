import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/bar.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import heroImg from "../assets/images/hotel-hero.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== Hero Section (Top Bar) ===== */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 p-8 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Explore our property through beautiful images showcasing the rooms, amenities, and scenic views
          </p>
        </div>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

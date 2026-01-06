import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <div className="pt-28 bg-gray-50">
      {/* ===== Header ===== */}
      <section className="text-center py-16 bg-white shadow">
        <h1 className="text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore our property through beautiful images showcasing the rooms, amenities, and scenic views.
        </p>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover"/>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

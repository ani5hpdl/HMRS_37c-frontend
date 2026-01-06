import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Deluxe Suite",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    alert("Reservation submitted! (placeholder functionality)");
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <section className="text-center py-16 bg-white shadow">
        <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Fill out the form below to make a reservation at Luxe Stay.
        </p>
      </section>

      {/* ===== Reservation Form ===== */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Check-in & Check-out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Check-out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-2 font-semibold">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block mb-2 font-semibold">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option>Deluxe Suite</option>
              <option>Executive Suite</option>
              <option>Presidential Suite</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Reservation;

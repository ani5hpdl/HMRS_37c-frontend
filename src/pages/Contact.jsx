import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Message sent! (placeholder functionality)");
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <section className="text-center py-16 bg-white shadow">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Reach out to us for inquiries, reservations, or any questions.
        </p>
      </section>

      {/* ===== Contact Info ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            We’re here to answer your questions or help with your reservation.
          </p>
          <div className="space-y-2">
            <p><strong>Phone:</strong> +977 9802322755</p>
            <p><strong>Email:</strong> info@yourhotel.com</p>
            <p><strong>Address:</strong> Lakhuri Bhanjyang, Kathmandu, Nepal</p>
          </div>

          {/* Map placeholder */}
          <div className="mt-6">
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

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

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;

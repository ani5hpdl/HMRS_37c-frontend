import React from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f4faf6] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        <h1 className="text-xl font-bold mb-8">Hotel Management</h1>
        <nav className="space-y-3 text-sm">
          {[
            "Dashboard",
            "Reservation",
            "Rooms",
            "Messages",
            "Housekeeping",
            "Inventory",
            "Calendar",
            "Financials",
            "Reviews",
            "Concierge",
          ].map((item, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded-lg cursor-pointer ${
                item === "Dashboard"
                  ? "bg-lime-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                placeholder="Search room, guest, booking"
                className="pl-9 pr-4 py-2 rounded-lg border text-sm"
              />
            </div>
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                className="rounded-full"
              />
              <span className="text-sm font-medium">Isha Gautam</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["New Bookings", "Check‑In", "Check‑Out", "Total Revenue"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm"
              >
                <p className="text-sm text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold mt-2">
                  {i === 3 ? "$123,980" : [840, 231, 124][i]}
                </h3>
                <span className="text-xs text-green-600">↑ from last week</span>
              </div>
            )
          )}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Room Availability */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Room Availability</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Occupied</span><span>286</span></div>
              <div className="flex justify-between"><span>Reserved</span><span>87</span></div>
              <div className="flex justify-between"><span>Available</span><span>32</span></div>
              <div className="flex justify-between"><span>Not Ready</span><span>13</span></div>
            </div>
          </div>

          {/* Revenue Graph Placeholder */}
          <div className="bg-white p-5 rounded-2xl shadow-sm col-span-2">
            <h3 className="font-semibold mb-4">Revenue (Last 6 Months)</h3>
            <div className="h-48 flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Platform */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Booking by Platform</h3>
            <ul className="text-sm space-y-2">
              <li>Direct Booking – 61%</li>
              <li>Booking.com – 12%</li>
              <li>Agoda – 11%</li>
              <li>Airbnb – 9%</li>
              <li>Others – 7%</li>
            </ul>
          </div>

          {/* Tasks */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Tasks</h3>
              <Plus className="w-4 h-4" />
            </div>
            <ul className="text-sm space-y-3">
              <li>🧹 Restock housekeeping supplies</li>
              <li>🏊 Inspect pool area</li>
              <li>📋 Guest check‑out inspection</li>
            </ul>
          </div>

          {/* Rating */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Overall Rating</h3>
            <p className="text-3xl font-bold text-lime-600">4.65</p>
            <p className="text-sm text-gray-500">Impressive</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Cleanliness</span><span>4.7</span></div>
              <div className="flex justify-between"><span>Service</span><span>4.6</span></div>
              <div className="flex justify-between"><span>Comfort</span><span>4.8</span></div>
              <div className="flex justify-between"><span>Location</span><span>4.5</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import RoomList from "../components/Roomlist.jsx";
import RoomDetail from "../components/Roomdetail.jsx";


export default function Rooms() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Rooms</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Room list */}
          <div className="lg:col-span-2">
            <RoomList />
          </div>

          {/* Right: Room detail */}
          <div>
            <RoomDetail />
          </div>
        </div>
      </main>
    </div>
  );
}


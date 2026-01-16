import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservation from "./pages/Reservation";
import Messages from "./pages/Messages";
import Calender from "./pages/Calender";
import Review from "./pages/Review";
import HousekeepingDashboard from "./pages/Housekeeping";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/review" element={<Review />} />
        <Route path="/housekeeping" element={<HousekeepingDashboard />} />
        <Route path="/inventory" element={<Inventory />} />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login runs first */}
        <Route path="/" element={<Login />} />

        {/* After login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms"  element={<Rooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/calender" element={<Calender/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

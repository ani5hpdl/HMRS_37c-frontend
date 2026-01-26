import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

/* ---------- Admin Imports ---------- */
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservation from "./pages/Reservation";
import Calendar from "./pages/Calender";
import Review from "./pages/Review";
import HousekeepingDashboard from "./pages/Housekeeping";
import Inventory from "./pages/Inventory";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";
import RoomTypes from "./pages/RoomTypes";
import UserManagement from "./pages/UserManagement";

import Header from "./components/Header";
import AdminNav from "./components/AdminNav";
import ProtectedRoute from "./protected/ProtectedRoute";

/* ---------- User Imports ---------- */
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import RoomsBooking from "./pages/RoomsBooking";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import ForgotPassword from "./pages/Forgotpassword";
// import Profile from "./pages/Profile";

/* ---------- Shared ---------- */
import NotFoundPage from "./pages/Error";
import UserRooms from "./pages/UserRooms";

/* ---------- Admin Layout ---------- */
const AdminLayout = ({ header, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex flex-col flex-1">
        <Header {...header} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

/* ---------- User Layout ---------- */
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Toaster />

      <Routes>
        {/* ---------- Auth ---------- */}
        <Route path="/login" element={<Login />} />

        {/* ---------- User Routes ---------- */}
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />

        <Route
          path="/register"
          element={
            <UserLayout>
              <Register />
            </UserLayout>
          }
        />

        <Route
          path="/rooms"
          element={
            <UserLayout>
              <UserRooms />
            </UserLayout>
          }
        />

        <Route
          path="/rooms-booking"
          element={
            <UserLayout>
              <RoomsBooking />
            </UserLayout>
          }
        />

        <Route
          path="/amenities"
          element={
            <UserLayout>
              <Amenities />
            </UserLayout>
          }
        />

        <Route
          path="/gallery"
          element={
            <UserLayout>
              <Gallery />
            </UserLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />

        <Route
          path="/forgotpassword"
          element={
            <UserLayout>
              <ForgotPassword />
            </UserLayout>
          }
        />

        {/* <Route
          path="/profile"
          element={
            <UserLayout>
              <Profile />
            </UserLayout>
          }
        /> */}

        {/* ---------- Admin Routes ---------- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Dashboard",
                    subtitle: "Overview of hotel performance",
                  }}
                >
                  <Dashboard />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/admin/rooms"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Rooms",
                    subtitle: "Manage room availability and pricing",
                  }}
                >
                  <Rooms />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/room-types"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Room Types",
                    subtitle: "Manage room categories",
                  }}
                >
                  <RoomTypes />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/reservation"
          element={
            <ProtectedRoute allowedRoles={["admin"]} element={<Reservation />} />
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Calendar",
                    subtitle: "Booking schedule overview",
                  }}
                >
                  <Calendar />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Inventory",
                    subtitle: "Track hotel supplies",
                  }}
                >
                  <Inventory />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/housekeeping"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Housekeeping",
                    subtitle: "Room cleaning status",
                  }}
                >
                  <HousekeepingDashboard />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Expenses",
                    subtitle: "Track operational costs",
                  }}
                >
                  <Expenses />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Invoices",
                    subtitle: "Guest billing & payments",
                  }}
                >
                  <Invoices />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "User Management",
                    subtitle: "Manage staff permissions",
                  }}
                >
                  <UserManagement />
                </AdminLayout>
              }
            />
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              element={
                <AdminLayout
                  header={{
                    title: "Reviews",
                    subtitle: "Guest feedback & ratings",
                  }}
                >
                  <Review />
                </AdminLayout>
              }
            />
          }
        />

        {/* ---------- 404 ---------- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

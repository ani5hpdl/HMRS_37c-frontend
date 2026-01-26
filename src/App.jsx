import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import "./index.css";

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
import RoomTypes from './pages/RoomTypes';
import UserManagement from './pages/UserManagement';

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProtectedRoute from './protected/ProtectedRoute';
import NotFoundPage from './pages/Error';
import AdminNav from './components/AdminNav';

const MainLayout = ({ header, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen  bg-gray-50">
      <AdminNav
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex flex-col flex-1">
        <Header {...header} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Toaster />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
           <ProtectedRoute allowedRoles={['admin']} element={
             <MainLayout
              header={{
                title: "Dashboard",
                subtitle: "Overview of hotel performance"
              }}
            >
              <Dashboard />
            </MainLayout>
           }/>
          }
        />

        <Route
          path="/rooms"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "Rooms",
                  subtitle: "Manage room availability and pricing"
                }}
              >
                <Rooms />
              </MainLayout>
            }/>
        }
        />

        <Route
          path="/rooms-types"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "Rooms Types",
                  subtitle: "Manage room categories and features"
                }}
              >
                <RoomTypes />
              </MainLayout>
            }/>
        }
        />

        <Route
          path="/reservation"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
                <Reservation />
            }/>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "Calendar",
                  subtitle: "Booking schedule overview"
                }}
              >
                <Calendar />
              </MainLayout>
            }/>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
              header={{
                title: "Inventory",
                subtitle: "Track hotel supplies"
              }}
            >
              <Inventory />
            </MainLayout>
            }/>
          }
        />

        <Route
          path="/housekeeping"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
              header={{
                title: "Housekeeping",
                subtitle: "Room cleaning status"
              }}
            >
              <HousekeepingDashboard />
            </MainLayout>
            }/>
          }
        />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "Expenses",
                  subtitle: "Track operational costs"
                }}
              >
                <Expenses />
              </MainLayout>
            }/>
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "Invoices",
                  subtitle: "Guest billing & payments"
                }}
              >
                <Invoices />
              </MainLayout>
            }/>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
                header={{
                  title: "User Management",
                  subtitle: "Manage staff permissions"
                }}
              >
                <UserManagement />
              </MainLayout>
            }/>
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute allowedRoles={['admin']} element={
              <MainLayout
              header={{
                title: "Reviews",
                subtitle: "Guest feedback & ratings"
              }}
            >
              <Review />
            </MainLayout>
            }/>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
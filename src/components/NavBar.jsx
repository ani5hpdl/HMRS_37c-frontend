import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, MessageSquare, Package, DollarSign, Star, Users, Bed, Menu } from 'lucide-react';

const NavBar = ({ isSidebarOpen = true, onToggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/dashboard' },
    { id: 'reservation', icon: Calendar, label: 'Reservation', path: '/reservation' },
    { id: 'rooms', icon: Bed, label: 'Rooms', path: '/rooms' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/messages', badge: 3 },
    { id: 'housekeeping', icon: Package, label: 'Housekeeping', path: '/housekeeping' },
    { id: 'inventory', icon: Package, label: 'Inventory', path: '/inventory' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calender' },
    { id: 'financials', icon: DollarSign, label: 'Financials', path: '/finances' },
    { id: 'reviews', icon: Star, label: 'Reviews', path: '/reviews' },
    { id: 'concierge', icon: Users, label: 'Concierge', path: '/concierge' }
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col shadow-sm`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        {isSidebarOpen && (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></div>
              </div>
            </div>
            <span className="font-bold text-xl text-gray-800">LUXE STAY</span>
          </Link>
        )}
        {onToggleSidebar && (
          <button onClick={onToggleSidebar} className="text-gray-500 hover:text-gray-700">
            <Menu size={20} />
          </button>
        )}
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 p-3 overflow-y-auto">
        {menuItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-colors text-sm ${
              isActiveRoute(item.path)
                ? 'bg-lime-100 text-gray-900 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={18} />
            {isSidebarOpen && <span>{item.label}</span>}
            {item.badge && isSidebarOpen && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Promo Card */}
      {isSidebarOpen && (
        <div className="p-4">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
            <div className="bg-white rounded-lg p-3 mb-3 text-center shadow-sm">
              <div className="text-3xl">📊</div>
            </div>
            <h3 className="font-bold text-sm mb-1 text-gray-800">Elevate Hospitality Standards</h3>
            <p className="text-xs text-gray-600 mb-3">Enhanced Reporting, Faster Check-Ins, & Integrated Marketing</p>
            <button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors">
              Update Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
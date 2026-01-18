import React, { useState } from 'react';
import { LayoutDashboard, Calendar, MessageSquare, Package, Star, Users, DollarSign, Home, Bed, ClipboardList, Menu, Search, Bell, MoreVertical, Plus, ChevronDown, TrendingUp, TrendingDown, X, Check } from 'lucide-react';
import NavBar from '../components/NavBar';

const LodifyDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 6 Months');
  const [reservationPeriod, setReservationPeriod] = useState('Last 7 Days');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, date: 'June 19, 2028', title: 'Set Up Conference Room B for 10 AM Meeting', color: 'bg-emerald-100', completed: false },
    { id: 2, date: 'June 19, 2028', title: 'Restock Housekeeping Supplies on 3rd Floor', color: 'bg-lime-100', completed: false },
    { id: 3, date: 'June 20, 2028', title: 'Inspect and Clean the Pool Area', color: 'bg-emerald-100', completed: false },
    { id: 4, date: 'June 20, 2028', title: 'Check-In Assistance During Peak Hours (4 PM - 6 PM)', color: 'bg-lime-100', completed: false }
  ]);

  // Sample data
  const stats = {
    newBookings: { value: 840, change: 8.70, trend: 'up' },
    checkIn: { value: 231, change: 3.56, trend: 'up' },
    checkOut: { value: 124, change: 1.08, trend: 'down' },
    totalRevenue: { value: 123980, change: 5.70, trend: 'up' }
  };

  const roomAvailability = {
    occupied: 286,
    reserved: 87,
    available: 32,
    notReady: 13
  };

  const ratings = {
    overall: 4.6,
    reviews: 2240,
    facilities: 4.4,
    cleanliness: 4.7,
    services: 4.6,
    comfort: 4.8,
    location: 4.5
  };

  const bookingPlatforms = [
    { name: 'Direct Booking', percentage: 61, color: 'bg-emerald-200' },
    { name: 'Booking.com', percentage: 12, color: 'bg-emerald-300' },
    { name: 'Agoda', percentage: 11, color: 'bg-lime-200' },
    { name: 'Airbnb', percentage: 9, color: 'bg-lime-300' },
    { name: 'Hotels.com', percentage: 5, color: 'bg-yellow-200' },
    { name: 'Others', percentage: 2, color: 'bg-yellow-300' }
  ];

  const activities = [
    { time: '11:45 PM', title: 'Conference Room Setup', desc: 'Events Team set up Conference Room B for 10 AM meeting, including AV equipment and refreshments.', icon: 'calendar', color: 'bg-yellow-100' },
    { time: '11:30 AM', title: 'Guest Check-Out', desc: 'Sarah Johnson completed check-out process and updated room availability for Room 305.', icon: 'checkout', color: 'bg-emerald-100' },
    { time: '11:00 AM', title: 'Room Cleaning Completed', desc: 'Maria Gonzales cleaned and prepared Room 204 for next guest arrival.', icon: 'clean', color: 'bg-lime-100' }
  ];

  const allBookings = [
    { id: 'LG-B00108', guest: 'Angus Cooper', roomType: 'Deluxe', room: 'Room 101', duration: '3 nights', checkIn: 'June 19, 2028', checkOut: 'June 22, 2028', status: 'Checked-In' },
    { id: 'LG-B00109', guest: 'Catherine Lopp', roomType: 'Standard', room: 'Room 202', duration: '2 nights', checkIn: 'June 19, 2028', checkOut: 'June 21, 2028', status: 'Checked-In' },
    { id: 'LG-B00110', guest: 'John Smith', roomType: 'Deluxe', room: 'Room 305', duration: '4 nights', checkIn: 'June 20, 2028', checkOut: 'June 24, 2028', status: 'Reserved' },
    { id: 'LG-B00111', guest: 'Emma Wilson', roomType: 'Standard', room: 'Room 401', duration: '1 night', checkIn: 'June 18, 2028', checkOut: 'June 19, 2028', status: 'Checked-Out' }
  ];

  const revenueData = [
    { month: 'Dec 2027', value: 180000 },
    { month: 'Jan 2028', value: 220000 },
    { month: 'Feb 2028', value: 315060 },
    { month: 'Mar 2028', value: 250000 },
    { month: 'Apr 2028', value: 280000 },
    { month: 'May 2028', value: 290000 }
  ];

  const reservationData = [
    { day: '12 Jun', booked: 45, canceled: 12 },
    { day: '13 Jun', booked: 55, canceled: 8 },
    { day: '14 Jun', booked: 48, canceled: 15 },
    { day: '15 Jun', booked: 62, canceled: 10 },
    { day: '16 Jun', booked: 70, canceled: 5 },
    { day: '17 Jun', booked: 58, canceled: 18 },
    { day: '18 Jun', booked: 85, canceled: 12 }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };

  const filteredBookings = allBookings.filter(booking => {
    const matchesSearch = booking.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.room.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const addTask = () => {
    if (newTask.trim()) {
      const colors = ['bg-emerald-100', 'bg-lime-100', 'bg-yellow-100'];
      setTasks([...tasks, {
        id: tasks.length + 1,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        title: newTask,
        color: colors[Math.floor(Math.random() * colors.length)],
        completed: false
      }]);
      setNewTask('');
      setShowTaskModal(false);
    }
  };

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Reservation', icon: Calendar },
    { name: 'Rooms', icon: Home },
    { name: 'Messages', icon: MessageSquare, badge: 2 },
    { name: 'Housekeeping', icon: Users },
    { name: 'Inventory', icon: Package },
    { name: 'Calendar', icon: Calendar },
    { name: 'Financials', icon: DollarSign },
    { name: 'Reviews', icon: Star },
    { name: 'Concierge', icon: ClipboardList }
  ];

  return (
    <div className="flex h-screen bg-gray-50">

    <NavBar/>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search room, guest, book, etc"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jaylon" alt="Admin" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-sm">Jaylon Dorwart</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-8">
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-gray-600">New Bookings</div>
                <Calendar size={20} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold mb-2">{stats.newBookings.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} className="text-emerald-600" />
                <span className="text-emerald-600 font-medium">{stats.newBookings.change}%</span>
                <span className="text-gray-500">from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-gray-600">Check-In</div>
                <div className="text-emerald-600">→</div>
              </div>
              <div className="text-3xl font-bold mb-2">{stats.checkIn.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} className="text-emerald-600" />
                <span className="text-emerald-600 font-medium">{stats.checkIn.change}%</span>
                <span className="text-gray-500">from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-gray-600">Check-Out</div>
                <div className="text-emerald-600">←</div>
              </div>
              <div className="text-3xl font-bold mb-2">{stats.checkOut.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingDown size={16} className="text-red-500" />
                <span className="text-red-500 font-medium">{stats.checkOut.change}%</span>
                <span className="text-gray-500">from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-gray-600">Total Revenue</div>
                <DollarSign size={20} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold mb-2">{formatCurrency(stats.totalRevenue.value)}</div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} className="text-emerald-600" />
                <span className="text-emerald-600 font-medium">{stats.totalRevenue.change}%</span>
                <span className="text-gray-500">from last week</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Room Availability */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Room Availability</h3>
                <button className="hover:bg-gray-100 p-2 rounded transition-colors">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600 mb-1">Occupied</div>
                  <div className="text-3xl font-bold">{roomAvailability.occupied}</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600 mb-1">Reserved</div>
                  <div className="text-3xl font-bold">{roomAvailability.reserved}</div>
                </div>
                <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-400 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600 mb-1">Available</div>
                  <div className="text-3xl font-bold">{roomAvailability.available}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600 mb-1">Not Ready</div>
                  <div className="text-3xl font-bold">{roomAvailability.notReady}</div>
                </div>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Revenue</h3>
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 bg-lime-100 rounded-lg text-sm font-medium border-none outline-none cursor-pointer hover:bg-lime-200 transition-colors"
                >
                  <option>Last 6 Months</option>
                  <option>Last 3 Months</option>
                  <option>Last Month</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 600 256">
                  {[0, 100000, 200000, 300000, 400000].map((val, i) => (
                    <g key={i}>
                      <line x1="40" y1={256 - (val / 400000) * 220 - 20} x2="600" y2={256 - (val / 400000) * 220 - 20} stroke="#f0f0f0" strokeWidth="1" />
                      <text x="5" y={256 - (val / 400000) * 220 - 15} fontSize="10" fill="#999">${val/1000}k</text>
                    </g>
                  ))}
                  
                  <path
                    d={`M 60 ${256 - (revenueData[0].value / 400000) * 220 - 20} ${revenueData.map((d, i) => `L ${60 + (i / (revenueData.length - 1)) * 520} ${256 - (d.value / 400000) * 220 - 20}`).join(' ')}`}
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="3"
                  />
                  
                  <path
                    d={`M 60 ${256 - (revenueData[0].value / 400000) * 220 - 20} ${revenueData.map((d, i) => `L ${60 + (i / (revenueData.length - 1)) * 520} ${256 - (d.value / 400000) * 220 - 20}`).join(' ')} L 580 236 L 60 236 Z`}
                    fill="url(#gradient)"
                    opacity="0.3"
                  />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#84cc16" />
                      <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  <circle cx={60 + (2 / 5) * 520} cy={256 - (315060 / 400000) * 220 - 20} r="6" fill="#84cc16" className="cursor-pointer" />
                  <rect x={60 + (2 / 5) * 520 - 35} y={256 - (315060 / 400000) * 220 - 50} width="70" height="25" fill="#84cc16" rx="4" />
                  <text x={60 + (2 / 5) * 520} y={256 - (315060 / 400000) * 220 - 32} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
                    $315,060
                  </text>
                  
                  {revenueData.map((d, i) => (
                    <text key={i} x={60 + (i / (revenueData.length - 1)) * 520} y="252" textAnchor="middle" fontSize="11" fill="#666">
                      {d.month.split(' ')[0]}
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Overall Rating */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Overall Rating</h3>
                <button className="hover:bg-gray-100 p-2 rounded transition-colors">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold">{ratings.overall}</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(ratings.overall) ? "#fbbf24" : "none"} stroke="#fbbf24" />
                    ))}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">Impressive</div>
                  <div className="text-xs text-gray-500">from {ratings.reviews.toLocaleString()} reviews</div>
                </div>
              </div>
              <div className="space-y-3">
                {Object.entries({ facilities: ratings.facilities, cleanliness: ratings.cleanliness, services: ratings.services, comfort: ratings.comfort, location: ratings.location }).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize text-gray-600">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-lime-400 rounded-full transition-all duration-500" style={{ width: `${(value / 5) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservations */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Reservations</h3>
                <select 
                  value={reservationPeriod}
                  onChange={(e) => setReservationPeriod(e.target.value)}
                  className="px-4 py-2 bg-lime-100 rounded-lg text-sm font-medium border-none outline-none cursor-pointer hover:bg-lime-200 transition-colors"
                >
                  <option>Last 7 Days</option>
                  <option>Last 14 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-48 flex items-end justify-between gap-1">
                {reservationData.map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-lime-200 rounded-t transition-all group-hover:bg-lime-300" style={{ height: `${(data.booked / 100) * 100}%` }}></div>
                    <div className="w-full bg-emerald-100 rounded-t transition-all group-hover:bg-emerald-200" style={{ height: `${(data.canceled / 100) * 100}%` }}></div>
                    <div className="text-xs text-gray-500 mt-2">{data.day.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lime-200 rounded"></div>
                  <span className="text-gray-600">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-100 rounded"></div>
                  <span className="text-gray-600">Canceled</span>
                </div>
              </div>
            </div>

            {/* Booking by Platform */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Booking by Platform</h3>
                <button className="hover:bg-gray-100 p-2 rounded transition-colors">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {bookingPlatforms.reduce((acc, platform, i) => {
                    const prevPercentage = acc.total;
                    const strokeDasharray = `${platform.percentage} ${100 - platform.percentage}`;
                    const strokeDashoffset = -prevPercentage;
                    acc.total += platform.percentage;
                    
                    const strokeColor = platform.color.includes('emerald-200') ? '#a7f3d0' :
                                       platform.color.includes('emerald-300') ? '#6ee7b7' :
                                       platform.color.includes('lime-200') ? '#d9f99d' :
                                       platform.color.includes('lime-300') ? '#bef264' :
                                       platform.color.includes('yellow-200') ? '#fef08a' : '#fde047';
                    
                    acc.circles.push(
                      <circle
                        key={i}
                        cx="50"
                        cy="50"
                        r="15.915"
                        fill="transparent"
                        stroke={strokeColor}
                        strokeWidth="20"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    );
                    return acc;
                  }, { total: 0, circles: [] }).circles}
                </svg>
              </div>
              <div className="space-y-2">
                {bookingPlatforms.map((platform, i) => (
                  <div key={i} className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                      <span className="text-gray-600">{platform.name}</span>
                    </div>
                    <span className="font-semibold">{platform.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Tasks */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Tasks</h3>
                <button 
                  onClick={() => setShowTaskModal(true)}
                  className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center hover:bg-lime-200 transition-colors"
                >
                  <Plus size={20} className="text-lime-700" />
                </button>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {tasks.map((task) => (
                  <div key={task.id} className={`${task.color} rounded-lg p-4 relative group ${task.completed ? 'opacity-50' : ''}`}>
                    <div className="flex items-start gap-2">
                      <button
                        onClick={() => toggleTaskComplete(task.id)}
                        className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-emerald-500'
                        }`}
                      >
                        {task.completed && <Check size={14} className="text-white" />}
                      </button>
                      <div className="flex-1">
                        <div className="text-xs text-gray-600 mb-1">{task.date}</div>
                        <div className={`text-sm font-medium pr-6 ${task.completed ? 'line-through' : ''}`}>{task.title}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 hover:bg-red-100 p-1 rounded transition-all"
                    >
                      <X size={16} className="text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Recent Activities</h3>
                <button className="hover:bg-gray-100 p-2 rounded transition-colors">
                  <MoreVertical size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {activities.map((activity, i) => (
                  <div key={i} className="flex gap-4 hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {activity.icon === 'calendar' && <Calendar size={20} className="text-yellow-700" />}
                      {activity.icon === 'checkout' && <span className="text-emerald-700 font-bold">→</span>}
                      {activity.icon === 'clean' && <Home size={20} className="text-lime-700" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-semibold">{activity.title}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                      <div className="text-sm text-gray-600">{activity.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking List */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">Booking List</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search guest, status, etc"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                </div>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 bg-yellow-100 rounded-lg text-sm font-medium border-none outline-none cursor-pointer hover:bg-yellow-200 transition-colors"
                >
                  <option>All Status</option>
                  <option>Checked-In</option>
                  <option>Checked-Out</option>
                  <option>Reserved</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Booking ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Guest Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Room Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Room Number</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Duration</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Check-In & Check-Out</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                        <td className="py-4 px-4 text-sm font-mono">{booking.id}</td>
                        <td className="py-4 px-4 text-sm font-medium">{booking.guest}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.roomType === 'Deluxe' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {booking.roomType}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm">{booking.room}</td>
                        <td className="py-4 px-4 text-sm">{booking.duration}</td>
                        <td className="py-4 px-4 text-sm">{booking.checkIn} - {booking.checkOut}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'Checked-In' ? 'bg-emerald-100 text-emerald-800' :
                            booking.status === 'Checked-Out' ? 'bg-gray-100 text-gray-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="py-8 text-center text-gray-500">
                        No bookings found matching your search
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Add New Task</h3>
              <button 
                onClick={() => setShowTaskModal(false)}
                className="hover:bg-gray-100 p-1 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Enter task description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 mb-4"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={addTask}
                className="flex-1 bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition-colors font-medium"
              >
                Add Task
              </button>
              <button
                onClick={() => setShowTaskModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LodifyDashboard;
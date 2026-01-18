import React, { useState } from 'react';
import { Home, Calendar, MessageSquare, Package, DollarSign, Star, Users, Menu, Search, ChevronDown, Bed, User, Wifi, Tv, Coffee, Wind, Lock, Droplets, Bath, Sun, Clock, Cookie, X, Plus } from 'lucide-react';
import NavBar from '../components/NavBar';

const HotelManagementSystem = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeTab, setActiveTab] = useState('rooms');
  const [sortBy, setSortBy] = useState('popular');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'Standard',
      size: 25,
      bedType: 'Queen Bed',
      guests: 2,
      price: 100,
      status: 'Occupied',
      availability: { occupied: 22, total: 30 },
      description: 'Comfortable, affordable stay for solo travelers or couples. Queen bed, en-suite bathroom, work desk, essential amenities.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    },
    {
      id: 2,
      name: 'Deluxe',
      size: 35,
      bedType: 'King Bed',
      guests: 2,
      price: 150,
      status: 'Available',
      availability: { occupied: 18, total: 25 },
      description: 'More space and luxury. King bed, separate seating, larger desk, 55-inch TV, En-suite bathroom with bathtub and shower.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    },
    {
      id: 3,
      name: 'Suite',
      size: 50,
      bedType: 'King Bed',
      guests: 3,
      price: 250,
      status: 'Available',
      availability: { occupied: 8, total: 10 },
      description: 'Spacious and private with separate living and sleeping areas. King bed, furnished living room, kitchenette - ideal for extended stays.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    },
    {
      id: 4,
      name: 'Family',
      size: 45,
      bedType: '2 Queen Beds',
      guests: 4,
      price: 200,
      status: 'Occupied',
      availability: { occupied: 12, total: 15 },
      description: 'Designed for comfort and practicality. Two queen beds, bunk beds accommodate up to 4 guests. En-suite bathroom, seating area, 50-inch TV.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    },
    {
      id: 5,
      name: 'Single',
      size: 20,
      bedType: 'Single Bed',
      guests: 1,
      price: 70,
      status: 'Available',
      availability: { occupied: 17, total: 20 },
      description: 'Features a single bed, en-suite bathroom, work desk, and essential amenities for a practical and functional stay.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    }
  ]);

  const [newRoom, setNewRoom] = useState({
    name: '',
    size: '',
    bedType: '',
    guests: '',
    price: '',
    status: 'Available',
    totalRooms: '',
    description: ''
  });

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'reservation', icon: Calendar, label: 'Reservation' },
    { id: 'rooms', icon: Bed, label: 'Rooms' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', badge: 3 },
    { id: 'housekeeping', icon: Package, label: 'Housekeeping' },
    { id: 'inventory', icon: Package, label: 'Inventory' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'financials', icon: DollarSign, label: 'Financials' },
    { id: 'reviews', icon: Star, label: 'Reviews' },
    { id: 'concierge', icon: Users, label: 'Concierge' }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.bedType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'available' && room.status === 'Available') ||
                         (filterType === 'occupied' && room.status === 'Occupied');
    return matchesSearch && matchesFilter;
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === 'popular') return 0;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'size') return b.size - a.size;
    return 0;
  });

  const handleAddRoom = () => {
    if (!newRoom.name || !newRoom.size || !newRoom.bedType || !newRoom.guests || !newRoom.price || !newRoom.totalRooms) {
      alert('Please fill in all required fields');
      return;
    }

    const room = {
      id: rooms.length + 1,
      name: newRoom.name,
      size: parseInt(newRoom.size),
      bedType: newRoom.bedType,
      guests: parseInt(newRoom.guests),
      price: parseInt(newRoom.price),
      status: newRoom.status,
      availability: { occupied: 0, total: parseInt(newRoom.totalRooms) },
      description: newRoom.description || `Comfortable ${newRoom.name} room with ${newRoom.bedType}.`,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=250&fit=crop'
      ],
      features: ['Private balcony (where applicable)', 'Work desk with ergonomic chair', 'Spacious layout with a modern design', 'Large windows offering city or garden views'],
      facilities: ['High-speed Wi-Fi', 'Flat-screen TV', 'In-room safe', 'Air conditioning', 'Mini-fridge', 'Coffee/tea maker'],
      amenities: ['Complimentary bottled water', 'Coffee and tea making facilities', 'Premium bedding and linens', 'Ensuite bathroom with shower and bathtub', 'Luxury toiletries', 'Hairdryer', 'Bathrobe and slippers', '24-hour room service']
    };

    setRooms([...rooms, room]);
    setShowAddRoomModal(false);
    setNewRoom({
      name: '',
      size: '',
      bedType: '',
      guests: '',
      price: '',
      status: 'Available',
      totalRooms: '',
      description: ''
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <NavBar/>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="flex h-full">
          {/* Room List */}
          <div className="flex-1 p-6 bg-gray-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Rooms</h1>
              
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg relative transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center font-bold text-gray-800 text-sm">
                    JD
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-gray-800">Jaylon Dorwart</div>
                    <div className="text-gray-500">Admin</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Search and Filters */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search room type, number, etc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm"
                />
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 cursor-pointer text-sm text-gray-700"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="size">Size</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" size={16} />
                </div>
                
                <div className="relative">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 cursor-pointer text-sm text-gray-700"
                  >
                    <option value="all">All Type</option>
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" size={16} />
                </div>
                
                <button 
                  onClick={() => setShowAddRoomModal(true)}
                  className="px-5 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-lg font-semibold transition-colors text-sm text-gray-800 flex items-center gap-2"
                >
                  <Plus size={18} />
                  Add Room
                </button>
              </div>
            </div>

            {/* Room Cards */}
            <div className="space-y-4">
              {sortedRooms.map(room => (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className="bg-white rounded-xl p-4 flex gap-4 cursor-pointer hover:shadow-lg transition-all border border-gray-200"
                >
                  <img src={room.image} alt={room.name} className="w-32 h-28 object-cover rounded-lg" />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
                        <div className="flex gap-4 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Home size={13} /> {room.size} m²
                          </span>
                          <span className="flex items-center gap-1">
                            <Bed size={13} /> {room.bedType}
                          </span>
                          <span className="flex items-center gap-1">
                            <User size={13} /> {room.guests} guests
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        room.status === 'Available' 
                          ? 'bg-teal-50 text-teal-700' 
                          : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {room.status}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{room.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Availability: <span className="font-semibold text-gray-700">{room.availability.occupied}/{room.availability.total} Rooms</span>
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-800">${room.price}</span>
                        <span className="text-gray-500 text-xs">/night</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Room Detail Sidebar */}
          {selectedRoom && (
            <div className="w-96 bg-white border-l border-gray-200 overflow-auto shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Room Detail</h2>
                  <button className="px-4 py-2 bg-lime-400 hover:bg-lime-500 rounded-lg font-semibold transition-colors text-sm text-gray-800">
                    Edit
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{selectedRoom.name} Room</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedRoom.status === 'Available' 
                        ? 'bg-teal-50 text-teal-700' 
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {selectedRoom.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Occupied: <span className="font-semibold">{selectedRoom.availability.occupied}/{selectedRoom.availability.total} Rooms</span></p>
                </div>

                <div className="mb-6">
                  <img 
                    src={selectedRoom.image} 
                    alt={selectedRoom.name} 
                    className="w-full h-56 object-cover rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setShowImageGallery(true)}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {selectedRoom.gallery.slice(1, 3).map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                        onClick={() => setShowImageGallery(true)}
                      />
                    ))}
                    <div 
                      className="relative cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setShowImageGallery(true)}
                    >
                      <img src={selectedRoom.gallery[3]} className="w-full h-24 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-lime-400 bg-opacity-90 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-gray-800 text-sm">View All</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-gray-600 mb-1">
                        <Home size={14} />
                      </div>
                      <div className="font-semibold text-gray-800">{selectedRoom.size} m²</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-600 mb-1">
                        <Bed size={14} />
                      </div>
                      <div className="font-semibold text-gray-800">{selectedRoom.bedType}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-600 mb-1">
                        <User size={14} />
                      </div>
                      <div className="font-semibold text-gray-800">{selectedRoom.guests} guests</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{selectedRoom.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-gray-800">Features</h4>
                  <div className="space-y-2">
                    {selectedRoom.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded bg-teal-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-gray-800">Facilities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Wifi size={16} className="text-gray-500" />
                      <span>High-speed Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Lock size={16} className="text-gray-500" />
                      <span>In-room safe</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Tv size={16} className="text-gray-500" />
                      <span>Flat-screen TV</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Wind size={16} className="text-gray-500" />
                      <span>Air conditioning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Package size={16} className="text-gray-500" />
                      <span>Mini-fridge</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Coffee size={16} className="text-gray-500" />
                      <span>Coffee/tea maker</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-gray-800">Amenities</h4>
                  <div className="space-y-2">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded bg-teal-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Room Modal */}
      {showAddRoomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-gray-800">Add New Room</h2>
              <button 
                onClick={() => setShowAddRoomModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Room Name *</label>
                  <input
                    type="text"
                    value={newRoom.name}
                    onChange={(e) => setNewRoom({...newRoom, name: e.target.value})}
                    placeholder="e.g., Deluxe"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Size (m²) *</label>
                  <input
                    type="number"
                    value={newRoom.size}
                    onChange={(e) => setNewRoom({...newRoom, size: e.target.value})}
                    placeholder="e.g., 35"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bed Type *</label>
                  <select
                    value={newRoom.bedType}
                    onChange={(e) => setNewRoom({...newRoom, bedType: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  >
                    <option value="">Select bed type</option>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Queen Bed">Queen Bed</option>
                    <option value="King Bed">King Bed</option>
                    <option value="2 Queen Beds">2 Queen Beds</option>
                    <option value="2 King Beds">2 King Beds</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Max Guests *</label>
                  <input
                    type="number"
                    value={newRoom.guests}
                    onChange={(e) => setNewRoom({...newRoom, guests: e.target.value})}
                    placeholder="e.g., 2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Night ($) *</label>
                  <input
                    type="number"
                    value={newRoom.price}
                    onChange={(e) => setNewRoom({...newRoom, price: e.target.value})}
                    placeholder="e.g., 150"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Total Rooms *</label>
                  <input
                    type="number"
                    value={newRoom.totalRooms}
                    onChange={(e) => setNewRoom({...newRoom, totalRooms: e.target.value})}
                    placeholder="e.g., 25"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Status *</label>
                <select
                  value={newRoom.status}
                  onChange={(e) => setNewRoom({...newRoom, status: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
                >
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={newRoom.description}
                  onChange={(e) => setNewRoom({...newRoom, description: e.target.value})}
                  placeholder="Enter room description..."
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm resize-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end sticky bottom-0 bg-white">
              <button
                onClick={() => setShowAddRoomModal(false)}
                className="px-5 py-2.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRoom}
                className="px-5 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-lg font-semibold transition-colors text-sm text-gray-800"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Modal */}
      {showImageGallery && selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button 
            onClick={() => setShowImageGallery(false)}
            className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-2 gap-4">
              {selectedRoom.gallery.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${selectedRoom.name} ${idx + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelManagementSystem;
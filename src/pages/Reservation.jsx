import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Users, Bed, DollarSign, Edit, Trash2, ChevronDown, Menu, Bell, Settings, Search, X } from 'lucide-react';

const GuestProfileDashboard = () => {
  const [activeBooking, setActiveBooking] = useState({
    id: 'LG-B00109',
    confirmationDate: 'June 17, 2024, 8:05 AM',
    roomType: 'Deluxe',
    roomNumber: '101',
    price: 150,
    guests: 2,
    checkIn: 'June 19, 2024',
    checkOut: 'June 22, 2024',
    nights: 3,
    status: 'Booking Confirmed'
  });

  const [guestInfo, setGuestInfo] = useState({
    name: 'Angus Copper',
    id: 'G011-98764323',
    phone: '+1 (555) 789-1234',
    email: 'angus.copper@example.com',
    dob: 'June 15, 1985',
    gender: 'Male',
    address: '123 Main Street, Springfield',
    zipCode: '41254678',
    loyaltyStatus: 'Premium Member',
    points: 15000
  });

  const [bookingHistory, setBookingHistory] = useState([
    {
      id: 'LG-B00109',
      image: '/api/placeholder/80/60',
      bookingDate: 'June 09, 2028, 8:05 AM',
      status: 'Deluxe',
      roomNumber: 'Room 101',
      checkIn: 'June 19, 2024, 4:41 PM',
      checkOut: 'June 21, 2024, 11:41 AM',
      guests: '2 Guests'
    },
    {
      id: 'LG-B00085',
      image: '/api/placeholder/80/60',
      bookingDate: 'March 20, 2028, 9:28 AM',
      status: 'Suite',
      roomNumber: 'Room 305',
      checkIn: 'March 25, 2028, 1:45 PM',
      checkOut: 'March 30, 2028, 11:44 AM',
      guests: '1 Guest'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({...guestInfo});

  const handleEdit = () => {
    if (isEditing) {
      setGuestInfo({...editedInfo});
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedInfo({...guestInfo});
    setIsEditing(false);
  };

  const handleCancelBooking = () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setActiveBooking({...activeBooking, status: 'Cancelled'});
    }
  };

  const calculateTotal = () => {
    const roomTotal = activeBooking.price * activeBooking.nights;
    const extraBed = 50;
    const breakfast = 30;
    const vat = (roomTotal + extraBed + breakfast) * 0.08;
    const cityTax = 49.60;
    return {
      roomTotal,
      extraBed,
      breakfast,
      vat,
      cityTax,
      total: roomTotal + extraBed + breakfast + vat + cityTax
    };
  };

  const pricing = calculateTotal();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
              <span className="text-sm font-bold">≡</span>
            </div>
            <span className="font-bold text-lg">Lodgify</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <Menu size={18} />
              <span>Dashboard</span>
            </div>
            <div className="px-3 py-2 bg-lime-100 text-gray-900 rounded cursor-pointer flex items-center gap-3 font-medium">
              <Calendar size={18} />
              <span>Reservation</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <Users size={18} />
              <span>Rooms</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3 relative">
              <Mail size={18} />
              <span>Messages</span>
              <span className="absolute right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <Users size={18} />
              <span>Housekeeping</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <Search size={18} />
              <span>Inventory</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <Calendar size={18} />
              <span>Calendar</span>
            </div>
            <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-3">
              <DollarSign size={18} />
              <span>Financials</span>
            </div>
          </div>
        </nav>

        {/* Loyalty Program Card */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-lime-100 to-lime-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Loyalty Program</h3>
            <div className="bg-lime-300 text-lime-900 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
              Natural Level
            </div>
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-700">Points Balance</span>
              <span className="font-semibold">{guestInfo.points} points</span>
            </div>
            <div className="w-full bg-lime-300 rounded-full h-2">
              <div className="bg-lime-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <span className="cursor-pointer">←</span>
              <span>Guest Profile</span>
            </div>
            <h1 className="text-2xl font-bold">Guest Profile</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
              <span className="font-medium">Jaydon Donovan</span>
            </div>
            <Settings className="text-gray-600 cursor-pointer" size={20} />
            <Bell className="text-red-500 cursor-pointer" size={20} />
          </div>
        </div>

        <div className="p-6 grid grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-lg font-semibold">Profile</h2>
                <button className="text-gray-400">⋯</button>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <img src="/api/placeholder/80/80" alt="Guest" className="w-20 h-20 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold">{guestInfo.name}</h3>
                  <p className="text-gray-500 text-sm">{guestInfo.id}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-gray-400" />
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedInfo.phone}
                      onChange={(e) => setEditedInfo({...editedInfo, phone: e.target.value})}
                      className="border rounded px-2 py-1 flex-1"
                    />
                  ) : (
                    <span>{guestInfo.phone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} className="text-gray-400" />
                  {isEditing ? (
                    <input 
                      type="email" 
                      value={editedInfo.email}
                      onChange={(e) => setEditedInfo({...editedInfo, email: e.target.value})}
                      className="border rounded px-2 py-1 flex-1"
                    />
                  ) : (
                    <span>{guestInfo.email}</span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{guestInfo.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{guestInfo.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editedInfo.address}
                        onChange={(e) => setEditedInfo({...editedInfo, address: e.target.value})}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      <p className="font-medium">{guestInfo.address}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Zip Code</p>
                    <p className="font-medium">{guestInfo.zipCode}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-lg font-semibold">Booking Info</h2>
                <button className="text-gray-400">⋯</button>
              </div>

              <div className={`inline-block px-3 py-1 rounded text-sm mb-4 ${
                activeBooking.status === 'Booking Confirmed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {activeBooking.status}
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold">Booking ID: {activeBooking.id}</h3>
                <p className="text-sm text-gray-500">{activeBooking.confirmationDate}</p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Room Type</p>
                  <p className="font-semibold">{activeBooking.roomType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Room Number</p>
                  <p className="font-semibold">{activeBooking.roomNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price</p>
                  <p className="font-semibold">${activeBooking.price}/night</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Guest</p>
                  <p className="font-semibold">{activeBooking.guests} Adults</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Check In</p>
                  <p className="font-semibold">{activeBooking.checkIn}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Check Out</p>
                  <p className="font-semibold">{activeBooking.checkOut}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Duration</p>
                <p className="font-semibold">{activeBooking.nights} nights</p>
              </div>

              <div className="bg-gray-50 p-4 rounded mb-6">
                <p className="text-sm text-gray-700">
                  Guest requested extra pillows and towels. Ensuite room service is available upon arrival.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Under Review</p>
                  <p className="font-semibold">{guestInfo.loyaltyStatus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Special Amenities</p>
                  <ul className="text-sm space-y-1">
                    <li>• Complimentary breakfast</li>
                    <li>• Free Wi-Fi</li>
                    <li>• Access to gym and pool</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Extras</p>
                  <p className="text-sm">Airport pickup arranged</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleEdit}
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <Edit size={16} />
                  {isEditing ? 'Save' : 'Edit'}
                </button>
                {isEditing ? (
                  <button 
                    onClick={handleCancel}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                ) : (
                  <button 
                    onClick={handleCancelBooking}
                    className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>

            {/* Booking History */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Booking History</h2>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="Search guest, status, etc."
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  />
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>19 - 24 June, 2028</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b">
                      <th className="pb-3 font-medium">Image</th>
                      <th className="pb-3 font-medium">Booking ID</th>
                      <th className="pb-3 font-medium">Booking Date</th>
                      <th className="pb-3 font-medium">Room Type</th>
                      <th className="pb-3 font-medium">Room Number</th>
                      <th className="pb-3 font-medium">Check-In</th>
                      <th className="pb-3 font-medium">Check-Out</th>
                      <th className="pb-3 font-medium">Guests</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingHistory.map((booking) => (
                      <tr key={booking.id} className="border-b hover:bg-gray-50">
                        <td className="py-3">
                          <img src={booking.image} alt="Room" className="w-16 h-12 rounded object-cover" />
                        </td>
                        <td className="py-3 text-sm">{booking.id}</td>
                        <td className="py-3 text-sm">{booking.bookingDate}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            booking.status === 'Deluxe' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 text-sm">{booking.roomNumber}</td>
                        <td className="py-3 text-sm">{booking.checkIn}</td>
                        <td className="py-3 text-sm">{booking.checkOut}</td>
                        <td className="py-3 text-sm">{booking.guests}</td>
                        <td className="py-3">
                          <button className="text-gray-400 hover:text-gray-600">⋯</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Room Info & Price */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Room Info</h3>
                <button className="text-blue-600 text-sm">View Detail</button>
              </div>
              
              <img src="/api/placeholder/300/200" alt="Room" className="w-full rounded-lg mb-3" />
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="font-semibold">28 m²</span>
                <span className="flex items-center gap-1">
                  <Bed size={16} />
                  King Bed
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  2 guests
                </span>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4">
                <h4 className="font-semibold mb-2 flex items-center justify-between">
                  <span>Price Summary</span>
                  <span className="bg-lime-300 text-lime-900 text-xs px-2 py-0.5 rounded">Paid</span>
                </h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room and offers</span>
                    <span className="font-medium">${pricing.roomTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Extras</span>
                    <span className="font-medium">${pricing.extraBed.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">8% VAT</span>
                    <span className="font-medium">${pricing.vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">City Tax</span>
                    <span className="font-medium">${pricing.cityTax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 flex justify-between font-bold">
                    <span>Total Price</span>
                    <span>${pricing.total.toFixed(2)}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-3">
                  Invoice sent to corporate account, payment confirmed by IBC Corporation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestProfileDashboard;
import React, { useState } from 'react';
import { Eye, Edit2, Settings, Bell, Calendar, Search, ChevronDown, MoreHorizontal, Phone, Mail, Bed, Users } from 'lucide-react';

const LodgifyReservationSystem = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedGuest, setSelectedGuest] = useState(null);

  const reservations = [
    {
      id: 'LG-B00109',
      guest: 'Angus Copper',
      guestId: 'LG-B00108',
      room: 'Deluxe 101',
      roomNumber: '101',
      request: 'Late Check-Out',
      duration: '3 nights',
      checkIn: 'June 19, 2028',
      checkOut: 'June 22, 2028',
      status: 'Confirmed',
      phone: '+1 (555) 789-1234',
      email: 'angus.copper@example.com',
      dob: 'June 15, 1985',
      gender: 'Male',
      nationality: 'American',
      passport: 'A12345678',
      loyaltyProgram: 'Platinum Member',
      points: '15,000 points',
      tierLevel: 'Elite',
      guests: '2 Adults',
      roomType: 'Deluxe',
      price: '$150/night',
      totalPrice: '$535.50',
      amenities: ['Complimentary breakfast', 'Free Wi-Fi', 'Access to gym and pool'],
      transportation: 'Airport pickup arranged',
      notes: 'Guest requested extra pillows and towels. Ensure room service is available upon arrival.'
    },
    {
      id: 'LG-B00109',
      guest: 'Catherine Lops',
      guestId: 'LG-B00109',
      room: 'Standard 202',
      roomNumber: '202',
      request: 'None',
      duration: '2 nights',
      checkIn: 'June 19, 2028',
      checkOut: 'June 21, 2028',
      status: 'Confirmed'
    },
    {
      id: 'LG-B00110',
      guest: 'Edgar Irving',
      guestId: 'LG-B00110',
      room: 'Suite 303',
      roomNumber: '303',
      request: 'Extra Pillows',
      duration: '5 nights',
      checkIn: 'June 19, 2028',
      checkOut: 'June 24, 2028',
      status: 'Pending'
    }
  ];

  const bookingHistory = [
    {
      id: 'LG-B00109',
      date: 'June 09, 2028',
      roomType: 'Deluxe',
      roomNumber: 'Room 101',
      checkIn: 'June 19, 2024',
      checkOut: 'June 21, 2024',
      guests: '2 Guests'
    },
    {
      id: 'LG-B00085',
      date: 'March 20, 2028',
      roomType: 'Suite',
      roomNumber: 'Room 305',
      checkIn: 'March 25, 2028',
      checkOut: 'March 30, 2028',
      guests: '1 Guest'
    }
  ];

  const ReservationList = () => (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-yellow-300 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-yellow-400 rounded"></div>
            </div>
            <span className="font-bold text-xl">Lodgify</span>
          </div>
          
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-lime-200 text-gray-900 rounded-lg font-medium">
              <Calendar className="w-5 h-5" />
              <span>Reservation</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
              <span>Rooms</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg relative">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
              <span>Messages</span>
              <span className="absolute right-3 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
              <span>Housekeeping</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
              <span>Inventory</span>
            </button>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Reservation</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Jaylon Dorwart</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Reservation List</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search guest, status, etc"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm">All Status</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">19 - 24 June, 2028</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 bg-lime-300 hover:bg-lime-400 rounded-lg font-medium text-sm">
                Add Booking
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Guest</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Room</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Request</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Duration</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Check-in & Check-Out</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{reservation.guest}</div>
                      <div className="text-sm text-gray-500">{reservation.guestId}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{reservation.room}</td>
                    <td className="px-6 py-4 text-gray-700">{reservation.request}</td>
                    <td className="px-6 py-4 text-gray-700">{reservation.duration}</td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700">{reservation.checkIn} - {reservation.checkOut}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        reservation.status === 'Confirmed' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedGuest(reservation);
                            setCurrentView('profile');
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className={`px-3 py-1 rounded-lg text-sm ${
                          reservation.status === 'Pending'
                            ? 'bg-lime-300 hover:bg-lime-400 text-gray-900'
                            : 'text-red-600 hover:bg-red-50'
                        }`}>
                          {reservation.status === 'Pending' ? 'Confirm' : 'Cancel'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const GuestProfile = () => {
    if (!selectedGuest) return null;

    return (
      <div className="flex h-screen bg-gray-50">
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-yellow-300 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-yellow-400 rounded"></div>
              </div>
              <span className="font-bold text-xl">Lodgify</span>
            </div>
            
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
                <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                <span>Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-lime-200 text-gray-900 rounded-lg font-medium">
                <Calendar className="w-5 h-5" />
                <span>Reservation</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
                <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                <span>Rooms</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg relative">
                <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                <span>Messages</span>
                <span className="absolute right-3 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg">
                <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                <span>Housekeeping</span>
              </button>
            </nav>
          </div>

          <div className="mx-4 mb-4 p-4 bg-lime-100 rounded-lg">
            <div className="mb-3">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2"></div>
            </div>
            <h3 className="font-semibold text-sm mb-1">Elevate Hospitality Standards</h3>
            <p className="text-xs text-gray-600 mb-3">Enhanced Reporting, Faster Check-ins, & Integrated Marketing Tools</p>
            <button className="w-full py-2 bg-lime-300 hover:bg-lime-400 rounded-lg text-sm font-medium">
              Update Now
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentView('list')}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ←
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Guest Profile</h1>
                  <div className="text-sm text-lime-600">Reservation / Guest Profile</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm">Jaylon Dorwart</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-lg">Profile</h2>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-lime-200 rounded-full flex items-center justify-center text-2xl font-bold text-lime-800">
                      {selectedGuest.guest.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{selectedGuest.guest}</h3>
                      <p className="text-sm text-gray-500">G011-987654321</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{selectedGuest.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{selectedGuest.email}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Date of Birth</div>
                      <div className="font-medium">{selectedGuest.dob}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Gender</div>
                      <div className="font-medium">{selectedGuest.gender}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Nationality</div>
                      <div className="font-medium">{selectedGuest.nationality}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Passport No.</div>
                      <div className="font-medium">{selectedGuest.passport}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold mb-4">Loyalty Program</h3>
                  <div className="inline-block px-3 py-1 bg-lime-300 rounded text-sm font-medium mb-4">
                    {selectedGuest.loyaltyProgram}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Points Balance</div>
                      <div className="font-medium">{selectedGuest.points}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Tier Level</div>
                      <div className="font-medium flex items-center gap-1">
                        <span className="text-yellow-600">⭐</span> {selectedGuest.tierLevel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Booking Info</h2>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-emerald-600 mb-4">
                    <span className="text-lg">✓</span>
                    <span>Booking Confirmed</span>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">Booking ID: {selectedGuest.id}</h3>
                    <p className="text-xs text-gray-500">June 17, 2024, 9:46 AM</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Room Type</div>
                      <div className="font-medium">{selectedGuest.roomType}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Room Number</div>
                      <div className="font-medium">{selectedGuest.roomNumber}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Guests</div>
                      <div className="font-medium">{selectedGuest.guests}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Requests</div>
                      <div className="font-medium">{selectedGuest.request}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Check In</div>
                      <div className="font-medium">{selectedGuest.checkIn}</div>
                      <div className="text-xs text-gray-500">1:45 PM</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Check Out</div>
                      <div className="font-medium">{selectedGuest.checkOut}</div>
                      <div className="text-xs text-gray-500">11:45 AM</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-500 mb-1">Duration</div>
                      <div className="font-medium">{selectedGuest.duration}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-500 text-sm mb-2">Notes</div>
                    <p className="text-sm">{selectedGuest.notes}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Loyalty Program</div>
                        <div className="font-medium">{selectedGuest.loyaltyProgram}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Special Amenities</div>
                        <div className="space-y-1">
                          {selectedGuest.amenities.map((amenity, i) => (
                            <div key={i} className="flex items-center gap-1 text-emerald-600">
                              <span>✓</span>
                              <span className="text-xs">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Transportation</div>
                        <div className="font-medium">{selectedGuest.transportation}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Extras</div>
                        <div className="font-medium">-</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Edit
                    </button>
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-red-600">
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Room Info</h2>
                    <button className="text-sm text-blue-600 hover:underline">View Detail</button>
                  </div>

                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Deluxe Room</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <span>📐</span>
                      <span>35 m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      <span>King Bed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>2 guests</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Price Summary</h3>
                      <span className="px-2 py-1 bg-lime-300 rounded text-xs font-medium">Paid</span>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room and offer</span>
                        <span>$450.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Extras</span>
                        <span>$0.10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">8% VAT</span>
                        <span>$36.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">City Tax</span>
                        <span>$49.50</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 font-semibold text-lg">
                      <span>Total Price</span>
                      <span>$535.50</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <div className="font-medium mb-1">Notes</div>
                        <p className="text-xs">Invoice sent to corporate account, payment confirmed by BIG Corporation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Booking History</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search guest, status, etc"
                      className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>19 - 24 June, 2028</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Image</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Booking ID</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Booking Date</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Room Type</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Room Number</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Check-In</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Check-Out</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Guests</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookingHistory.map((booking, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded"></div>
                      </td>
                      <td className="px-4 py-3 text-sm">{booking.id}</td>
                      <td className="px-4 py-3 text-sm">
                        <div>{booking.date}</div>
                        <div className="text-xs text-gray-500">9:08 AM</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          booking.roomType === 'Deluxe' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {booking.roomType}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{booking.roomNumber}</td>
                      <td className="px-4 py-3 text-sm">
                        <div>{booking.checkIn}</div>
                        <div className="text-xs text-gray-500">1:45 PM</div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div>{booking.checkOut}</div>
                        <div className="text-xs text-gray-500">11:45 AM</div>
                      </td>
                      <td className="px-4 py-3 text-sm">{booking.guests}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentView === 'list' ? <ReservationList /> : <GuestProfile />}
    </div>
  );
};

export default LodgifyReservationSystem;
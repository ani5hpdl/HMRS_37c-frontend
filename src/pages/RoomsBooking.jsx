import { useState, useMemo, useRef, useEffect } from "react";
import heroImg from "../assets/images/hotel-hero.jpg";
import BookingPopup from "../components/BookingPopup.jsx";
import { getAllRooms } from "../services/api";

const RoomsBooking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [boardType, setBoardType] = useState("All Types");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("All Types");
  const [occupancy, setOccupancy] = useState("Any");
  const [priceRange, setPriceRange] = useState(20000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const datePickerRef = useRef(null);
  const [selectingCheckOut, setSelectingCheckOut] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch rooms from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await getAllRooms();
        if (response.data.success) {
          // Transform API data to match component structure
          const transformedRooms = response.data.data.map((room) => ({
            id: room.id,
            name: room.RoomType.name,
            image: heroImg, // You can add image URLs to your API response
            price: parseFloat(room.RoomType.pricePerNight),
            description: room.RoomType.description,
            amenities: getAmenitiesArray(room.RoomType.RoomAmenity),
            occupancy: room.maxGuests === 1 ? "Single" : "Double",
            bedType: room.RoomType.bedType,
            viewType: room.RoomType.viewType,
            roomSize: room.RoomType.roomSize,
          }));
          setRooms(transformedRooms);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Helper function to convert amenities object to array
  const getAmenitiesArray = (amenities) => {
    const amenityList = [];
    if (amenities.wifi) amenityList.push("WiFi");
    if (amenities.airConditioning) amenityList.push("AC");
    if (amenities.flatScreenTV) amenityList.push("TV");
    if (amenities.miniFridge) amenityList.push("Mini Bar");
    if (amenities.coffeeTeaMaker) amenityList.push("Coffee Maker");
    if (amenities.ensuiteBathroom) amenityList.push("Room Service");
    return amenityList;
  };

  const amenitiesList = ["WiFi", "AC", "TV", "Room Service", "Mini Bar", "Coffee Maker"];

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (room.price > priceRange) return false;
      if (occupancy !== "Any" && room.occupancy !== occupancy) return false;
      if (selectedAmenities.length > 0) {
        for (let a of selectedAmenities) {
          if (!room.amenities.includes(a)) return false;
        }
      }
      return true;
    });
  }, [priceRange, occupancy, selectedAmenities, rooms]);

  const handleBookNow = (roomName) => {
    setSelectedRoom(roomName);
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const Calendar = ({ month, year, onDateSelect, selectedStart, selectedEnd }) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const isPast = date < today;
      const isSelected = dateStr === selectedStart || dateStr === selectedEnd;
      const isInRange = selectedStart && selectedEnd && dateStr > selectedStart && dateStr < selectedEnd;
      const isDisabled = isPast || (selectingCheckOut && selectedStart && dateStr <= selectedStart);

      days.push(
        <button
          key={day}
          onClick={() => !isDisabled && onDateSelect(dateStr)}
          disabled={isDisabled}
          className={`p-2 text-center rounded hover:bg-blue-100 transition ${
            isSelected ? 'bg-blue-500 text-white font-bold' : ''
          } ${isInRange ? 'bg-blue-100' : ''} ${
            isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 cursor-pointer'
          }`}
        >
          {day}
        </button>
      );
    }

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4 text-center">{monthNames[month]} {year}</h3>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  const handleDateSelect = (dateStr) => {
    if (!selectingCheckOut) {
      setCheckIn(dateStr);
      setCheckOut("");
      setSelectingCheckOut(true);
    } else {
      setCheckOut(dateStr);
      setSelectingCheckOut(false);
      setShowDatePicker(false);
    }
  };

  const currentDate = new Date();
  const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="h-96 bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 p-8 rounded text-center z-10">
          <h1 className="text-5xl font-bold">Find Your Perfect Room</h1>
          <p className="text-xl mt-4">Luxury stays in Kathmandu, tailored for you</p>
        </div>

        {/* Floating Search Box */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg p-6 w-full max-w-6xl z-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Select Dates */}
            <div className="md:col-span-2 relative" ref={datePickerRef}>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Select Dates</label>
              <div
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setSelectingCheckOut(false);
                }}
                className="border rounded-lg p-3 bg-yellow-500 text-gray-800 flex items-center gap-2 cursor-pointer hover:bg-yellow-600 transition"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">
                  {checkIn ? formatDate(checkIn) : 'Check-in'} → {checkOut ? formatDate(checkOut) : 'Check-out'}
                </span>
              </div>

              {/* Calendar Popup */}
              {showDatePicker && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-2xl rounded-lg border border-gray-200 z-50">
                  <div className="p-4 border-b">
                    <p className="text-sm text-gray-600">
                      {!selectingCheckOut ? 'Choose your check-in date' : 'Choose your check-out date'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 divide-x">
                    <Calendar
                      month={currentDate.getMonth()}
                      year={currentDate.getFullYear()}
                      onDateSelect={handleDateSelect}
                      selectedStart={checkIn}
                      selectedEnd={checkOut}
                    />
                    <Calendar
                      month={nextMonth.getMonth()}
                      year={nextMonth.getFullYear()}
                      onDateSelect={handleDateSelect}
                      selectedStart={checkIn}
                      selectedEnd={checkOut}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border rounded-lg p-3 bg-white text-gray-700 w-full outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            {/* Board Type */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Board Type</label>
              <select
                value={boardType}
                onChange={(e) => setBoardType(e.target.value)}
                className="border rounded-lg p-3 bg-white text-gray-700 w-full outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>All Types</option>
                <option>Room Only</option>
                <option>Bed & Breakfast</option>
                <option>Half Board</option>
                <option>Full Board</option>
              </select>
            </div>

            {/* Room Type */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Room Type</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="border rounded-lg p-3 bg-white text-gray-700 w-full outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>All Types</option>
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Suite</option>
                <option>Deluxe</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={() => {
                if (checkIn && checkOut) {
                  alert(`Searching rooms from ${formatDate(checkIn)} to ${formatDate(checkOut)}`);
                } else {
                  alert('Please select both check-in and check-out dates');
                }
              }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Check Availability
            </button>
            <button
              onClick={() => {
                setCheckIn("");
                setCheckOut("");
                setGuests("2");
                setBoardType("All Types");
                setRoomType("All Types");
                setShowDatePicker(false);
                setSelectingCheckOut(false);
              }}
              className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-semibold"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row space-x-0 md:space-x-6 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded shadow space-y-6 sticky top-28 h-fit">
          <h3 className="text-lg font-semibold">Filter Rooms</h3>

          <div>
            <label className="text-sm font-medium">Price (max NPR)</label>
            <input
              type="range"
              min="5000"
              max="20000"
              step="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <p className="mt-1 font-semibold">{priceRange} NPR</p>
          </div>

          <div>
            <label className="text-sm font-medium">Occupancy</label>
            <select
              value={occupancy}
              onChange={(e) => setOccupancy(e.target.value)}
              className="border rounded p-2 w-full"
            >
              <option>Any</option>
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Amenities</h4>
            <div className="flex flex-col space-y-2">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-yellow-100 transition ${
                    selectedAmenities.includes(amenity) ? "bg-yellow-100" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="accent-yellow-500"
                  />
                  <span className="text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Rooms Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-gray-600 mt-10">Loading rooms...</p>
          ) : filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white w-110 h-180 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
              >
                {/* Room Image with Available Badge */}
                <div className="relative">
                  <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Available
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  {/* Amenities */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.includes("WiFi") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-500">📶</span>
                          <span>WiFi</span>
                        </div>
                      )}
                      {room.amenities.includes("AC") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-500">❄️</span>
                          <span>AC</span>
                        </div>
                      )}
                      {room.amenities.includes("TV") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-500">📺</span>
                          <span>TV</span>
                        </div>
                      )}
                      {room.amenities.includes("Room Service") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-orange-500">🔔</span>
                          <span>Room Service</span>
                        </div>
                      )}
                      {room.amenities.includes("Mini Bar") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-500">🧊</span>
                          <span>Bathroom</span>
                        </div>
                      )}
                      {room.amenities.includes("Coffee Maker") && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-500">♿</span>
                          <span>Wheelchair Accessible</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="space-y-1 mb-4 text-gray-700">
                    <p><span className="font-semibold">Board Type:</span> EP (Room Only)</p>
                    <p><span className="font-semibold">Occupancy:</span> {room.occupancy}</p>
                    <p><span className="font-semibold">Capacity:</span> Up to {room.occupancy === "Single" ? "1" : "2"} guests</p>
                    <p><span className="font-semibold">Beds:</span> 1 bed</p>
                  </div>

                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-3xl font-bold text-yellow-600">
                        ₹{Math.round(room.price * 1)}
                        <span className="text-sm text-gray-500 ml-2">(NPR {room.price})</span>
                      </p>
                      <p className="text-gray-600 text-sm">/ night</p>
                    </div>
                    <button
                      onClick={() => handleBookNow(room.name)}
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 mt-10">
              No rooms match your filters
            </p>
          )}
        </div>
      </section>

      {/* Booking Popup */}
      {showPopup && (
        <BookingPopup
          roomName={selectedRoom}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default RoomsBooking;
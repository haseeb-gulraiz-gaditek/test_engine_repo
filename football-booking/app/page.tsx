'use client';

import { useState } from 'react';

interface Ground {
  id: number;
  name: string;
  location: string;
  price: number;
  size: string;
  surface: string;
  image: string;
}

interface Booking {
  ground: Ground;
  date: string;
  time: string;
  playerName: string;
}

type TimeSlot = {
  value: string;
  label: string;
};

const TIME_SLOTS: TimeSlot[] = [
  { value: '08:00', label: '08:00 AM - 09:00 AM' },
  { value: '09:00', label: '09:00 AM - 10:00 AM' },
  { value: '10:00', label: '10:00 AM - 11:00 AM' },
  { value: '11:00', label: '11:00 AM - 12:00 PM' },
  { value: '14:00', label: '02:00 PM - 03:00 PM' },
  { value: '15:00', label: '03:00 PM - 04:00 PM' },
  { value: '16:00', label: '04:00 PM - 05:00 PM' },
  { value: '17:00', label: '05:00 PM - 06:00 PM' },
  { value: '18:00', label: '06:00 PM - 07:00 PM' },
  { value: '19:00', label: '07:00 PM - 08:00 PM' },
];

const grounds: Ground[] = [
  {
    id: 1,
    name: 'Premier Football Arena',
    location: 'Downtown Sports Complex',
    price: 50,
    size: '11-a-side',
    surface: 'Natural Grass',
    image: '🏟️',
  },
  {
    id: 2,
    name: 'City Sports Ground',
    location: 'North Park',
    price: 35,
    size: '7-a-side',
    surface: 'Artificial Turf',
    image: '⚽',
  },
  {
    id: 3,
    name: 'Elite Football Pitch',
    location: 'West End Stadium',
    price: 60,
    size: '11-a-side',
    surface: 'Hybrid Grass',
    image: '🏟️',
  },
  {
    id: 4,
    name: 'Community Football Field',
    location: 'East Side Recreation',
    price: 25,
    size: '5-a-side',
    surface: 'Artificial Turf',
    image: '⚽',
  },
];

export default function Home() {
  const [selectedGround, setSelectedGround] = useState<Ground | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const getMinDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedGround) {
      const newBooking: Booking = {
        ground: selectedGround,
        date: bookingDate,
        time: bookingTime,
        playerName: playerName,
      };

      setBookings([...bookings, newBooking]);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setSelectedGround(null);
        setBookingDate('');
        setBookingTime('');
        setPlayerName('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <span className="text-5xl">⚽</span>
            Football Ground Booking
          </h1>
          <p className="mt-2 text-green-100">Book your perfect pitch today!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md animate-pulse">
            <p className="font-bold">✅ Booking Successful!</p>
            <p>Your ground has been booked. We'll send you a confirmation email shortly.</p>
          </div>
        )}

        {/* Grounds Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {grounds.map((ground) => (
            <div
              key={ground.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 text-center">
                <span className="text-7xl">{ground.image}</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{ground.name}</h2>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 flex items-center gap-2">
                    <span>📍</span> {ground.location}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span>👥</span> {ground.size}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span>🌱</span> {ground.surface}
                  </p>
                  <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
                    <span>💰</span> ${ground.price}/hour
                  </p>
                </div>
                <button
                  onClick={() => setSelectedGround(ground)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedGround && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Book {selectedGround.name}</h3>
                <button
                  onClick={() => setSelectedGround(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    required
                    min={getMinDate()}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Time Slot</label>
                  <select
                    required
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-semibold">Total: ${selectedGround.price}/hour</p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedGround(null)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Football Ground Booking. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Book your ground hassle-free!</p>
        </div>
      </footer>
    </div>
  );
}

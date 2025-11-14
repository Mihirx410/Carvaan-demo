'use client';

import { useState } from 'react';

interface SearchFormData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

export default function SearchBar() {
  const [formData, setFormData] = useState<SearchFormData>({
    destination: 'Bali',
    checkIn: '2024-12-28',
    checkOut: '2025-01-03',
    guests: '3'
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Simulate form submission
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Search submitted successfully!' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const logoColor = '#E91E63'; // Purple-pink matching header

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="md:col-span-1">
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
            placeholder="Destination"
            required
          />
        </div>

        <div className="md:col-span-1">
          <div className="relative">
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={today}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 absolute inset-0 opacity-0 cursor-pointer z-10"
              required
            />
            <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 pointer-events-none">
              {formatDate(formData.checkIn)}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="relative">
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || today}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 absolute inset-0 opacity-0 cursor-pointer z-10"
              required
            />
            <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 pointer-events-none">
              {formatDate(formData.checkOut)}
            </div>
          </div>
        </div>

        <div className="md:col-span-1 relative">
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
            placeholder="Guests"
            required
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            Guests
          </span>
        </div>

        <div className="md:col-span-1 flex items-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
            style={{ backgroundColor: logoColor }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {isSubmitting ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            message.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}


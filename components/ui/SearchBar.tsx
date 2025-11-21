'use client';

import { useState, useRef } from 'react';

interface SearchFormData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

/**
 * SearchBar component for trip search functionality
 * Features destination, check-in/out dates, guests, and search button
 * Date pickers open calendar on click
 */
export default function SearchBar() {
  const [formData, setFormData] = useState<SearchFormData>({
    destination: 'Bali',
    checkIn: '2024-12-28',
    checkOut: '2025-01-03',
    guests: '3'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Refs for date inputs to programmatically trigger calendar
  const checkInInputRef = useRef<HTMLInputElement>(null);
  const checkOutInputRef = useRef<HTMLInputElement>(null);

  // Brand color for buttons
  const logoColor = '#ae4a84';
  
  // Get today's date in YYYY-MM-DD format for date validation
  const today = new Date().toISOString().split('T')[0];

  /**
   * Format date string to readable format (e.g., "Dec 28, 2024")
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  /**
   * Handle input field changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Open calendar picker for date input
   */
  const openDatePicker = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    if (inputRef.current) {
      try {
        inputRef.current.showPicker();
      } catch (err) {
        // Fallback for browsers that don't support showPicker()
        inputRef.current.focus();
        inputRef.current.click();
      }
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Search submitted successfully!' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Search Bar Container */}
      <div className="bg-white rounded-full shadow-lg px-5 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-0">
          {/* Destination Field */}
          <div className="flex-1 flex flex-col relative">
            <label htmlFor="destination" className="text-gray-500 text-md mb-0 px-4">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 text-lg py-2 bg-white text-gray-700 font-bold"
              placeholder="Destination"
              required
            />
            {/* Vertical Divider */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          </div>

          {/* Check In Date Field */}
          <div className="flex-1 flex flex-col relative">
            <label htmlFor="checkIn" className="text-gray-500 text-md mb-0 px-4">
              Check in
            </label>
            <div 
              className="relative cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                openDatePicker(checkInInputRef);
              }}
            >
              <input
                ref={checkInInputRef}
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={today}
                className="w-full px-4 py-2 text-lg bg-white focus:border-none text-gray-700 absolute inset-0 opacity-0 cursor-pointer z-10"
                required
              />
              {/* Display formatted date */}
              <div className="w-full px-4 py-2 bg-white text-gray-700 flex items-center pointer-events-none">
                <span className="flex-1 font-bold">{formatDate(formData.checkIn)}</span>
              </div>
            </div>
            {/* Vertical Divider */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          </div>

          {/* Check Out Date Field */}
          <div className="flex-1 flex flex-col relative">
            <label htmlFor="checkOut" className="text-gray-500 text-md mb-0 px-4">
              Check out
            </label>
            <div 
              className="relative cursor-pointer" 
              onClick={(e) => {
                e.preventDefault();
                openDatePicker(checkOutInputRef);
              }}
            >
              <input
                ref={checkOutInputRef}
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || today}
                className="w-full px-4 text-lg py-2 bg-white text-gray-700 absolute inset-0 opacity-0 cursor-pointer z-10"
                required
              />
              {/* Display formatted date */}
              <div className="w-full px-4 py-2 bg-white text-gray-700 flex items-center pointer-events-none">
                <span className="flex-1 font-bold">{formatDate(formData.checkOut)}</span>
              </div>
            </div>
            {/* Vertical Divider */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          </div>

          {/* Guests Field */}
          <div className="flex-1 flex flex-col relative">
            <label htmlFor="guests" className="text-gray-500 text-md mb-0 px-4">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full px-4 text-lg py-2 bg-white text-gray-700 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Guests"
              required
            />
            <span className="absolute right-4 bottom-2 text-gray-500 pointer-events-none">
              Guests
            </span>
          </div>

          {/* Search Button */}
          <div className="flex-shrink-0 ml-4 flex items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90 whitespace-nowrap"
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
      </div>

      {/* Message Display - Below Search Bar */}
      {message && (
        <div
          className={`mt-3 p-3 rounded-md max-w-6xl mx-auto ${
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


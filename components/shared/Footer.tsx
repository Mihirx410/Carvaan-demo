'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Footer component with contact information, quick links, and contact form
 * Features two-column layout with form on the right
 */
export default function Footer() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Color scheme
  const headingColor = "#800a4e";
  const cardBg = "#ae4a84";
  const btnBg = "#ffbd59";

  /**
   * Handle form input changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Contact Info & Quick Links */}
        <div className="space-y-16">
          {/* Contact Us Section */}
          <div>
            <h2 className="font-extrabold text-[34px] mb-6" style={{ color: headingColor }}>
              Contact Us
            </h2>

            <p className="text-[#800a4e] max-w-md mb-8 text-md font-medium leading-relaxed">
              Whether you have questions about our services, need support,
              or want to share your feedback, our dedicated team is here
              to assist you every step of the way.
            </p>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-md bg-[#ffbd59] flex items-center justify-center">📧</div>
                <div>
                  <p className="font-bold text-[#800a4e]">Email</p>
                  <p className="text-sm text-[#ae4a84]">support@carvaan.co</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-md bg-[#ffbd59] flex items-center justify-center">🌐</div>
                <div>
                  <p className="font-bold text-[#800a4e]">Website</p>
                  <p className="text-sm text-[#ae4a84]">reallygreatsite.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-md bg-[#ffbd59] flex items-center justify-center">📞</div>
                <div>
                  <p className="font-bold text-[#800a4e]">Phone</p>
                  <p className="text-sm text-[#ae4a84]">+91 98765 43210</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-md bg-[#ffbd59] flex items-center justify-center">📍</div>
                <div>
                  <p className="font-bold text-[#800a4e]">Location</p>
                  <p className="text-sm text-[#ae4a84]">123 Anywhere St., Any City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="font-extrabold text-[32px] mb-4" style={{ color: headingColor }}>
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-x-12">
              {/* Column 1 */}
              <ul className="list-disc list-inside space-y-2 marker:text-[#ae4a84] text-[#800a4e] font-semibold leading-none">
                <li><a href="#" className="underline">About Us</a></li>
                <li><a href="#" className="underline">Trips</a></li>
                <li><a href="#" className="underline">Community</a></li>
              </ul>

              {/* Column 2 */}
              <ul className="list-disc list-inside space-y-2 marker:text-[#ae4a84] text-[#800a4e] font-semibold leading-none">
                <li><a href="#" className="underline">Carvaan Coins</a></li>
                <li><a href="#" className="underline">FAQ</a></li>
                <li><a href="#" className="underline">Login / Sign Up</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm font-extrabold text-[#ae4a84] pt-4">
            © 2025 Carvaan. All rights reserved.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div
            className="rounded-3xl p-10 shadow-lg"
            style={{ backgroundColor: cardBg }}
          >
            <h2 className="text-white text-[44px] font-extrabold mb-6">
              Get in touch.
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="flex flex-col space-y-1">
                <label className="text-white font-medium text-base">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md bg-white text-gray-900"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1">
                <label className="text-white font-medium text-base">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col space-y-1">
                <label className="text-white font-medium text-base">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-1">
                <label className="text-white font-medium text-base">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-1 rounded-md font-bold text-[#ae4a84] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: btnBg }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Success/Error Message */}
            {message && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const logoColor = '#E91E63'; // Purple-pink matching header

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Left Column - Logo and Social Media */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
                {'CARVAAN'.split('').map((letter, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: logoColor }}
                  >
                    <span className="text-white font-bold text-xl">
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-white mb-6 text-sm">
              From Solo to Squad, Carvaan has your back.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: logoColor }}
                  aria-label={social}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white hover:opacity-80 transition-opacity">About Us</a></li>
              <li><a href="/careers" className="text-white hover:opacity-80 transition-opacity">Careers</a></li>
              <li><a href="/blog" className="text-white hover:opacity-80 transition-opacity">Blog</a></li>
              <li><a href="/press" className="text-white hover:opacity-80 transition-opacity">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-white hover:opacity-80 transition-opacity">FAQ</a></li>
              <li><a href="/contact" className="text-white hover:opacity-80 transition-opacity">Contact Us</a></li>
              <li><a href="/how-it-works" className="text-white hover:opacity-80 transition-opacity">How it Works</a></li>
              <li><a href="/testimonials" className="text-white hover:opacity-80 transition-opacity">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-white hover:opacity-80 transition-opacity">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-white hover:opacity-80 transition-opacity">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-white hover:opacity-80 transition-opacity">Cookie Policy</a></li>
              <li><a href="/disclaimer" className="text-white hover:opacity-80 transition-opacity">Disclaimer</a></li>
            </ul>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-6 py-2 rounded-md font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: logoColor }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
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
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Carvaan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Purple-pink color matching the design
  const logoColor = '#E91E63'; // Vibrant purple-pink

  return (
    <header className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Each letter in a rounded square - Left side */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-1">
                {'CARVAAN'.split('').map((letter, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: logoColor }}
                  >
                    <span className="text-white font-bold text-xl md:text-2xl">
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/tours" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Tours
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Sign Up Button - Right side */}
          <div className="flex items-center flex-shrink-0">
            <button 
              className="hidden md:block text-white px-6 py-2 rounded-md font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: logoColor }}
            >
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/tours" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button 
                className="text-white px-6 py-2 rounded-md font-medium w-full text-left transition-opacity hover:opacity-90"
                style={{ backgroundColor: logoColor }}
              >
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


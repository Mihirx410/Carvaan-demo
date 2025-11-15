'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Header component with logo, navigation links, and sign-up button
 * Features responsive design with mobile menu
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Brand color for logo and buttons
  const logoColor = '#ae4a84';

  return (
    <header className="relative z-10 w-full">
      <div className="relative w-full">
        <div className="flex items-center justify-between h-20 md:h-24 px-2 md:px-8">
          {/* Logo - Left aligned */}
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
          <nav className="hidden md:flex text-lg items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Tours
            </Link>
            <Link 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Sign Up Button - Right aligned */}
          <div className="flex items-center flex-shrink-0">
            <button 
              className="hidden md:block text-white px-8 py-2 text-lg rounded-full font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: logoColor }}
            >
              Sign Up
            </button>

            {/* Mobile Menu Toggle Button */}
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link 
                href="#" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="#" 
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


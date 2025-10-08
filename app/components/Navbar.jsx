'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Don't render menu on server to avoid hydration mismatch
  const shouldRenderMenu = isMounted && isMenuOpen;

  return (
    <>
      <nav className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Left side - Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/logo22.png"   alt="Company Logo" width={120} height={40} className="h-16 w-auto" />
              </Link>
            </div>

            {/* Middle - Navigation Links (hidden on mobile) */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-4">
               <Link href="/" className="group relative">
                  <span className="text-white px-3 py-1 rounded-md text-xl transition duration-300">Home</span>
                  <span className="absolute left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-10/12 group-hover:-translate-x-1/2 -bottom-1"></span>
               </Link>

               <Link href="/about" className="group relative">
                  <span className="text-white px-3 py-1 rounded-md text-xl transition duration-300">About Us </span>
                  <span className="absolute left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-10/12 group-hover:-translate-x-1/2 -bottom-1"></span>
               </Link>

               <Link href="/services" className="group relative">
                  <span className="text-white px-3 py-1 rounded-md text-xl transition duration-300">Services</span>
                  <span className="absolute left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-10/12 group-hover:-translate-x-1/2 -bottom-1"></span>
               </Link>

               <Link href="/portfolio" className="group relative">
                  <span className="text-white px-3 py-2 rounded-md text-xl transition duration-300">Portfolio</span>
                  <span className="absolute left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-10/12 group-hover:-translate-x-1/2 -bottom-1"></span>
               </Link>
              </div>
            </div>

            {/* Right side - Contact Button (hidden on mobile) */}
            <div className="hidden md:flex items-center">
              {/* <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                Contact Us
              </Link> */}

              <Link href="/contact" className="group relative">
                  <span className="text-amber-500 px-3 py-2 rounded-md text-2xl font-bold transition duration-300">Contact us </span>
                  <span className="absolute left-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-10/12 group-hover:-translate-x-1/2 -bottom-1"></span>
               </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu (only rendered on client after mount) */}
        {shouldRenderMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
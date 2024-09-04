import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-60 backdrop-blur-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          Student Hub
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
        <div className={`flex-col md:flex md:flex-row md:items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link
            href="/"
            className={`block md:inline-block text-gray-300 hover:text-white px-4 py-2 ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/internships"
            className={`block md:inline-block text-gray-300 hover:text-white px-4 py-2 ${pathname === '/internships' ? 'active' : ''}`}
          >
            Internships
          </Link>
          <Link
            href="/grades-calculator"
            className={`block md:inline-block text-gray-300 hover:text-white px-4 py-2 ${pathname === '/grades-calculator' ? 'active' : ''}`}
          >
            Grades Calculator
          </Link>
          <Link
            href="/roadmaps"
            className={`block md:inline-block text-gray-300 hover:text-white px-4 py-2 ${pathname === '/roadmaps' ? 'active' : ''}`}
          >
            Roadmaps
          </Link>
          <Link
            href="/contact"
            className={`block md:inline-block text-gray-300 hover:text-white px-4 py-2 ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

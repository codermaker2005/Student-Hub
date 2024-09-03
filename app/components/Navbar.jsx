import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-60 backdrop-blur-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          Student Hub
        </Link>
        <div>
          <Link
            href="/"
            className={`text-gray-300 hover:text-white px-4 ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/internships"
            className={`text-gray-300 hover:text-white px-4 ${pathname === '/internships' ? 'active' : ''}`}
          >
            Internships
          </Link>
          <Link
            href="/grades-calculator"
            className={`text-gray-300 hover:text-white px-4 ${pathname === '/grades-calculator' ? 'active' : ''}`}
          >
            Grades Calculator
          </Link>
          <Link
            href="/roadmaps"
            className={`text-gray-300 hover:text-white px-4 ${pathname === '/roadmaps' ? 'active' : ''}`}
          >
            Roadmaps
          </Link>
          <Link
            href="/contact"
            className={`text-gray-300 hover:text-white px-4 ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

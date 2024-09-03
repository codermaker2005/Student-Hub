"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 opacity-60 blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Welcome to Student Hub
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A comprehensive platform for internship opportunities, grades calculators, and more.
          </p>
          <Link
            href="/grades-calculator"
            className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Internship Opportunities</h3>
              <p className="mb-4">
                Discover exciting internship opportunities to kickstart your career.
              </p>
              <Link
                href="/internships"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Explore Internships
              </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Grades Calculator</h3>
              <p className="mb-4">
                Keep track of your academic performance with our easy-to-use calculator.
              </p>
              <Link
                href="/grades-calculator"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Use Calculator
              </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Resources & Tips</h3>
              <p className="mb-4">
                Access valuable resources and tips to enhance your student life.
              </p>
              <Link
                href="/roadmaps"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Get in Touch
          </h2>
          <p className="mb-6">
            We’d love to hear from you. Reach out for any inquiries or support.
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
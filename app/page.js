"use client";

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GradesCalculator from './grades-calculator';
import Internships from './internships';
import Contact from './contact';
import Roadmaps from './roadmaps';
import Home from './home';

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>Student Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <div className="relative min-h-screen bg-gray-900 text-white">
        {/* Dark background */}
        <div className="absolute inset-0 bg-gray-900"></div>
        {/* Gradient center */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-full h-full max-w-screen-lg max-h-screen "></div>
        </div>
        {/* Content */}
        <div className="relative z-10 pt-16 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/grades-calculator" element={<GradesCalculator />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Analytics />
    </Router>
  );
}

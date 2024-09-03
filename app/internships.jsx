"use client";

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Navbar from './components/Navbar';
export default function Internships() {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const sheetUrl = 'https://docs.google.com/spreadsheets/d/1HVjbgjGm7F0YMWboLSkcGa2wj6TKSa4iFOZJPXI5jC4/pub?output=csv';
                const response = await fetch(sheetUrl);
                const csvData = await response.text();
                
                Papa.parse(csvData, {
                    header: true,
                    complete: (results) => {
                        setInternships(results.data);
                    },
                    error: (error) => {
                        setError(error.message);
                    }
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInternships();
    }, []);

    return (
        <>
      <Navbar />
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-semibold mb-8 text-center text-gray-100">
                Internship Opportunities
            </h1>
            {loading ? (
                <p className="text-center text-gray-400">Loading internships...</p>
            ) : error ? (
                <p className="text-center text-red-400">Error: {error}</p>
            ) : (
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internships.length === 0 ? (
                        <p className="text-center text-gray-400 col-span-full">No internships available at the moment.</p>
                    ) : (
                        internships.map((internship, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col justify-between"
                                style={{ minHeight: '200px' }}
                            >
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold mb-2 text-gray-100 truncate">{internship.Title}</h2>
                                    <p className="text-gray-300 overflow-hidden overflow-ellipsis">{internship.Description}</p>
                                </div>
                                {internship.Link && (
                                    <a href={internship.Link} className="block mt-4 text-blue-400 hover:text-blue-300">
                                        Learn More
                                    </a>
                                )}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
        </>
    );
}
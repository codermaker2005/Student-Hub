"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";

export default function GradesCalculator() {
    const [grades, setGrades] = useState({
        midterm: '',
        final: '',
        project: '',
        assignment: '',
        part: '',
        attend: '',
    });

    const [weights, setWeights] = useState({
        midterm: 25,
        final: 35,
        project: 10,
        assignment: 20,
        part: 5,
        attend: 5,
    });

    const [totalGrade, setTotalGrade] = useState(null);

    const handleChangeGrade = (e) => {
        const { name, value } = e.target;
        const numericValue = Number(value);

        if (value === "" || (numericValue >= 0 && numericValue <= 100)) {
            setGrades((prevGrades) => ({
                ...prevGrades,
                [name]: value === "" ? '' : numericValue,
            }));
        } else {
            alert("Please enter a valid grade between 0 and 100.");
        }
    };

    const handleChangeWeight = (e) => {
        const { name, value } = e.target;
        const numericValue = Number(value);

        if (numericValue >= 0 && numericValue <= 100) {
            setWeights((prevWeights) => ({
                ...prevWeights,
                [name]: numericValue,
            }));
        } else {
            alert("Please enter a valid percentage between 0 and 100.");
        }
    };

    const calculateMidterm = () => grades.midterm * (weights.midterm / 100);
    const calculateFinal = () => grades.final * (weights.final / 100);
    const calculateProject = () => grades.project * (weights.project / 100);
    const calculateAssignment = () => grades.assignment * (weights.assignment / 100);
    const calculatePart = () => grades.part * (weights.part / 100);
    const calculateAttend = () => grades.attend * (weights.attend / 100);

    const calculateTotal = () => {
        for (const key in grades) {
            if (grades[key] === '') {
                alert("Please fill in all fields.");
                return;
            }
        }

        const total = (
            calculateMidterm() +
            calculateFinal() +
            calculateProject() +
            calculateAssignment() +
            calculatePart() +
            calculateAttend()
        ).toFixed(2);

        setTotalGrade(total);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-semibold mb-8 text-center text-gray-100">
                Grade Calculator
            </h1>
            <p className="text-center text-gray-400 mb-6">
                This Grade Calculator helps you estimate your final grade based on the grades you've received in various assessments. You can adjust the percentage weights for each assessment component to match your course's grading policy.
            </p>
            <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
                <div className="grid gap-6 mb-6">
                    {['midterm', 'final', 'project', 'assignment', 'part', 'attend'].map((item) => (
                        <div key={item} className="relative">
                            <label className="block text-gray-300 mb-1 capitalize">
                                {item.charAt(0).toUpperCase() + item.slice(1)} Grade
                            </label>
                            <input
                                type="number"
                                name={item}
                                value={grades[item]}
                                onChange={handleChangeGrade}
                                placeholder={`Enter your ${item} grade`}
                                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400"
                            />
                            <div className="absolute top-[-2px] right-0">
                                <input
                                    type="number"
                                    name={item}
                                    value={weights[item]}
                                    onChange={handleChangeWeight}
                                    className="w-16 p-1 text-center rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 text-xs"
                                    max="100"
                                    placeholder="%"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={calculateTotal}
                    className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                    Calculate Total
                </button>
                {totalGrade !== null && (
                    <p className="text-center mt-4 text-gray-400 text-lg">
                        Your Total Grade: <span className="text-green-400">{totalGrade}</span>
                    </p>
                )}
            </div>
        </div>
        </>
    );
}

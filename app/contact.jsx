"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzgvylz", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-center items-center pt-20">
        <h1 className="text-3xl font-semibold mb-8 text-center text-gray-100">
          Contact Us
        </h1>
        <p className="text-center text-gray-400 mb-6 max-w-lg">
          If you have any inquiries, suggestions, or feedback, feel free to reach out to us. We look forward to hearing from you!
        </p>
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Your Name:
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Your Email:
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Your Message:
                <textarea
                  name="message"
                  required
                  placeholder="Feel Free to Share Your Thoughts or Questions"
                  rows="4"
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Send
            </button>
          </form>
          {status && <p className="text-center mt-4 text-gray-400">{status}</p>}
        </div>
      </div>
    </>
  );
}

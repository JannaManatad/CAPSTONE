'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="scroll-smooth min-h-screen bg-gradient-to-br from-sky-200 to-blue-400 font-['Inria_Serif']">
      {/* Google Font (Inria Serif) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav className="w-full bg-sky-100 shadow flex items-center justify-end px-12 py-4">
        <ul className="flex space-x-12 text-lg font-semibold text-gray-700">
          <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
          <li><a href="#drums" className="hover:text-blue-500 transition">Features</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-8 px-6">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start space-y-4">
          <h1 className="text-6xl font-bold">
            <span className="text-pink-500 italic">Chill</span><span className="text-gray-700">Net</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold italic text-white drop-shadow">
            Chill. Order. Enjoy!
          </h2>
          <p className="text-md text-sky-100 italic font-medium">
            The easiest way to order and sell dirty ice cream online!
          </p>
          <div className="flex items-center space-x-6 mt-4">
            <button className="bg-[#ffddae] text-black font-semibold px-8 py-3 rounded-full border border-gray-400 shadow flex items-center transition">
              Book now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a href="vendorreg.html" className="text-yellow-100 font-semibold hover:underline transition">
              Become a Vendor
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="https://i.ibb.co/6bQ7QwP/chillnet-logo.png"
            alt="ChillNet Ice Cream"
            className="rounded-2xl shadow-2xl w-[90%] max-w-xl object-cover"
          />
        </div>
      </section>

      {/* Drum Cards Section */}
      <section id="drums" className="flex flex-col md:flex-row justify-center items-start gap-12 mt-40 mb-32 px-6">
        {["Medium", "Large", "Small"].map((size) => (
          <div key={size} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-80">
            <div className="bg-gray-300 w-64 h-64 rounded mb-6"></div>
            <h3 className="text-2xl font-bold mb-6">{size} Drum</h3>
            <button className="bg-[#ffddae] text-gray-800 font-semibold px-6 py-2 rounded shadow">
              Schedule now
            </button>
          </div>
        ))}
      </section>

      {/* Find Nearby Vendors */}
      <section className="mt-32 mb-32 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          FIND NEARBY VENDORS
        </h2>
        <div className="bg-sky-100 rounded-2xl p-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-6xl mx-auto">
          {/* Input */}
          <div className="flex-1 w-full flex flex-col justify-between h-full">
            <input
              type="text"
              placeholder="See Vendors near your Location"
              className="w-full mb-8 px-6 py-3 rounded-full bg-white text-gray-700 italic placeholder-gray-400 outline-none"
            />
            <button className="bg-[#ffddae] text-gray-800 font-semibold px-6 py-2 rounded shadow w-48 self-start">
              Locate Vendors
            </button>
          </div>

          {/* Map */}
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-600 rounded-2xl p-4">
              <img
                src="https://i.ibb.co/6bQ7QwP/map-sample.png"
                alt="Map"
                className="w-[400px] h-[350px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-32 mb-32 px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          How It Works
        </h3>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 rounded-2xl p-6 mb-4 max-w-lg text-left text-gray-700 text-base shadow">
            Our system is tailored to be simple, rewarding, and community-driven. Order any product in a few taps and track your delivery in real time. Vendors can easily list products, manage orders, and grow their business.
            <br /><br />
            The process is designed with user-friendly principles and transparent transactions. Simply search, select, and enjoy your favorite treats delivered to your door!
          </div>
          <div className="flex flex-wrap justify-end gap-4">
            {[1, 2, 3].map((step) => (
              <img
                key={step}
                src="https://i.ibb.co/6bQ7QwP/map-sample.png"
                alt={`Step ${step}`}
                className="w-32 rounded shadow"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

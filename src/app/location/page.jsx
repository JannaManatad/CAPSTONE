'use client';

import React from 'react';

export default function VendorNearbyPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #0693FF, #C0E2FB)',
        fontFamily: "'Inria Serif', serif",
      }}
    >
      {/* Header */}
      <header className="w-full px-6 py-4 bg-sky-200 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/icecream.png"
            alt="ChillNet Logo"
            className="h-10 w-10 rounded-full bg-white border border-gray-300"
          />
          <span className="text-2xl font-bold">
            <span className="text-pink-500 italic">Chill</span>
            <span className="text-gray-800">Net</span>
          </span>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </div>

          {/* Find Text */}
          <span className="text-sm font-medium text-white">Find nearby Vendors</span>

          {/* Icon Buttons */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex items-center space-x-4">
            <img src="/icons/delete-cart.png" alt="Delete Cart" className="h-6 w-6" title="Delete Cart" />
            <img src="/icons/shops.png" alt="Shops" className="h-6 w-6" title="Shops" />
            <img src="/icons/bell.png" alt="Notifications" className="h-6 w-6" title="Notifications" />
            <img src="/icons/cart.png" alt="Cart" className="h-6 w-6" title="Cart" />
            <img src="/icons/help.png" alt="Customer Service" className="h-6 w-6" title="Customer Service" />
          </div>

          {/* User Avatar */}
          <img
            src="/icons/user.png"
            alt="User"
            className="w-10 h-10 rounded-full bg-gray-200 border border-gray-400"
          />
        </div>
      </header>

      {/* Vendor Card with Map */}
      <section className="px-6 py-10 flex justify-center">
        <div
          className="rounded-2xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl p-6 lg:p-10 gap-10"
          style={{ backgroundColor: '#C6E7FF' }}
        >
          {/* Vendor Info */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <img
                src="/icons/icecream-vendor.png"
                alt="Vendor"
                className="w-20 h-20 rounded-full border border-gray-300 bg-white object-cover mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-700">Scoops and Smile Ice Cream</h2>
                <div className="flex items-center mt-1 text-gray-600 text-sm">
                  <span className="mr-1">🍦</span>
                  <span>4.5</span>
                  <span className="ml-1 text-xs text-gray-500">(55 reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center text-gray-700 mb-3">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17.657 16.657L13.414 21a2 2 0 0 1-2.828 0l-4.243-4.343a8 8 0 1 1 11.314 0z" />
                <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Purok 1 Buagsong, Cordova, Cebu, Philippines</span>
            </div>

            <div className="mb-2">
              <span className="font-semibold text-gray-800">Available Drum</span>
              <p className="ml-2 text-sm text-gray-700">Large<br />Medium<br />Small</p>
            </div>

            <div className="mb-2">
              <span className="font-semibold text-gray-800">Flavors</span>
              <p className="ml-2 text-sm text-gray-700">Mango<br />Ube<br />Choco</p>
            </div>

            <div className="mb-4">
              <span className="font-semibold text-gray-800">Shop Status</span>
              <p className="ml-2 text-green-600 font-semibold">Open</p>
            </div>

            <div className="flex space-x-4">
              <button className="bg-[#FFDDAE] hover:bg-orange-200 text-gray-800 font-semibold text-sm rounded px-6 py-2 shadow transition">
                View Shop
              </button>
              <button className="bg-[#FFDDAE] hover:bg-orange-200 text-gray-800 font-semibold text-sm rounded px-6 py-2 shadow transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-gray-300 rounded-2xl overflow-hidden border-8 border-gray-400 w-[420px] h-[320px]">
              <img
                src="/map-placeholder.png"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from 'react';

const flavors = [
  {
    name: 'Mango Flavor with free cones',
    price: '₱1800 - ₱2500',
    location: 'Cordova, Cebu',
    sold: 10,
    image: '/mango.jpg',
    rating: 4,
  },
  {
    name: 'Cookies and Cream Flavor with free cones',
    price: '₱1800 - ₱2500',
    location: 'Cordova, Cebu',
    sold: 10,
    image: '/cookies.jpg',
    rating: 4,
  },
  {
    name: 'Vanilla Flavor with free cones',
    price: '₱1800 - ₱2500',
    location: 'Cordova, Cebu',
    sold: 10,
    image: '/vanilla.jpg',
    rating: 4,
  },
  {
    name: 'Chocolate Flavor with free cones',
    price: '₱1800 - ₱2500',
    location: 'Cordova, Cebu',
    sold: 10,
    image: '/choco.jpg',
    rating: 4,
  },
];

export default function VendorPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #3399ff 0%, #b3e0ff 100%)',
        fontFamily: "'Inria Serif', serif",
        }}
    >
      {/* Header */}
      <div className="w-full bg-sky-100 flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-3">
          <img
            src="/icecream.png"
            alt="ChillNet Logo"
            className="h-12 w-12 rounded-full border border-gray-300 bg-white object-cover"
          />
          <span className="text-4xl font-bold" style={{ fontFamily: "'Inria Serif', serif" }}>
            <span className="text-pink-500 italic">Chill</span>
            <span className="text-teal-700">Net</span>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {/* Search beside Find Nearby */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
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

            <span className="text-sm font-medium text-sky-900 whitespace-nowrap cursor-pointer hover:underline">
              Find nearby Vendors
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 bg-white rounded-lg px-4 py-2 shadow-sm">
            <img src="/icons/order.png" alt="Order" className="w-6 h-6" />
            <img src="/icons/package.png" alt="Package" className="w-6 h-6" />
            <img src="/icons/bell.png" alt="Notification" className="w-6 h-6" />
            <img src="/icons/cart.png" alt="Cart" className="w-6 h-6" />
            <img src="/icons/help.png" alt="Help" className="w-6 h-6" />
          </div>

          <img
            src="/icons/user.png"
            alt="User"
            className="w-10 h-10 rounded-full bg-gray-200 border border-gray-400"
          />
        </div>
      </div>

      {/* Vendor Card */}
      <div className="flex justify-center mt-8">
            <div className="rounded-xl shadow-lg flex items-center px-8 py-6 w-[900px] max-w-full" style={{ backgroundColor: '#C6E7FF' }}>
          <img
            src="/icons/icecream-vendor.png"
            alt="Vendor"
            className="w-24 h-24 rounded-full border border-gray-300 bg-white object-cover mr-6"
          />
          <div className="flex-1">
            <h2
              className="text-3xl font-bold text-gray-700 mb-2"
              style={{ fontFamily: "'Inria Serif', serif" }}
            >
              Scoops & Smile Ice Scream
            </h2>
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2 text-black">Ratings:</span>
              <span>
                <span role="img" aria-label="star">⭐</span>
                <span role="img" aria-label="star">⭐</span>
                <span role="img" aria-label="star">⭐</span>
                <span role="img" aria-label="star">⭐</span>
                <span role="img" aria-label="star">✩</span>
              </span>
            </div>
          </div>
          <button className="bg-orange-100 hover:bg-orange-200 text-gray-800 font-semibold rounded px-6 py-2 shadow transition">
            Chat
          </button>
        </div>
      </div>

      {/* Ice Cream Available */}
      <div className="px-16 mt-10 pb-16">
        <h2
          className="text-3xl font-bold text-black mb-6"
          style={{ fontFamily: "'Inria Serif', serif" }}
        >
          Ice cream Available
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {flavors.map((flavor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{flavor.name}</h3>
              <p className="text-xs text-gray-600 mb-1">{flavor.price}</p>
              <p className="text-xs text-gray-500 mb-1">{flavor.location}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-yellow-400 text-xs">★★★</div>
                <span className="text-xs text-gray-500">{flavor.sold} sold</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

'use client';

import React from 'react';

const flavors = [
  {
    name: 'Mango Flavor with free cones',
    location: 'Cordova, Cebu',
    price: '₱1800 - ₱2500',
    sold: 10,
    image: '/placeholder.svg?height=150&width=150',
  },
  {
    name: 'Cookies and Cream with free cones',
    location: 'Cordova, Cebu',
    price: '₱1800 - ₱2500',
    sold: 10,
    image: '/placeholder.svg?height=150&width=150',
  },
  {
    name: 'Vanilla Flavor with free cones',
    location: 'Cordova, Cebu',
    price: '₱1800 - ₱2500',
    sold: 10,
    image: '/placeholder.svg?height=150&width=150',
  },
  {
    name: 'Special Salad Ice Cream',
    location: 'Cordova, Cebu',
    price: '₱1800 - ₱2500',
    sold: 10,
    image: '/placeholder.svg?height=150&width=150',
  },
  {
    name: 'Choco Swirl Delight',
    location: 'Cordova, Cebu',
    price: '₱1800 - ₱2500',
    sold: 8,
    image: '/placeholder.svg?height=150&width=150',
  },
];

export default function DiscoverPage() {
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

      {/* Main Section */}
      <section className="px-6 py-6">
        <h1 className="text-2xl font-bold text-white mb-6 tracking-wide">DISCOVER FLAVORS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flavors.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4 flex flex-col items-center">
                <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-gray-800 mb-1 text-center">{item.name}</h3>
                <p className="text-xs text-gray-600">{item.price}</p>
                <p className="text-xs text-gray-500">{item.location}</p>
                <div className="text-xs text-yellow-500 mt-1">★★★</div>
                <span className="text-xs text-gray-500">{item.sold} sold</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Messenger Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white border border-blue-300 hover:bg-blue-50 text-blue-700 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <img src="/icons/messenger.png" alt="Messenger" className="h-5 w-5" />
          <span className="text-sm">Messenger</span>
        </button>
      </div>
    </main>
  );
}

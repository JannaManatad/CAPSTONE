'use client';

import React from 'react';

export default function VendorRegistrationPage() {
  return (
    <main
      className="min-h-screen scroll-smooth text-black font-['Inria_Serif']"
      style={{
        background: 'linear-gradient(to bottom right, #0693FF 0%, #C0E2FB 100%)',
      }}
    >
      {/* Header */}
      <header className="w-full bg-sky-100 flex items-center px-8 py-4 shadow">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/6bQ7QwP/chillnet-logo.png"
            alt="ChillNet Logo"
            className="h-10 w-10 rounded-full border border-gray-300 bg-white object-cover"
          />
          <span className="text-3xl font-bold">
            <span className="text-pink-500 italic">Chill</span>
            <span className="text-gray-700">Net</span>
          </span>
        </div>
      </header>

      {/* Registration Card */}
      <section className="flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-md bg-[#D4F6FF] rounded-2xl shadow-2xl p-8 space-y-4">
          <h2 className="text-3xl font-bold text-center mb-6">Vendor Registration</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="fullname">Fullname</label>
              <input
                id="fullname"
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="confirm">Confirm Password</label>
              <input
                id="confirm"
                type="password"
                placeholder="Re-enter password"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                type="text"
                placeholder="09XXXXXXXXX"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
              />
            </div>

            {/* Valid ID */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="validid">Upload Valid ID</label>
              <input
                id="validid"
                type="file"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 bg-white"
              />
            </div>

            {/* Business Permit */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="permit">Upload Business Permit</label>
              <input
                id="permit"
                type="file"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 bg-white"
              />
            </div>

            {/* Drum Photo */}
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="drumphoto">
                Photo of Ice Cream Drums
                <span className="block italic font-normal text-xs text-gray-700">
                  (Proof that you make ice cream)
                </span>
              </label>
              <input
                id="drumphoto"
                type="file"
                className="w-full px-4 py-2 text-sm rounded border border-gray-300 bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#FFDDC1] hover:bg-orange-200 text-gray-800 font-bold py-2 px-6 text-sm rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                REGISTER NOW
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

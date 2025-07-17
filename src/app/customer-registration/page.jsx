'use client';

import React from 'react';

export default function CustomerRegistrationPage() {
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
      <section className="flex items-center justify-center min-h-[80vh] px-4 mt-8">
        <div className="w-full max-w-lg bg-[#D4F6FF] rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
          <form className="space-y-3">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-semibold mb-1">Contact No.</label>
              <input
                id="contact"
                type="text"
                placeholder="09XXXXXXXXX"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold mb-1">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Choose a username"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm" className="block text-sm font-semibold mb-1">Confirm Password</label>
              <input
                id="confirm"
                type="password"
                placeholder="Re-enter password"
                className="w-full px-2 py-1 rounded border border-gray-400 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-3 rounded mt-2 shadow-md text-lg transition"
            >
              REGISTER NOW
            </button>
          </form>

          {/* Divider */}
          <div className="text-center mt-3">
            <span className="text-gray-600 text-sm font-medium">or</span>
          </div>

          {/* Vendor Link */}
          <div className="text-center mt-3">
            <a href="/vendor-registration" className="text-indigo-800 font-bold hover:underline text-xs">
              REGISTER AS VENDOR
            </a>
          </div>

          {/* Google Sign In */}
          <div className="flex justify-center mt-4">
            <button className="flex items-center border border-gray-400 rounded px-4 py-2 bg-white hover:bg-gray-100 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-800 font-medium text-sm">Sign in with Google</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

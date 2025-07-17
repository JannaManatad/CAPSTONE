'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <main
      className="scroll-smooth min-h-screen text-black"
      style={{
        background: 'linear-gradient(to bottom right, #0693FF 0%, #C0E2FB 100%)',
        fontFamily: "'Inria Serif', serif",
      }}
    >
      {/* Header */}
      <div className="w-full bg-sky-100 flex items-center px-8 py-4">
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
      </div>

      {/* Login Card */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div
          className="rounded-xl shadow-lg px-6 py-6 w-full max-w-lg text-black"
          style={{ backgroundColor: '#D4F6FF' }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Welcome</h2>
          <form>
            <label className="block text-xl font-semibold mb-2 mt-4" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full mb-4 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 text-lg text-black"
            />

            <label className="block text-xl font-semibold mb-2 mt-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full mb-6 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 text-lg text-black"
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-3 rounded mt-2 shadow-md text-lg transition"
            >
              LOGIN
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="#" className="text-indigo-800 font-bold hover:underline">No Account? Register</a>
          </div>

          <div className="flex justify-center mt-6">
            <button className="flex items-center border border-gray-400 rounded px-4 py-2 bg-white hover:bg-gray-100 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-800 font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

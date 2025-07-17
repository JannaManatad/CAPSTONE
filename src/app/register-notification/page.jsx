'use client';

import React from 'react';
import Link from 'next/link';

export default function NotificationPage() {
  return (
    <main
      className="min-h-screen scroll-smooth"
      style={{
        background: 'linear-gradient(to bottom right, #0693FF 0%, #C0E2FB 100%)',
        fontFamily: "'Inria Serif', serif",
      }}
    >
      {/* Header */}
      <div className="w-full bg-sky-100 flex items-center px-8 py-4">
        <div className="flex items-center space-x-3">
          <img
            src="/icecream.png"
            alt="ChillNet Logo"
            className="h-10 w-10 rounded-full border border-gray-300 bg-white object-cover"
          />
          <span className="text-3xl font-bold" style={{ fontFamily: "'Inria Serif', serif" }}>
            <span className="text-pink-500 italic">Chill</span>
            <span className="text-gray-700">Net</span>
          </span>
        </div>
      </div>

      {/* Notification Box */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div
          className="rounded-xl shadow-lg px-6 py-10 w-full max-w-2xl text-center"
          style={{ backgroundColor: '#D4F6FF' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Vendor Registration Received!</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Thank you for registering as a vendor on <span className="font-semibold">ChillNet</span>!<br />
            Your application has been received and is currently under review.<br />
            You will be notified via email or SMS once your account is approved.
          </p>
          <Link href="/" passHref>
            <button
              className="text-gray-800 font-bold py-3 px-6 rounded shadow-md text-lg transition"
              type="button"
              style={{ backgroundColor: '#FFDDAE' }} // Figma button color
            >
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";

export default function CustomerSupport() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 min-w-[500px] max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Customer Support</h1>
        <p className="text-gray-600">Get help and support for your account.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            Our customer support team is here to help you with any questions or issues you may have.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📧</span>
              <span className="text-gray-700">Email: support@chillnet.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📞</span>
              <span className="text-gray-700">Phone: +63 912 345 6789</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">💬</span>
              <span className="text-gray-700">Live Chat: Available 24/7</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">FAQ</h3>
          <div className="space-y-3">
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                How do I change my delivery address?
              </summary>
              <p className="mt-2 text-gray-600">
                You can update your delivery address in your profile settings under "My Account".
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                What payment methods do you accept?
              </summary>
              <p className="mt-2 text-gray-600">
                We accept GCash, PayMaya, credit cards, and cash on delivery.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                How do I return a drum?
              </summary>
              <p className="mt-2 text-gray-600">
                Contact our support team to schedule a drum pickup. We'll arrange collection within 24-48 hours.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';

const orders = [
  {
    image: '/mango.jpg',
    title: 'Mango Ice cream free cones',
    size: 'Large',
    shop: 'Shop / Vendor Name',
    price: '₱ 2800.00',
    status: 'Pending',
    orderId: '923013',
    contact: '09123456789',
    location: 'Purok 3 Bangbang, Cordova, Cebu',
    deliveryDate: '05/20/2025 3:00PM',
    deliveryFee: 'Free',
    deliveryStatus: 'Out for Delivery',
    payment: 'Gcash (downpayment 50%)',
  },
  {
    image: '/placeholder.svg?height=60&width=60',
    title: 'Order Description',
    size: 'Large',
    shop: 'Shop / Vendor Name',
    price: '₱ 2800.00',
    status: 'Out for Delivery',
  },
  {
    image: '/placeholder.svg?height=60&width=60',
    title: 'Order Description',
    size: 'Large',
    shop: 'Shop / Vendor Name',
    price: '₱ 2800.00',
    status: 'Delivered',
  },
];

const statusClass = (status) => {
  if (status === 'Pending') return 'italic text-gray-700';
  if (status === 'Out for Delivery') return 'italic text-blue-700';
  if (status === 'Delivered') return 'italic text-green-700';
  return '';
};

export default function MyOrder() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      {/* Order List */}
      <div className="bg-[#C6E7FF] rounded-2xl shadow-xl p-8 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">My Order</h2>
        <div className="w-full">
          <div className="grid grid-cols-12 font-semibold text-gray-700 mb-2 px-2">
            <div className="col-span-6"> </div>
            <div className="col-span-3 text-center">To Pay</div>
            <div className="col-span-3 text-center">Status</div>
          </div>
          {orders.map((order, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedOrder(order)}
              className="cursor-pointer grid grid-cols-12 items-center bg-blue-50 hover:bg-blue-100 rounded-lg mb-4 px-2 py-3 transition"
            >
              <div className="col-span-6 flex items-center">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-16 h-16 object-cover rounded mr-4 bg-gray-200"
                />
                <div>
                  <div className="font-semibold text-lg text-black">{order.title}</div>
                  <div className="text-sm italic text-gray-700">{order.size}</div>
                  <div className="text-xs text-gray-600">{order.shop}</div>
                </div>
              </div>
              <div className="col-span-3 text-center font-semibold text-lg text-gray-800">
                {order.price}
              </div>
              <div className={`col-span-3 text-center font-semibold text-md ${statusClass(order.status)}`}>
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[600px] max-w-full">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setSelectedOrder(null)} className="text-2xl font-bold text-black">&larr;</button>
              <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
              <div></div>
            </div>

            <div className="flex items-center mb-4">
              <img
                src={selectedOrder.image}
                alt={selectedOrder.title}
                className="w-16 h-16 rounded border border-gray-300 bg-white object-cover mr-4"
              />
              <div>
                <div className="font-semibold">{selectedOrder.title}</div>
                <div className="text-sm italic">{selectedOrder.size}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm">x1</div>
                <div className="font-bold">{selectedOrder.price}</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
              <p><strong>Contact Information:</strong> {selectedOrder.contact}</p>
              <p><strong>Delivery Location:</strong> {selectedOrder.location}</p>
              <p><strong>Delivery date & time:</strong> {selectedOrder.deliveryDate}</p>
              <p><strong>Delivery fee:</strong> {selectedOrder.deliveryFee}</p>
              <p><strong>Delivery Status:</strong> {selectedOrder.deliveryStatus}</p>
              <p><strong>Payment:</strong> {selectedOrder.payment}</p>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow text-sm font-medium">
                Return Drum
              </button>
              <button className="px-4 py-2 rounded-full bg-orange-200 hover:bg-orange-300 shadow text-sm font-medium">
                Order Received
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

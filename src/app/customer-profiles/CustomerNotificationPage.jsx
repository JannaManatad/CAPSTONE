import React from "react";
import useNotificationLogic from "../hooks/useNotificationLogic";

// Default notifications with read/unread status and images
const defaultNotifications = [
  {
    image: '/mango.jpg',
    title: 'Order Confirmed',
    message: 'Vendor ChillTayo has confirmed your 5-gallon order.',
    time: '10 mins ago',
    read: false,
  },
  {
    image: '/mango.jpg',
    title: 'Out for Delivery',
    message: 'Good news! Your ice cream order is out for delivery. Please prepare to receive it.',
    time: '1hr ago',
    read: true,
  },
  {
    image: '/mango.jpg',
    title: 'Drum return status',
    message: 'Vendor has acknowledged your drum return request. Please prepare the drum for pickup.',
    time: '1hr ago',
    read: true,
  },
  {
    image: '/choco.jpg',
    title: 'Promo: Free Toppings!',
    message: 'Get free toppings on your next order. Limited time only!',
    time: '2hr ago',
    read: false,
  },
];

export default function CustomerNotificationPage({
  profile,
  selectedNotif,
  setSelectedNotif,
  editingProfile,
  setEditingProfile,
  editName,
  setEditName,
  selectedSection,
  setSelectedSection,
  editImage,
  setEditImage,
  handleProfileImageChange,
  handleProfileSave,
  fileInputRef,
  notifications: propNotifications,
}) {
  // Only use the hook for notifications
  const {
    notifications,
    modalNotif,
    handleMarkAllRead,
    handleViewDetails,
    setModalNotif,
  } = useNotificationLogic(propNotifications || defaultNotifications);

  return (
    <>
      {/* Notifications */}
      <div className="bg-blue-100 rounded-xl shadow-lg p-6 w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg text-gray-800">Notifications</span>
          <button
            className="text-blue-700 font-semibold hover:underline text-sm"
            onClick={handleMarkAllRead}
          >
            Mark as all read
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map((notif, idx) => (
            <div
              key={idx}
              className={`flex items-center bg-blue-50 rounded mb-2 p-3 border ${notif.read ? 'border-transparent' : 'border-blue-400'}`}
              style={{ opacity: notif.read ? 0.7 : 1 }}
            >
              <img src={notif.image} alt="notif" className="w-16 h-16 rounded object-cover mr-4 bg-gray-200" />
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="font-bold text-lg text-gray-800">{notif.title}</div>
                  {!notif.read && (
                    <span
                      className="ml-2 inline-block w-3 h-3 rounded-full bg-blue-500"
                      title="Unread"
                    ></span>
                  )}
                </div>
                <div className="text-gray-700 text-sm">{notif.message}</div>
              </div>
              <div className="flex flex-col items-end ml-4">
                <button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded px-4 py-1 mb-2 shadow transition text-sm"
                  onClick={() => handleViewDetails(notif, idx)}
                >
                  view details
                </button>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Details Modal */}
      {modalNotif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Notification Details</h3>
              <button
                onClick={() => setModalNotif(null)}
                className="text-gray-600 hover:text-red-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img src={modalNotif.image} className="w-16 h-16 rounded mr-4 object-cover" alt="notif" />
              <div>
                <h4 className="font-bold text-lg">{modalNotif.title}</h4>
                <p className="text-sm text-gray-700">{modalNotif.message}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Received: {modalNotif.time}</p>
          </div>
        </div>
      )}
    </>
  );
}
"use client";
import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { MdShoppingCart, MdNotifications, MdHelp, MdLocalShipping, MdAssignment } from "react-icons/md";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import CustomerNotificationPage from "./CustomerNotificationPage";
import CustomerSupport from "./CustomerSupport";

export default function CustomerProfileLayout() {
  const [selectedSection, setSelectedSection] = useState('My Account');
  const [profile, setProfile] = useState({
    name: 'Felix Alimento',
    username: 'Felixalimento124',
    email: 'Fe*************@gmail.com',
    phone: '09********36',
    gender: 'Male',
    dateOfBirth: '**/**/2003',
    image: '/icons/user.png'
  });

  const [editingProfile, setEditingProfile] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editImage, setEditImage] = useState(profile.image);
  const fileInputRef = useRef(null);

  const handleProfileImageChange = (e, setImage, isMain = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        setImage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = () => {
    setProfile(prev => ({ ...prev, name: editName, image: editImage }));
    setEditingProfile(false);
  };

  const handleProfilePicClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const navigationItems = [
    { id: 'My Account', label: 'My Account' },
    { id: 'My Order', label: 'My Order' },
    { id: 'Notification', label: 'Notification' },
    { id: 'Customer Support', label: 'Customer Support' }
  ];

  const renderMainContent = () => {
    switch (selectedSection) {
      case 'My Account':
        return (
          <MyAccount
            profile={profile}
            setProfile={setProfile}
            editingProfile={editingProfile}
            setEditingProfile={setEditingProfile}
            editName={editName}
            setEditName={setEditName}
            editImage={editImage}
            setEditImage={setEditImage}
            fileInputRef={fileInputRef}
            handleProfileImageChange={handleProfileImageChange}
            handleProfileSave={handleProfileSave}
          />
        );
      case 'My Order':
        return <MyOrder />;
      case 'Notification':
        return (
          <CustomerNotificationPage
            profile={profile}
            selectedNotif={null}
            setSelectedNotif={() => {}}
            editingProfile={editingProfile}
            setEditingProfile={setEditingProfile}
            editName={editName}
            setEditName={setEditName}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            editImage={editImage}
            setEditImage={setEditImage}
            handleProfileImageChange={handleProfileImageChange}
            handleProfileSave={handleProfileSave}
            fileInputRef={fileInputRef}
          />
        );
      case 'Customer Support':
        return <CustomerSupport />;
      default:
        return (
          <MyAccount
            profile={profile}
            setProfile={setProfile}
            editingProfile={editingProfile}
            setEditingProfile={setEditingProfile}
            editName={editName}
            setEditName={setEditName}
            editImage={editImage}
            setEditImage={setEditImage}
            fileInputRef={fileInputRef}
            handleProfileImageChange={handleProfileImageChange}
            handleProfileSave={handleProfileSave}
          />
        );
    }
  };

  return (
    <main
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(to bottom, #b3e0ff 0%, #3399ff 100%)",
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
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-6 py-2 w-72 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 text-lg"
            />
            <span className="absolute top-2.5 right-4 text-gray-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              </svg>
            </span>
          </div>
          <span className="font-semibold text-lg text-sky-900 cursor-pointer hover:underline">
            Find nearby Vendors
          </span>
          <div className="flex items-center space-x-3 bg-white rounded-lg px-4 py-2 shadow">
            <MdAssignment className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" title="Order" />
            <MdLocalShipping className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" title="Package" />
            <MdShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" title="Cart" />
            <MdNotifications className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" title="Notifications" />
            <MdHelp className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" title="Help" />
          </div>
          <img
            src={profile.image}
            alt="User"
            className="w-10 h-10 rounded-full bg-gray-200 border border-gray-400"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-start px-16 mt-8 gap-12">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-white/60 rounded-2xl shadow-lg p-8 min-w-[320px] max-w-xs">
          <div className="flex flex-col items-center mb-6">
            <div
              className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mb-4 overflow-hidden cursor-pointer group border-4 border-white shadow"
              onClick={handleProfilePicClick}
              title="Change profile photo"
            >
              {profile.image ? (
                <img src={profile.image} alt="Profile" className="w-32 h-32 object-cover rounded-full" />
              ) : (
                <FaUserCircle className="w-24 h-24 text-blue-600" />
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={e => handleProfileImageChange(e, setEditImage, true)}
              />
            </div>
            <span className="font-bold text-2xl text-gray-800">{profile.name}</span>
            <span
              className="text-base text-blue-700 cursor-pointer hover:underline"
              onClick={() => {
                setEditName(profile.name);
                setEditImage(profile.image);
                setEditingProfile(true);
              }}
            >
              Edit Profile
            </span>
          </div>
          <div className="flex flex-col w-full space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`font-bold rounded py-3 text-lg shadow transition-colors ${
                  selectedSection === item.id
                    ? 'bg-orange-300 hover:bg-orange-400 text-black'
                    : 'bg-blue-200 hover:bg-blue-300 text-black'
                }`}
                onClick={() => setSelectedSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {renderMainContent()}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {editingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Edit Profile</h3>
              <button
                onClick={() => setEditingProfile(false)}
                className="text-gray-600 hover:text-red-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="relative mb-4 cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
                title="Change profile photo"
              >
                <img
                  src={editImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-xs">Change</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={e => handleProfileImageChange(e, setEditImage)}
                />
              </div>
              <input
                type="text"
                className="border rounded px-3 py-2 mb-3 w-full text-center"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                placeholder="Your Name"
              />
              <button
                onClick={handleProfileSave}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-6 py-2 shadow transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messenger Icon */}
      <div className="fixed bottom-2 right-4 z-50">
        <button className="flex items-center bg-white border border-blue-300 rounded-full px-3 py-1 shadow hover:bg-blue-50">
          <FaFacebookMessenger className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-700 font-medium text-sm">Messenger</span>
        </button>
      </div>
    </main>
  );
} 
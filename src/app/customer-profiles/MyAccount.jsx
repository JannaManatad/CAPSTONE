import React from "react";

export default function MyAccount({
  profile,
  setProfile,
  editingProfile,
  setEditingProfile,
  editName,
  setEditName,
  editImage,
  setEditImage,
  fileInputRef,
  handleProfileImageChange,
  handleProfileSave,
}) {
  return (
<div
  className="rounded-xl shadow-lg p-6 mx-auto"
  style={{
    backgroundColor: "#C6E7FF",
    width: "850px",       // 👈 Custom widght limit
    overflowY: "auto",    // 👈 Allows scroll if needed
  }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1f2937] mb-2">My Profile</h1>
        <p className="text-[#1f2937]">Manage and protect your account.</p>
      </div>

      <div className="space-y-6 text-[#1f2937]">
        {/* Username */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Username</span>
          <span>{profile.username}</span>
        </div>

        {/* Name */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Name</span>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
            className="border border-gray-400 rounded px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-[#1f2937]"
          />
        </div>

        {/* Email */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Email</span>
          <div className="flex items-center space-x-2">
            <span>{profile.email}</span>
            <button className="text-blue-700 hover:underline text-sm">Change</button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Phone Number</span>
          <div className="flex items-center space-x-2">
            <span>{profile.phone}</span>
            <button className="text-blue-700 hover:underline text-sm">Change</button>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Gender</span>
          <div className="flex items-center space-x-4">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={profile.gender === gender}
                  onChange={(e) => setProfile((prev) => ({ ...prev, gender: e.target.value }))}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="font-semibold">Date of birth</span>
          <div className="flex items-center space-x-2">
            <span>{profile.dateOfBirth}</span>
            <button className="text-blue-700 hover:underline text-sm">Change</button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleProfileSave}
          className="bg-[#FFDDAE] hover:bg-orange-350 text-[#1f2937] font-semibold rounded-lg px-4 py-1 shadow-md transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}

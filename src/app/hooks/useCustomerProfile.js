import { useState, useRef } from 'react';

export default function useCustomerProfile() {
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [editingProfile, setEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Felix Alimento',
    image: '/icons/user.png',
  });
  const [editName, setEditName] = useState(profile.name);
  const [editImage, setEditImage] = useState(profile.image);

  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);

  const handleProfileImageChange = (e, setImage) => {
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
    setProfile({ name: editName, image: editImage });
    setEditingProfile(false);
  };

  return {
    selectedNotif,
    setSelectedNotif,
    editingProfile,
    setEditingProfile,
    profile,
    setProfile,
    editName,
    setEditName,
    editImage,
    setEditImage,
    fileInputRef,
    editFileInputRef,
    handleProfileImageChange,
    handleProfileSave,
  };
}

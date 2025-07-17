import { useState } from "react";

export default function useNotificationLogic(initialNotifications = []) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [modalNotif, setModalNotif] = useState(null);

  // Mark all notifications as read
  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // When view details is clicked, mark as read and show modal
  const handleViewDetails = (notif, idx) => {
    setNotifications(notifications =>
      notifications.map((n, i) =>
        i === idx ? { ...n, read: true } : n
      )
    );
    setModalNotif({ ...notif, read: true });
  };

  return {
    notifications,
    modalNotif,
    handleMarkAllRead,
    handleViewDetails,
    setModalNotif,
  };
}
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const notifications = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: "UI/UX Designer",
  message: "UI/UX Designer job opportunity in Mumbai",
  time: "1w",
}));

const NotificationList = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Notification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://logodix.com/logo/8120.png"
                alt="logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">{note.title}</h4>
                <p className="text-gray-500 text-xs">{note.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>{note.time}</span>
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
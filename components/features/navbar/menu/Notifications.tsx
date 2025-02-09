import React from "react";
import { Bell, Dot } from "lucide-react";

function Notifications() {
  return (
    <div className="relative text-clr_sup_yellow w-10 h-10 flex items-center justify-center">
      {/* Positioned Dot at the top-right with some spacing */}
      <span className="absolute top-0 right-0 p-2 flex">
        <Dot className="w-6 h-6 text-red-600 translate-x-1/2 -translate-y-1/2" />
      </span>
      <Bell size={24} />
    </div>
  );
}

export default Notifications;

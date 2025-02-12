import React from "react";
import { Bell, Dot } from "lucide-react";

function Notifications() {
  return (
    <div className="relative bg-[#FFFAF1] w-10 h-10 flex items-center justify-center rounded-sm">
      {/* Positioned Dot at the top-right with some spacing */}
      <span className="absolute top-0 right-0 p-2 flex">
        <Dot className="w-6 h-6 text-red-600 translate-x-1/2 -translate-y-1/2" />
      </span>
      <Bell size={24} className="text-clr_sup_yellow" />
    </div>
  );
}

export default Notifications;

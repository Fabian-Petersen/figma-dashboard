import React from "react";
import pageLinkData from "@/public/data/pageLinkData";
import Logo from "../features/navbar/Logo";

const Sidebar = () => {
  return (
    <div className="w-[20rem] h-screen bg-white py-6">
      <Logo variant="sidebar" />
      <ul className="p-4 text-lg space-y-10 capitalize text-slate-400 flex pl-[5rem] flex-col border border-red-500 h-full">
        {pageLinkData.map((link) => (
          <li key={link.id} className="tracking-wider">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

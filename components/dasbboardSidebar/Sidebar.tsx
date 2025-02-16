import React from "react";

import LogoSidebar from "./LogoSidebar";
import SideBarLinks from "./SideBarLinks";

const Sidebar = () => {
  return (
    <aside className="h-screen w-full bg-white flex flex-col gap-8 pt-14 border-none">
      <LogoSidebar />
      <SideBarLinks />
    </aside>
  );
};

export default Sidebar;

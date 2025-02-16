import React from "react";

import LogoSidebar from "./LogoSidebar";
import SideBarLinks from "./SideBarLinks";

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={`${className} hidden bg-white sm:flex flex-col gap-8 px-4`}
    >
      <LogoSidebar />
      <SideBarLinks />
    </aside>
  );
};

export default Sidebar;

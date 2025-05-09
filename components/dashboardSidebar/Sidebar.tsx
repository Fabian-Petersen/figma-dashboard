// $ This is the main component for the sidebar. The children are the sidebarLinks Component. Also, the logo is noy displayed on screen size less than 968px.

import React from "react";
import LogoSidebar from "./LogoSidebar";
import SideBarLinks from "./SideBarLinks";
import useScreenSize from "@/app/hooks/useScreenSize";

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  const isMobile = useScreenSize(968);

  return (
    <nav className={`${className} hidden bg-white sm:flex flex-col gap-8 px-4`}>
      {isMobile ? "" : <LogoSidebar />}
      <SideBarLinks />
    </nav>
  );
};

export default Sidebar;

"use client";

// $ Mobile Menu button for the sidebar
import { MenuIcon } from "lucide-react";
import { useNav } from "@/app/contexts/MenuToggleContext";

const MobileMenuButton = () => {
  const { openSidebar, setOpenSidebar } = useNav();
  console.log("openSidebar from MobileMenuButton:", openSidebar);
  return (
    <button
      onClick={() => setOpenSidebar(!openSidebar)}
      className="text-white pr-4 lg:hidden"
    >
      <MenuIcon size={24} className="text-clr_blueGray_800" />
    </button>
  );
};

export default MobileMenuButton;

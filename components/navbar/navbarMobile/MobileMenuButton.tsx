"use client";
import { MenuIcon } from "lucide-react";
import { useNav } from "@/app/contexts/MenuToggleContext";

const MobileMenuButton = () => {
  const { openNav, setOpenNav } = useNav();
  console.log("openNav from MobileMenuButton:", openNav);
  return (
    <button onClick={() => setOpenNav(!openNav)} className="text-white pr-4">
      <MenuIcon size={24} />
    </button>
  );
};

export default MobileMenuButton;

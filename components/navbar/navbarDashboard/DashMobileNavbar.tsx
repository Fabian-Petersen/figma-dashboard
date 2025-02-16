"use client";

// $ This is the Navbar for the dashboard on a mobile device
import MobileMenuButton from "./MobileMenuButton";
import { Search } from "lucide-react";
import LogoSidebar from "@/components/dashboardSidebar/LogoSidebar";
import Menu from "./menu/Menu";

const DashMobileNavbar = () => {
  return (
    <div className="fixed top-0 flex justify-between items-center p-4 shadow-md h-[4rem] sm:hidden w-full bg-white z-[1000]">
      <div className="flex items-center gap-4">
        <LogoSidebar />
        <MobileMenuButton />
      </div>
      <div className="flex items-center gap-4">
        <Search className="text-clr_primary_900" />
        <Menu />
      </div>
    </div>
  );
};

export default DashMobileNavbar;

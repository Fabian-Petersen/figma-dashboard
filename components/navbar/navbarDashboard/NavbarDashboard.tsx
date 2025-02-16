"use client";
// $ Mobile NavbarDashboard for the Dashboard Layout

import Logo from "./Logo";
import Menu from "./menu/Menu";
import Language from "./language/LanguageSelector";
import SearchBar from "./SearchBar";
import useScreenSize from "@/app/hooks/useScreenSize";
import DashMobileNavbar from "./DashMobileNavbar";

type NavbarProps = {
  className?: string;
};

const NavbarDashboard = ({ className }: NavbarProps) => {
  const isMobile = useScreenSize(640);
  return isMobile ? (
    <DashMobileNavbar />
  ) : (
    <nav className={`${className}`}>
      <div className="h-[4rem] w-full flex justify-between items-center">
        <Logo variant="navbar" />
        <div className="py-4 bg-white flex items-center gap-4 ml-auto pr-10">
          <SearchBar />
          <Language />
          <Menu />
        </div>
      </div>
    </nav>
  );
};
export default NavbarDashboard;

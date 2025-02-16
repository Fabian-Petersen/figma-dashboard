"use client";
import MobileMenuButton from "./MobileMenuButton";
import MobileLogo from "./MobileLogo";
import SignInOutButton from "./SignInOutButton";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const path = usePathname();
  // $ Remove the homepage navbar when the path is /dashboard since it contains different components.
  return path === "/dashboard/" ? null : (
    <div className="fixed top-0 z-[1000] w-full bg-transparent shadow-md">
      <div className="flex justify-between items-center p-4">
        <MobileLogo />
        <div className="flex items-center gap-4">
          <SignInOutButton />
          <MobileMenuButton />
        </div>
      </div>
      <MobileDropDownMenu />
    </div>
  );
};

export default MobileNavbar;

"use client";
// $ This component renders the signin and signup buttons for the navbar on the home page. The component also dont display the signup button if the user is already on the register page.
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import NavbarLinks from "./NavbarLinks";
import DesktopLogo from "./DesktopLogo";
import useScreenSize from "@/app/hooks/useScreenSize";
import MobileMenuButton from "../navbarMobile/MobileMenuButton";
import { usePathname } from "next/navigation";
const NavbarHomePage = () => {
  const isMobile = useScreenSize(768);
  const path = usePathname();

  return path === "/dashboard/" ? null : (
    <nav className="fixed top-0 w-full flex bg-transparent px-2 z-[100] sm:h-[var(--navbar-height)] sm:mt-12 mt-4 py-2">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex justify-between flex-1 items-center md:pr-10">
          <DesktopLogo />
          {isMobile ? "" : <NavbarLinks />}
        </div>
        {isMobile ? (
          <MobileMenuButton />
        ) : path === "/register/" ? null : (
          <div className="flex items-center xl:gap-4 gap-2 justify-center">
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarHomePage;

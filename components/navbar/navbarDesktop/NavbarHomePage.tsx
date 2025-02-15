import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import NavbarLinks from "./NavbarLinks";
import DesktopLogo from "./DesktopLogo";
import useScreenSize from "@/app/hooks/useScreenSize";
import MobileMenuButton from "../navbarMobile/MobileMenuButton";

const NavbarDesktop = () => {
  const isMobile = useScreenSize(640);

  return (
    <nav className="fixed top-0 w-full flex bg-transparent px-2 z-[100] sm:h-[var(--navbar-height)] sm:mt-12 mt-4 py-2">
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto">
        <div className="flex xl:gap-14 items-center">
          <DesktopLogo />
          {isMobile ? "" : <NavbarLinks />}
        </div>
        {isMobile ? (
          <MobileMenuButton />
        ) : (
          <div className="flex items-center xl:gap-4 gap-2 justify-center">
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarDesktop;

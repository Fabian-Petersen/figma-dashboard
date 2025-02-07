"use client";

import Logo from "./Logo";
import NavbarProgressBar from "./NavbarProgressBar";
import NavbarActionButtons from "./NavbarActionButtons";

const Navbar = () => {
  return (
    <>
      <nav className="h-[var(--navbar-height)] w-full py-4 flex items-center bg-white dark:bg-navbarDark shadow-md">
        <Logo variant="navbar" />
        <div className="flex w-full items-center justify-around">
          <NavbarActionButtons />
        </div>
      </nav>
      <NavbarProgressBar className="justify-end z-[1000]" />
    </>
  );
};
export default Navbar;

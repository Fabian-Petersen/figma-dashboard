"use client";

import Logo from "./Logo";
import Menu from "./menu/Menu";
import Language from "./language/LanguageSelector";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <nav className="h-[var(--navbar-height)] w-full py-4 flex items-center bg-white gap-2">
        <Logo variant="navbar" />
        <div className="flex items-center gap-4 ml-auto pr-10">
          <SearchBar />
          <Language />
          <Menu />
        </div>
      </nav>
    </>
  );
};
export default Navbar;

import React from "react";
import NavbarLinks from "../navbarDesktop/NavbarLinks";
import { useNav } from "@/app/contexts/MenuToggleContext";

function MobileDropDownMenu() {
  const { openNav } = useNav();

  console.log("openNav from MobileDropDown:", openNav);
  return (
    <div
      className={`p-0 w-full bg-clr_primary_landing z-[900] transition-all duration-300 ${
        openNav ? "h-[15rem] opacity-100" : "h-0 opacity-0"
      }
        `}
    >
      <NavbarLinks />
    </div>
  );
}

export default MobileDropDownMenu;

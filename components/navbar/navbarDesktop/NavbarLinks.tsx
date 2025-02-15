// $ This component generated the links for both the mobile and the desktop navbar menu

import React from "react";
import homePageLinks from "@/public/data/homePageLinks";
import useScreenSize from "@/app/hooks/useScreenSize";

function NavbarLinks() {
  const isMobile = useScreenSize(640);
  return (
    <ul
      className={`flex text-[#8794BA] capitalize ${
        isMobile
          ? "flex-col gap-5 text-2xl items-center py-6"
          : "text-clampNavMenuText gap-4 xl:gap-6"
      }`}
    >
      {homePageLinks.map((link, index) => (
        <li className="hover:text-clr_landing_red cursor-pointer" key={index}>
          {link.name}
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;

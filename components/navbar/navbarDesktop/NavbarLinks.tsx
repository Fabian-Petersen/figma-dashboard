// $ This component generated the links for both the mobile and the desktop navbar menu
"use client";
import React from "react";
import homePageLinks from "@/public/data/homePageLinks";
import useScreenSize from "@/app/hooks/useScreenSize";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavbarLinks() {
  const isMobile = useScreenSize(640);
  const path = usePathname();
  // console.log(path);
  return (
    <div
      className={`flex text-[#8794BA] capitalize ${
        isMobile
          ? "flex-col text-2xl items-center py-6 gap-2"
          : "text-clampNavMenuText gap-6"
      }`}
    >
      {path === "/" ? undefined : (
        <Link href="/" className="hover:text-clr_landing_red cursor-pointer">
          Home
        </Link>
      )}
      {homePageLinks.map((link, index) => (
        <Link
          href={link.url}
          className="hover:text-clr_landing_red cursor-pointer"
          key={index}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinks;

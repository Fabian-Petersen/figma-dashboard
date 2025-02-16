import React from "react";
import pageLinkData from "@/public/data/pageLinkData";
import SignOutButton from "./SignOutButton";

function SideBarLinks() {
  return (
    <>
      <ul className="capitalize text-clr_blueGray_700 flex flex-col gap-4 h-full w-full mx-auto">
        {pageLinkData.map((link) => (
          <li
            key={link.id}
            className="tracking-wider flex items-center gap-4 justify-start hover:cursor-pointer lg:hover:bg-clr_primary_900 bg-transparent py-4 mx-auto lg:mx-0 px-4 hover:lg:text-white hover:rounded-lg"
          >
            <span className="hover:text-clr_primary_900 lg:hover:text-white">
              {React.createElement(link.icon)}
            </span>

            <a href={link.url} className="hidden lg:block">
              {link.name}
            </a>
          </li>
        ))}
        <SignOutButton />
      </ul>
    </>
  );
}

export default SideBarLinks;

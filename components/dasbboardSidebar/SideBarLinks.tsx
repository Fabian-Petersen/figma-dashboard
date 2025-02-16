import React from "react";
import pageLinkData from "@/public/data/pageLinkData";
import SignOutButton from "./SignOutButton";

function SideBarLinks() {
  return (
    <>
      <ul className="capitalize text-clr_blueGray_700 flex flex-col gap-4 h-full w-[252px] mx-auto">
        {pageLinkData.map((link) => (
          <li
            key={link.id}
            className="tracking-wider flex items-center gap-4 justify-start hover:cursor-pointer hover:bg-clr_primary_900 py-4 px-4 hover:text-white hover:rounded-lg"
          >
            <span>{React.createElement(link.icon)}</span>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
        <SignOutButton />
      </ul>
    </>
  );
}

export default SideBarLinks;

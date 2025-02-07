"use client";

import { SidebarClose } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import MobileMenuLinks from "./MobileMenuLinks";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileSidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <aside
      className={`dark:text-white fixed top-0 left-[-250px] w-[250px] z-[3000] uppercase transform transition-transform bg-gray-900 duration-500 ease-out h-full ${
        isOpen ? "translate-x-[250px]" : "translate-x-[-250px]"
      }`}
    >
      <button
        className="absolute w-[2rem] h-[2rem] hover:cursor-pointer hover:scale-110 right-[10px] top-[17px] text-white"
        onClick={() => setIsOpen(false)}
      >
        <SidebarClose size={25} />
      </button>
      <MobileMenuLinks />
    </aside>
  );
};
export default MobileSidebar;

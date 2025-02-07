"use client";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggleMenu from "./ThemeToggleButton";
import useIsScrolled from "@/app/customHooks/useIsScrolled";
import { Dispatch, SetStateAction } from "react";
import AddTestimonialButton from "./AddTestimonialButton";
import LoginButton from "./LoginButton";

type MobileHeaderProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileHeader = ({ isOpen, setIsOpen }: MobileHeaderProps) => {
  const { isScrolled } = useIsScrolled();

  return (
    <div
      className={`flex fixed justify-between top-0 h-auto p-4 w-full z-[2500] ${
        isScrolled
          ? "bg-white transition-all duration-300 dark:bg-navbarDark shadow-md h-[3rem]"
          : "bg-transparent"
      }
    ${isOpen && "transition-transform ease-out duration-500]"}`}
    >
      <button
        className={`dark:text-white w-[2rem] h-[2rem] hover:cursor-pointer hover:scale-110 ${
          isOpen && "opacity-0"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
      <div className="flex gap-4 items-center justify-between">
        <LoginButton />
        <AddTestimonialButton />
        <ThemeToggleMenu />
      </div>
    </div>
  );
};
export default MobileHeader;

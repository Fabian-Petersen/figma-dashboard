import React from "react";
import LoginButton from "./LoginButton";
import ThemeToggleButton from "@/components/features/navbar/ThemeToggleButton";

const NavbarActionButtons = () => {
  return (
    <div className="flex gap-4 xs:gap-4 justify-end items-center">
      <LoginButton />
      <ThemeToggleButton />
    </div>
  );
};

export default NavbarActionButtons;

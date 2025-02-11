// create a custom hook to open and close a menu from the left using the state of the menu.

import { useState } from "react";

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu is open: ", isOpen);
  };

  return { isOpen, toggleMenu };
};

export default useMobileMenu;

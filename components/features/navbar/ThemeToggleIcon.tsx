import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { TooltipProps } from "flowbite-react";

type ThemeToggleIconProps = {
  handleClick: () => void;
  icon: FontAwesomeIconProps["icon"];
  placement?: TooltipProps["placement"];
  content: string;
};

const ThemeToggleIcon = ({ icon, handleClick }: ThemeToggleIconProps) => {
  return (
    <FontAwesomeIcon
      data-tooltip-target="tooltip-animation"
      icon={icon}
      className="dark:text-white text-fontDark sm:w-6 sm:h-6 w-5 h-5"
      onClick={handleClick}
    />
  );
};

export default ThemeToggleIcon;

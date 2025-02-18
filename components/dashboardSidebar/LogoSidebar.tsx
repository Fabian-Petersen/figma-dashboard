import React from "react";
import { SquareStack } from "lucide-react";

const LogoSidebar = () => {
  return (
    <div className="bg-white flex items-center justify-center lg:justify-start gap-4 sm:px-4 lg:w-[252px]">
      <span className="bg-clr_primary_900 rounded-sm px-2 py-2 flex justify-center items-center text-white">
        <SquareStack size={24} />
      </span>
      <p className="text-clr_blueGray_900 text-[20px] tracking-wider font-semibold hidden lg:block">
        Dabang
      </p>
    </div>
  );
};

export default LogoSidebar;

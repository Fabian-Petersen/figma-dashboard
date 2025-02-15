"use client";

import React from "react";
import useScreenSize from "@/app/hooks/useScreenSize";
function ActionButton() {
  const isMobile = useScreenSize(640);
  return (
    <div className={`${isMobile ? "mx-auto" : "px-3"}`}>
      <button
        className="text-white bg-clr_landing_red w-[15rem] rounded-full px-2 py-3 text-[1rem] hover:cursor-pointer"
        onClick={() => ""}
      >
        Try for Free
      </button>
    </div>
  );
}

export default ActionButton;

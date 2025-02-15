"use client";

import React from "react";
import useScreenSize from "@/app/hooks/useScreenSize";

const AngledLine = () => {
  const isMobile = useScreenSize(480);
  return isMobile ? (
    <div className="relative w-full h-[160px] bg-[#172755] place-items-end">
      {/* Pink section */}
      <div
        className="absolute inset-0 bg-[#ef2a82]"
        style={{
          clipPath: "polygon(0 90%, 100% 40%, 100% 50%, 0 100%)",
        }}
      />
      {/* White section */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 50%, 100% 100%, 0 100%)",
        }}
      />
    </div>
  ) : (
    <div className="w-full bg-[#172755]">
      {/* Pink section */}
      <div
        className="absolute inset-0 bg-[#ef2a82]"
        style={{
          clipPath: "polygon(0 98%, 100% 65%, 100% 80%, 0 100%)",
        }}
      />
      {/* White section */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 67%, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
};

export default AngledLine;

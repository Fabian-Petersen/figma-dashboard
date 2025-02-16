"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useScreenSize from "@/app/hooks/useScreenSize";
function ActionButton() {
  const isMobile = useScreenSize(640);
  const router = useRouter();
  return (
    <div className={`${isMobile ? "mx-auto" : "px-2"}`}>
      <button
        className="text-white bg-clr_landing_red w-[15rem] rounded-full px-2 py-3 text-[1rem] hover:cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        Try for Free
      </button>
    </div>
  );
}

export default ActionButton;

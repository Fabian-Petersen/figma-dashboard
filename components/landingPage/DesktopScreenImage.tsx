"use client";

import React from "react";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

function MainScreenImage() {
  const isMobile = useScreenSize(640);
  return isMobile ? null : (
    <div className="">
      <Image
        src="/images/landingPage/main-screen.png"
        alt="landing page illustration"
        fill
        className="object-contain"
      />
    </div>
  );
}

export default MainScreenImage;

"use client";
// $ This component is the parent containing the mobile elements on the home screen.

import React from "react";
import TextBlock from "./TextBlock";
import ActionButton from "./ActionButton";
import useScreenSize from "@/app/hooks/useScreenSize";
import Image from "next/image";

function HeaderMobile() {
  const isMobile = useScreenSize(640);
  return isMobile ? (
    // $ ========================= Styling for the Desktop ========================= //
    <div className="grid h-screen place-content-center">
      <div className="w-full relative h-[350]">
        <Image
          src="/images/landingPage/main-screen-component.png"
          alt="landing page illustration"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-2 gap-8 ">
        <TextBlock />
        <ActionButton />
      </div>
    </div>
  ) : (
    // $ ========================= Styling for the Desktop ========================= //
    <div className="grid grid-cols-[1fr_1fr] gap-2 max-w-7xl mx-auto h-screen">
      <div className="flex flex-col justify-center items-start gap-12">
        <TextBlock />
        <ActionButton />
      </div>
      <div className="relative">
        <Image
          src="/images/landingPage/main-screen-component.png"
          alt="landing page illustration"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default HeaderMobile;

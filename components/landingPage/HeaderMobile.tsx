"use client";
// $ This component is the parent containing the mobile elements on the home screen.

import React from "react";
import MobileScreenImage from "./MobileScreenImage";
import TextBlock from "./TextBlock";
import ActionButton from "./ActionButton";
import useScreenSize from "@/app/hooks/useScreenSize";

function HeaderMobile() {
  const isMobile = useScreenSize(640);
  return (
    <div
      className={
        isMobile
          ? "flex gap-6 flex-col justify-center flex-1 mt-32 sm:mt-[10rem]"
          : "hidden"
      }
    >
      <MobileScreenImage />
      <TextBlock />
      <ActionButton />
    </div>
  );
}

export default HeaderMobile;

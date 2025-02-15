"use client";
import React from "react";
import TextBlock from "./TextBlock";
import ActionButton from "./ActionButton";
import useScreenSize from "@/app/hooks/useScreenSize";

function HeaderDesktop() {
  const isMobile = useScreenSize(640);
  return (
    <div
      className={
        isMobile ? "hidden" : "relative max-w-5xl w-full mx-auto h-screen"
      }
    >
      <div className="flex flex-col gap-12 items max-w-[35rem] absolute top-[265px]">
        <TextBlock />
        <ActionButton />
      </div>
    </div>
  );
}

export default HeaderDesktop;

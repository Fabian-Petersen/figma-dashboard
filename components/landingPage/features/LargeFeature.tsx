"use client";

import React from "react";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

export default function LargeFeature() {
  const isMobile = useScreenSize(480);
  return isMobile ? (
    <>
      <Image
        src="/images/landingPage/subtract.svg"
        alt="decorative background element"
        fill
        className="object-cover"
      />
    </>
  ) : (
    <>
      <div className="absolute h-full w-[90rem] left-[520] -top-[38]">
        <Image
          src="/images/landingPage/subtract.svg"
          alt="decorative background element"
          width={1438}
          height={1438}
          className="object-cover"
        />
      </div>
    </>
  );
}

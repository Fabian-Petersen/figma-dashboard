"use client";

import React from "react";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

export default function LargeFeature() {
  const isMobile = useScreenSize(640);
  return isMobile ? (
    ""
  ) : (
    <>
      <div className="absolute h-auto w-[90rem] left-[520] xl:-bottom-[10rem] md:-bottom-[3rem] z-[-1]">
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

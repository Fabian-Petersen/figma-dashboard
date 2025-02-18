"use client";

// $ The Login Home Page. The hook switches the position of the image for better readability for the styling.
import React from "react";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

export default function LargeFeature() {
  const isMobile = useScreenSize(768);
  return isMobile ? (
    <>
      <div className="absolute h-auto w-[80rem] -left-[10rem] -bottom-[3rem] z-[-1]">
        <Image
          src="/images/landingPage/large_subtract.svg"
          alt="decorative background element"
          width={1438}
          height={1438}
          className="object-cover"
        />
      </div>
    </>
  ) : (
    <>
      <div className="absolute h-auto lg:w-[90rem] w-[60rem] left-[5rem] bottom-[0rem] lg:left-[520] xl:-bottom-[10rem] md:-bottom-[3rem] z-[-1]">
        <Image
          src="/images/landingPage/large_subtract.svg"
          alt="decorative background element"
          width={1438}
          height={1438}
          className="object-cover"
        />
      </div>
    </>
  );
}

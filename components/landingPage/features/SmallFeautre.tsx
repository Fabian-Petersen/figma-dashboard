import React from "react";
import Image from "next/image";

export default function SmallFeautre() {
  return (
    <div className="absolute h-auto -left-[100] -top-[100] sm:-top[261] z-[-1]">
      <Image
        src="/images/landingPage/small_substract.svg"
        alt="decorative subtract element"
        width={660}
        height={660}
        priority
        className="object-contain"
      />
    </div>
  );
}

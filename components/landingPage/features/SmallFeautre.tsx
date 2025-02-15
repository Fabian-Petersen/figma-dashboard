import React from "react";
import Image from "next/image";

export default function SmallFeautre() {
  return (
    <div className="absolute h-full w-full -left-[100px] -top-[261px]">
      <Image
        src="/images/landingPage/small_substract.svg"
        alt="decorative subtract element"
        width={660}
        height={660}
        priority
        className="object-cover"
      />
    </div>
  );
}

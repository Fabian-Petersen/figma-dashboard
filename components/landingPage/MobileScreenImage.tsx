import Image from "next/image";
import React from "react";

const MobileScreenImage = () => {
  return (
    <div className="w-full h-[231px] relative p-0">
      <Image
        src="/images/landingPage/main-screen-mobile-v3.jpg"
        alt="landing page illustration"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default MobileScreenImage;

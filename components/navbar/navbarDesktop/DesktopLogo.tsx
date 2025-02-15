import React from "react";
import Image from "next/image";

function DesktopLogo() {
  return (
    <div>
      <Image
        src="/images/landingPage/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="object-cover"
      />
    </div>
  );
}

export default DesktopLogo;

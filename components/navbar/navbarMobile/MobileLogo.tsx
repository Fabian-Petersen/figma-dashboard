import Image from "next/image";
import React from "react";

function MobileLogo() {
  return (
    <div>
      <Image
        src="/images/landingPage/mobile-logo.png"
        alt=""
        width={138}
        height={30}
      />
    </div>
  );
}

export default MobileLogo;

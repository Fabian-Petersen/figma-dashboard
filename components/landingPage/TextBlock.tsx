import React from "react";
import useScreenSize from "@/app/hooks/useScreenSize";

function TextBlock() {
  const isMobile = useScreenSize(640);
  return (
    <div
      className={`flex flex-col gap-4 text-white ${
        isMobile ? "px-4" : "max-w-[27rem]"
      } `}
    >
      <h1
        className={`font-bold ${
          isMobile
            ? "text-clampMobileHeading"
            : "text-4xl leading-[120%] font-semibold tracking-wider"
        }   `}
      >
        Monitor your business on real-time dashboard
      </h1>
      <p className={`${isMobile ? "" : ""} text-[0.9rem] tracking-wider`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam.
      </p>
    </div>
  );
}

export default TextBlock;

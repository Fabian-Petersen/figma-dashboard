import React from "react";
import useScreenSize from "@/app/hooks/useScreenSize";

function TextBlock() {
  const isMobile = useScreenSize(640);
  return (
    <div
      className={`flex flex-col gap-4 text-white ${
        isMobile ? "px-2" : "px-2"
      } `}
    >
      <h1
        className={`font-bold ${
          isMobile
            ? "text-3xl text-left"
            : "sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-tight lg:leading-[120%] eading-[120%] font-semibold tracking-wider"
        }   `}
      >
        Monitor your business on real-time dashboard
      </h1>
      <p className={`${isMobile ? "text-sm" : "text-[1rem]"}  tracking-wider`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam.
      </p>
    </div>
  );
}

export default TextBlock;

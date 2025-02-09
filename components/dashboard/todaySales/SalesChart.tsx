import React from "react";
import SalesCards from "./SalesCards";
import ChartHeading from "@/components/ChartHeading";
import Export from "./Export";

type Props = {
  className?: string;
};

const SalesChart = ({ className }: Props) => {
  return (
    <>
      <div className={`${className} flex flex-col gap-4`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <ChartHeading title="Today's Sales" />
            <p className="text-xs text-clr_blueGray_700">Sales Summary</p>
          </div>
          <Export />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <SalesCards />
        </div>
      </div>
    </>
  );
};

export default SalesChart;

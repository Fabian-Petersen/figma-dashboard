import React from "react";
import ChartHeading from "../../ChartHeading";

type Props = {
  className?: string;
};

function TopProducts({ className }: Props) {
  return (
    <div className={`${className}`}>
      <ChartHeading title="Top Products" />
    </div>
  );
}

export default TopProducts;

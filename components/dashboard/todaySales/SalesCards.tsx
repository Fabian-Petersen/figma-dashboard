import salesData from "@/public/data/todaySalesData";
import { icons } from "@/public/data/todaySalesData";
import React from "react";

function SalesCards() {
  return (
    <>
      {salesData.map((item) => {
        const IconComponent = icons[item.icon];
        return (
          <article
            key={item.id}
            className={`p-2 rounded-lg flex flex-col gap-2 justify-evenly bg-gray-500 flex-1`}
            style={{ backgroundColor: item.color }}
          >
            <span
              className="rounded-full size-8 flex items-center justify-center text-white"
              style={{ background: item.iconColor }}
            >
              <IconComponent size={16} />
            </span>
            <div className="font-semibold text-lg text-black">
              <span>$</span>
              {item.value}
            </div>
            <p className="text-clr_blueGray_700 capitalize text-[10.5px]">
              {item.name}
            </p>
            <p className="text-clr_primary_800 text-[10px] ">
              {item.variance} from yesterday
            </p>
          </article>
        );
      })}
    </>
  );
}

export default SalesCards;

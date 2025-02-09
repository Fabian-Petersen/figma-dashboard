"use client";

import React, { useState } from "react";
import ChartHeading from "../../ChartHeading";

// Sample sales data
const salesData = {
  USA: { name: "United States", value: 4500 },
  GBR: { name: "United Kingdom", value: 2500 },
  DEU: { name: "Germany", value: 3200 },
  FRA: { name: "France", value: 2800 },
  JPN: { name: "Japan", value: 3800 },
  CHN: { name: "China", value: 4200 },
  IND: { name: "India", value: 2900 },
  BRA: { name: "Brazil", value: 3100 },
  CAN: { name: "Canada", value: 2700 },
  AUS: { name: "Australia", value: 2400 },
};

// World map paths (simplified for major countries)
const worldMapPaths = {
  USA: "M 170 80 C 170 80 172 82 172 84 C 172 86 170 88 168 88 C 166 88 165 86 165 84 C 165 82 166 80 168 80 C 170 80 170 80 170 80 M 52 88 L 128 88 L 128 185 L 52 185 Z",
  CAN: "M 45 30 L 160 30 L 160 85 L 45 85 Z",
  BRA: "M 120 200 L 160 200 C 165 205 165 210 160 215 L 120 215 C 115 210 115 205 120 200",
  GBR: "M 215 75 Q 220 73 225 75 Q 227 80 225 85 Q 220 87 215 85 Q 213 80 215 75",
  FRA: "M 215 90 L 225 90 L 230 100 L 225 110 L 215 110 L 210 100 Z",
  DEU: "M 230 85 L 245 85 L 250 95 L 245 105 L 230 105 L 225 95 Z",
  RUS: "M 250 30 L 450 30 L 450 90 L 250 90 Z",
  CHN: "M 350 95 L 430 95 L 430 140 L 350 140 Z",
  JPN: "M 440 95 Q 445 100 445 105 Q 445 110 440 115 Q 435 110 435 105 Q 435 100 440 95",
  IND: "M 330 130 L 360 130 L 360 170 L 330 170 Z",
  AUS: "M 380 220 Q 400 215 420 220 Q 425 235 420 250 Q 400 255 380 250 Q 375 235 380 220",
};

type Props = {
  className?: string;
};

const SalesByCountry = ({ className }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const getCountryColor = (countryCode: string) => {
    const country = salesData[countryCode as keyof typeof salesData];
    if (!country) return "rgb(229 231 235)";

    const maxSale = Math.max(...Object.values(salesData).map((d) => d.value));
    const minSale = Math.min(...Object.values(salesData).map((d) => d.value));
    const scale = (country.value - minSale) / (maxSale - minSale);

    return `hsl(var(--chart-1) / ${0.2 + scale * 0.8})`;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div className={`${className} flex flex-col relative`}>
      <ChartHeading title="Sales by Country" />

      {selectedCountry &&
        salesData[selectedCountry as keyof typeof salesData] && (
          <div
            className="absolute bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm text-xs z-10"
            style={{
              left: `${tooltipPos.x + 10}px`,
              top: `${tooltipPos.y + 10}px`,
            }}
          >
            <p className="font-semibold">
              {salesData[selectedCountry as keyof typeof salesData].name}
            </p>
            <p>
              Sales: $
              {salesData[
                selectedCountry as keyof typeof salesData
              ].value.toLocaleString()}
            </p>
          </div>
        )}

      <div className="flex-1">
        <svg
          viewBox="0 0 500 300"
          className="w-full h-full dark:text-gray-600"
          onMouseMove={handleMouseMove}
        >
          {/* World map background - simplified representation */}
          <rect x="0" y="0" width="500" height="300" fill="transparent" />

          {/* Grid lines for reference */}
          <g stroke="currentColor" strokeWidth="0.2" opacity="0.3">
            {Array.from({ length: 10 }, (_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
            ))}
            {Array.from({ length: 6 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="500" y2={i * 50} />
            ))}
          </g>

          {/* Countries */}
          {Object.entries(worldMapPaths).map(([code, path]) => (
            <path
              key={code}
              d={path}
              fill={getCountryColor(code)}
              stroke="currentColor"
              strokeWidth="1"
              className="cursor-pointer transition-colors duration-200 hover:opacity-80"
              onMouseEnter={() => setSelectedCountry(code)}
              onMouseLeave={() => setSelectedCountry(null)}
            />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex justify-between px-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
        <span>Lower Sales</span>
        <div className="flex gap-1">
          {[0.2, 0.4, 0.6, 0.8, 1].map((opacity) => (
            <div
              key={opacity}
              className="w-4 h-4 border border-gray-200"
              style={{
                backgroundColor: `hsl(var(--chart-1) / ${opacity})`,
              }}
            />
          ))}
        </div>
        <span>Higher Sales</span>
      </div>
    </div>
  );
};

export default SalesByCountry;

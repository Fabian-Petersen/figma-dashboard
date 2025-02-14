"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import customerSatisfactionData from "@/public/data/customerSatisfactionData";
import ChartHeading from "../../ChartHeading";

type Props = {
  className: string;
};

const VisitorInsights = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex flex-col rounded-lg p-4 border border-clr_blueGray_400 shadow-md gap-4`}
    >
      <ChartHeading title="Customer Satisfaction" />
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart
          data={customerSatisfactionData}
          margin={{
            top: 5,
            right: 0,
            left: -50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0.1 0.1" />
          <XAxis
            dataKey="name"
            tick={false}
            className="text-clr_blueGray_700 text-[10px]"
          />
          <YAxis tick={false} className="text-clr_blueGray_700 text-[10px]" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgb(255 255 255 / 0.9)",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "0.375rem",
              fontSize: "10px",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={5}
            iconSize={10}
            wrapperStyle={{ fontSize: "10px", color: "currentColor" }}
          />
          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#0095FF"
            strokeWidth={2}
            dot={true}
            name="Last Month"
            fill="#0095FF40"
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#07E098"
            strokeWidth={2}
            dot={true}
            fill="#07E09840"
            name="This Month"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorInsights;

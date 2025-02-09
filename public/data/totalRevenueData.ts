export type TotalRevenueDataType = {
  name: string;
  onlineSales: number;
  offlineSales: number;
};

const totalRevenueData: TotalRevenueDataType[] = [
  {
    name: "Monday",
    onlineSales: 18500,
    offlineSales: 14200,
  },
  {
    name: "Tuesday",
    onlineSales: 22000,
    offlineSales: 16800,
  },
  {
    name: "Wednesday",
    onlineSales: 25000,
    offlineSales: 19500,
  },
  {
    name: "Thursday",
    onlineSales: 21500,
    offlineSales: 17200,
  },
  {
    name: "Friday",
    onlineSales: 23000,
    offlineSales: 18500,
  },
  {
    name: "Saturday",
    onlineSales: 23000,
    offlineSales: 18500,
  },
  {
    name: "Sunday",
    onlineSales: 23000,
    offlineSales: 18500,
  },
];

export default totalRevenueData;

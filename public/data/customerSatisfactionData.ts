export type SaleInsightDataTypes = {
  name: string;
  lastMonth: number;
  thisMonth: number;
};

const customerSatisfactionData: SaleInsightDataTypes[] = [
  {
    name: "1",
    lastMonth: 280,
    thisMonth: 580,
  },
  {
    name: "2",
    lastMonth: 350,
    thisMonth: 400,
  },
  {
    name: "3",
    lastMonth: 100,
    thisMonth: 450,
  },
  {
    name: "4",
    lastMonth: 120,
    thisMonth: 350,
  },
  {
    name: "5",
    lastMonth: 180,
    thisMonth: 480,
  },
  {
    name: "6",
    lastMonth: 170,
    thisMonth: 290,
  },
  {
    name: "7",
    lastMonth: 250,
    thisMonth: 590,
  },
];

export default customerSatisfactionData;

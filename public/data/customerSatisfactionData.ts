export type SaleInsightDataTypes = {
  name: string;
  lastMonth: number;
  thisMonth: number;
};

const customerSatisfactionData: SaleInsightDataTypes[] = [
  {
    name: "1",
    lastMonth: 280,
    thisMonth: 320,
  },
  {
    name: "2",
    lastMonth: 300,
    thisMonth: 280,
  },
  {
    name: "3",
    lastMonth: 340,
    thisMonth: 325,
  },
  {
    name: "4",
    lastMonth: 320,
    thisMonth: 380,
  },
  {
    name: "5",
    lastMonth: 360,
    thisMonth: 340,
  },
  {
    name: "6",
    lastMonth: 380,
    thisMonth: 290,
  },
  {
    name: "7",
    lastMonth: 320,
    thisMonth: 310,
  },
];

export default customerSatisfactionData;

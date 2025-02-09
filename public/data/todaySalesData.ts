import { BarChart, File, Tag, UserPlus } from "lucide-react";

export type SalesDataTypes = {
  id: number;
  name: string;
  value: string;
  variance: string;
  color: string;
  iconColor: string;
  icon: keyof typeof icons;
};

export const icons = { BarChart, File, Tag, UserPlus }; // Create an object to map names to components

const salesData: SalesDataTypes[] = [
  {
    id: 1,
    name: "total sales",
    icon: "BarChart",
    value: "1K",
    variance: "+8%",
    color: "#FFE2E5",
    iconColor: "#FA5A7D",
  },
  {
    id: 2,
    name: "total order",
    icon: "File",
    value: "300",
    variance: "+5%",
    color: "#FFF4DE",
    iconColor: "#FF947A",
  },
  {
    id: 3,
    name: "product sold",
    icon: "Tag",
    value: "5",
    variance: "+1.2%",
    color: "#DCFCE7",
    iconColor: "#3CD856",
  },
  {
    id: 4,
    name: "new customers",
    icon: "UserPlus",
    value: "8",
    variance: "+0.5%",
    color: "#F3E8FF",
    iconColor: "#BF83FF",
  },
];

export default salesData;

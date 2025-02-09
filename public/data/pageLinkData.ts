import {
  PieChart,
  BarChart2,
  ShoppingCart,
  ShoppingBag,
  LineChart,
  MessageSquareMoreIcon,
  Settings,
  LogOutIcon,
} from "lucide-react";

export type PageLinksTypes = {
  id: number;
  url: string;
  name: string;
  tooltip_content: string;
  icon: React.ComponentType;
};

const pageLinkData: PageLinksTypes[] = [
  {
    id: 1,
    url: "/#dashboard",
    name: "dashboard",
    icon: PieChart,
    tooltip_content: "dashboard",
  },
  {
    id: 2,
    url: "/#leaderboard",
    name: "leaderboard",
    icon: BarChart2,
    tooltip_content: "leaderboard",
  },
  {
    id: 3,
    url: "/#order",
    name: "order",
    icon: ShoppingCart,
    tooltip_content: "order",
  },
  {
    id: 4,
    url: "/#products",
    name: "products",
    icon: ShoppingBag,
    tooltip_content: "products",
  },
  {
    id: 5,
    url: "/#sales report",
    name: "sales report",
    icon: LineChart,
    tooltip_content: "sales report",
  },
  {
    id: 6,
    url: "/#messages",
    name: "messages",
    icon: MessageSquareMoreIcon,
    tooltip_content: "messages",
  },
  {
    id: 7,
    url: "/#settings",
    name: "settings",
    icon: Settings,
    tooltip_content: "settings",
  },
  {
    id: 8,
    url: "/#sign out",
    name: "sign out",
    icon: LogOutIcon,
    tooltip_content: "signout",
  },
];

export default pageLinkData;

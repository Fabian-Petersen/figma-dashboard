export type PageLinksTypes = {
  id: number;
  url: string;
  name: string;
  tooltip_content: string;
};

const pageLinkData: PageLinksTypes[] = [
  {
    id: 1,
    url: "/#leaderboard",
    name: "leaderboard",
    tooltip_content: "leaderboard",
  },
  {
    id: 2,
    url: "/#order",
    name: "order",
    tooltip_content: "order",
  },
  {
    id: 3,
    url: "/#products",
    name: "products",
    tooltip_content: "products",
  },
  {
    id: 4,
    url: "/#sales report",
    name: "sales report",
    tooltip_content: "sales report",
  },
  {
    id: 5,
    url: "/#messages",
    name: "messages",
    tooltip_content: "messages",
  },
  {
    id: 6,
    url: "/#settings",
    name: "settings",
    tooltip_content: "settings",
  },
  {
    id: 7,
    url: "/#sign out",
    name: "sign out",
    tooltip_content: "signout",
  },
];

export default pageLinkData;

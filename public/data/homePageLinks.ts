export type PageLinksTypes = {
  id: number;
  url: string;
  name: string;
};

const homePageLinks: PageLinksTypes[] = [
  {
    id: 1,
    url: "/#products",
    name: "products",
  },
  {
    id: 2,
    url: "/#pricing",
    name: "pricing",
  },
  {
    id: 3,
    url: "/#fAQ",
    name: "fAQ",
  },
  {
    id: 4,
    url: "/#blog",
    name: "blog",
  },
];

export default homePageLinks;

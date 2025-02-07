import pageLinkData from "@/public/data/pageLinkData";

import React from "react";

const MobileMenuLinks = () => {
  return (
    // $ The mobile menu links for the portfolio section of the site.
    <div className="">
      <ul className="flex flex-col gap-6 items-center justify-center h-full pt-20">
        {pageLinkData.map((link) => (
          <li key={link.id}>
            <a
              href={`${link.url}`}
              className="text-md uppercase tracking-wider text-fontLight hover:text-blue-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenuLinks;

import pageLinkData from "@/public/data/pageLinkData";
import React from "react";

const HeaderLinks: React.FC = () => {
  return (
    // $ The mobile menu links for the portfolio section of the site.
    <div className="dark:text-fontLight text-fontDark">
      <ul className="flex xs:gap-2 gap-4 flex-1">
        {pageLinkData.map((link) => (
          <li
            key={link.id}
            className="xs:text-[0.85rem] md:text-[1.1rem] lg:text-[1.2rem]"
          >
            <a
              href={`${link.url}`}
              className="uppercase tracking-wider hover:text-buttonBlueColor transition-all duration-100"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLinks;

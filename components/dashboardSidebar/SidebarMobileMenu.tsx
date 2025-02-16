import React from "react";
import { motion } from "framer-motion";
import { useNav } from "@/app/contexts/MenuToggleContext";
import pageLinkData from "@/public/data/pageLinkData";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

function SidebarMobileMenu() {
  const { openSidebar } = useNav();
  console.log("openSidebar From SidebarMenu:", openSidebar);

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: openSidebar ? "-100%" : "0%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed left-0 top-[4rem] h-full w-64 bg-white shadow-lg flex flex-col gap-6 py-6 px-8 z-[1000] sm:hidden"
    >
      <nav className="flex flex-col gap-10 py-6">
        {pageLinkData.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex items-center gap-5 text-gray-700 hover:text-gray-900 transition capitalize"
          >
            <span className="lg:hover:text-white">
              {React.createElement(link.icon)}
            </span>
            {link.name}
          </Link>
        ))}
        <Link
          href="/"
          className="flex items-center gap-5 text-gray-700 hover:text-gray-900 transition capitalize"
        >
          <div className="flex gap-5">
            <LogOutIcon />
            <span>Sign Out</span>
          </div>
        </Link>
      </nav>
    </motion.aside>
  );
}

export default SidebarMobileMenu;

"use client";
import MobileMenuButton from "./MobileMenuButton";
import { Search } from "lucide-react";
import LogoSidebar from "@/components/dasbboardSidebar/LogoSidebar";
import Menu from "./menu/Menu";

const DashMobileNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md h-[4rem] sm:hidden">
      <div className="flex items-center gap-4">
        <LogoSidebar />
        <MobileMenuButton />
      </div>
      <div className="flex items-center gap-4">
        <Search className="text-clr_primary_900" />
        <Menu />
      </div>
    </div>
  );
};

export default DashMobileNavbar;

// const DashMobileNavbar = () => {
//   return (
//     <div className="fixed top-0 z-[1000] w-full bg-transparent shadow-md">
//       <div className="flex justify-between items-center p-4">
//         <Logo />
//         <div className="flex items-center gap-4">
//           {/* <SignInOutButton /> */}
//           <MobileMenuButton />
//         </div>
//       </div>
//       {/* <MobileDropDownMenu /> */}
//     </div>
//   );
// };

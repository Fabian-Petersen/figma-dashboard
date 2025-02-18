// $ This component renders al the components for the dashboard in the page route component

import React from "react";
import DashboardMainComponent from "@/components/dashboard/DashboardMainComponent";
import DashMobileNavbar from "@/components/navbar/navbarDashboard/DashMobileNavbar";

const DashboardLayout = () => {
  return (
    <main className="lg:flex xl:justify-center py-2">
      <DashMobileNavbar />
      <DashboardMainComponent />
    </main>
  );
};

export default DashboardLayout;

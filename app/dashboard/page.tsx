import React from "react";
import DashboardMainComponent from "@/components/dashboard/DashboardMainComponent";
import DashMobileNavbar from "@/components/navbar/navbarDashboard/DashMobileNavbar";

const DashboardLayout = () => {
  return (
    <section>
      <DashMobileNavbar />
      <DashboardMainComponent />
    </section>
  );
};

export default DashboardLayout;

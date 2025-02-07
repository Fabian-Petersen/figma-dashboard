import React from "react";
import Navbar from "@/components/features/navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    // Main container with CSS Grid
    <div className="w-full min-h-screen grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      {/* Sidebar - spans full height, first column */}
      <div className="row-span-2 col-span-1">
        <Sidebar />
      </div>

      {/* Navbar - spans second column, first row */}
      <div className="col-start-2 row-start-1">
        <Navbar />
      </div>

      {/* Main content area - starts from second column, second row */}
      <main className="col-start-2 row-start-2 p-6 bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

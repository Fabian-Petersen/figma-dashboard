import React from "react";
import Navbar from "@/components/features/navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Grid from "@/components/dashboard/Grid";

const DashboardLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Main grid container */}
      <div className="grid grid-cols-[280px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-screen w-[280px] bg-white">
          <Sidebar />
        </aside>

        {/* Main content area with navbar and grid */}
        <div className="col-start-2 w-full">
          {/* Navbar */}
          <div className="sticky top-0 z-10 bg-white dark:border-gray-700">
            <Navbar />
          </div>

          {/* Grid section */}
          <main className="p-4 bg-[#FAFBFC]">
            <Grid />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

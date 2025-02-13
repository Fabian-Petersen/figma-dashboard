"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "aws-amplify/auth";

import React from "react";
import Navbar from "@/components/features/navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Grid from "@/components/dashboard/Grid";

const DashboardLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

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

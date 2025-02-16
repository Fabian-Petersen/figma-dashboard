import React from "react";
import AppProvider from "./useGlobalContext";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <Toaster />
      <ToastContainer position="top-center" theme="light" />
      {children}
    </AppProvider>
  );
};
export default Providers;

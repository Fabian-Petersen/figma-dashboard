import React from "react";
import AppProvider from "./useGlobalContext";
// import { AuthProvider } from "@/app/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/toaster";
// import { AuthProvider } from "react-oidc-context";
// import { AmplifyProvider } from "@/aws/AmplifyProvider";

// const cognitoAuthConfig = {
//   authority:
//     "https://cognito-idp.af-south-1.amazonaws.com/af-south-1_CpoG8Y5t7",
//   client_id: "6vs08ph8gj9co8cc4cob6rn6d4",
//   redirect_uri: "https://dashboard.fabian-portfolio.net",
//   response_type: "code",
//   scope: "email openid phone",
// };

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <AuthProvider {...cognitoAuthConfig}></AuthProvider>
    <AppProvider>
      <Toaster />
      <ToastContainer position="top-center" theme="light" />
      {children}
    </AppProvider>
  );
};
export default Providers;

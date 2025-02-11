import React from "react";
import AppProvider from "./useGlobalContext";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
// import { AuthProvider } from "react-oidc-context";
import ConfigAmplifyClientSide from "@/lib/amplify-cognito-config";

// $ Remove the credentials to .env file
// const cognitoAuthConfig = {
//   authority: process.env.NEXT_PUBLIC_AUTHORITY as string,
//   client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
//   redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
//   response_type: "code",
//   scope: "phone openid email",
// };

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // Data will not be considered stale for 1 hour
        refetchOnWindowFocus: false, // Prevent refetching when the window is focused
        refetchOnReconnect: false, // Prevent refetching when the connection is restored
        refetchOnMount: false, // Prevent refetching when a component mounts } },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider {...cognitoAuthConfig}> */}
      <ConfigAmplifyClientSide />
      <AppProvider>
        <Toaster />
        <ToastContainer position="top-center" theme="light" />
        {children}
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
};
export default Providers;

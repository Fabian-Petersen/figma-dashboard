// ! Remove this code when authentication work as expected.

// import { ReactNode, useEffect, useState } from "react";
// import configureAmplify from "@/aws/amplifyConfig";

// interface AmplifyProviderProps {
//   children: ReactNode;
// }

// export function AmplifyProvider({ children }: AmplifyProviderProps) {
//   const [isConfigured, setIsConfigured] = useState(false);
//   useEffect(() => {
//     console.log("UserPoolId:", process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID);
//     console.log("ClientId:", process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID);
//     // ... rest of the code
//   }, []);

//   useEffect(() => {
//     try {
//       configureAmplify();
//       setIsConfigured(true);
//     } catch (error) {
//       console.error("Error configuring Amplify:", error);
//     }
//   }, []);

//   if (!isConfigured) {
//     return null;
//   }

//   return <>{children}</>;
// }

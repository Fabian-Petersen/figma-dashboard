// src/providers/AmplifyProvider.tsx
import { ReactNode, useEffect, useState } from "react";
import { Amplify } from "aws-amplify";

interface AmplifyProviderProps {
  children: ReactNode;
}

export function AmplifyProvider({ children }: AmplifyProviderProps) {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // Configure Amplify with your AWS Cognito settings
    const configureAmplify = () => {
      try {
        Amplify.configure({
          Auth: {
            Cognito: {
              userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
              userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
              signUpVerificationMethod: "code",
              loginWith: {
                email: true,
                phone: false,
                username: false,
              },
            },
          },
        });
        setIsConfigured(true);
      } catch (error) {
        console.error("Error configuring Amplify:", error);
      }
    };

    configureAmplify();
  }, []);

  if (!isConfigured) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}

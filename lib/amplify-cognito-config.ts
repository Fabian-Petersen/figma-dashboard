"use client";

import { Amplify, type ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig["Auth"] = {
  Cognito: {
    userPoolId: String(process.env.NEXT_PUBLIC_USERPOOL_ID),
    userPoolClientId: String(process.env.NEXT_PUBLIC_CLIENT_ID),
  },
};

Amplify.configure(
  {
    Auth: authConfig,
  },
  // $ ssr:true uses cookies instead of localstorage by default
  { ssr: true }
);

export default function ConfigAmplifyClientSide() {
  return null;
}

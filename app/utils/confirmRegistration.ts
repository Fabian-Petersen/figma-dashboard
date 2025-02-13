// $ aws amplify sign in function to the application
import { confirmSignUp } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

import config from "@/config.json";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

export const confirmRegistration = async ({
  username,
  code,
}: {
  username: string;
  code: string;
}) => {
  const input = {
    username: username,
    confirmationCode: code,
  };
  try {
    // console.log(input);
    await confirmSignUp(input);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};

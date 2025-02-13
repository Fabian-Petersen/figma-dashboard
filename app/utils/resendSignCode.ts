import { Amplify } from "aws-amplify";
import { resendSignUpCode } from "@aws-amplify/auth";
import config from "../../config.json";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

const email = config.credentials.username;

export const resendConfirmationCode = async (username = email) => {
  const input = {
    username: username,
  };
  console.log(input);
  try {
    await resendSignUpCode(input);
  } catch (error) {
    console.log("error resending registration code", error);
  }
};

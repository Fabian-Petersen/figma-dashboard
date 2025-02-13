// $ aws amplify sign in function to the application
import { Amplify } from "aws-amplify";
import config from "../../config.json";
import { signIn, fetchAuthSession } from "aws-amplify/auth";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

export async function awsLogin(userName: string, password: string) {
  const signInResult = await signIn({
    username: userName,
    password: password,
  });
  const session = await fetchAuthSession();
  const username = session.tokens?.accessToken?.payload;

  if (username) {
    // sessionStorage.setItem("username", JSON.stringify(username));
  }
  console.log("session:", session);
  return signInResult;
}

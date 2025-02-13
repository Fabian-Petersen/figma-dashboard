// $ aws amplify sign in function to the application
import { Amplify } from "aws-amplify";
import { signIn, fetchAuthSession } from "aws-amplify/auth";

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
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

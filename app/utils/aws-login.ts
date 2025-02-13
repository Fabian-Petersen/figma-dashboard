// $ aws amplify sign in function to the application
import { signIn, fetchAuthSession } from "aws-amplify/auth";

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

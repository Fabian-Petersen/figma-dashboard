// $ aws amplify sign in function to the application
// import { signIn, fetchAuthSession } from "aws-amplify/auth";

export async function awsLogin(userName: string, password: string) {
  localStorage.setItem("email", userName);
  try {
    console.log(
      "inputs for signIn()",
      "userName:",
      userName,
      "password:",
      password
    );
    // $ Attempt Sign In of User
    // const signInResult = await signIn({
    //   username: userName,
    //   password: password,
    // });

    // if (signInResult.isSignedIn) {
    //   const session = await fetchAuthSession();
    //   console.log(session);
    // }

    // return signInResult;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

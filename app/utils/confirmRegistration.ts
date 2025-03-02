// $ aws amplify sign in function to the application
import { confirmSignUp, ConfirmSignUpOutput } from "aws-amplify/auth";

export async function awsCognitoConfirmRegistration(
  email: string,
  code: string
): Promise<ConfirmSignUpOutput> {
  // console.log("user email:", email);
  // console.log("code entered:", code);

  try {
    const confirmResult = await confirmSignUp({
      username: email,
      confirmationCode: code,
    });

    if (!confirmResult.isSignUpComplete) {
      console.log("Confirmation Unsuccessful");
    }
    return confirmResult;
  } catch (error) {
    throw error;
    console.log("error confirming sign up", error);
  }
}

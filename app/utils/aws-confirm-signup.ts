import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";

interface ConfirmSignUpResponse {
  success: boolean;
  message: string;
}

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      loginWith: {
        // Optional
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN as string,
          scopes: ["openid email phone profile aws.cognito.signin.user.admin "],
          redirectSignIn: [
            "http://localhost:3000/dashboard",
            "https://dashboard.fabian-portfolio.net/dashboard",
          ],
          redirectSignOut: [
            "http://localhost:3000/",
            "https://dashboard.fabian-portfolio.net/",
          ],
          responseType: "code",
        },
        username: false,
        email: true,
        phone: false,
      },
    },
  },
});

export async function ConfirmSignUp(
  email: string,
  password: string,
  confirmationCode: string
): Promise<ConfirmSignUpResponse> {
  try {
    const { isSignUpComplete } = await confirmSignUp({
      username: email,
      confirmationCode: confirmationCode,
    });

    if (isSignUpComplete) {
      console.log(`SignUp Complete`);
    }

    return {
      success: false,
      message: "Unable to confirm signup",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    // Check for specific error types
    if (errorMessage.includes("ExpiredCodeException")) {
      return {
        success: false,
        message: "Confirmation code has expired. Please request a new code.",
      };
    }
    console.error("Error confirming signup:", error);
    return {
      success: false,
      message: errorMessage,
    };
  }
}

export async function resendConfirmationCode(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    await resendSignUpCode({ username: email });
    return {
      success: true,
      message: "A new confirmation code has been sent to your email",
    };
  } catch (error) {
    console.error("Error resending code:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to resend code",
    };
  }
}

// Custom hook for handling confirmation and navigation
export function useConfirmSignUp() {
  const router = useRouter();
  const handleConfirmSignUp = async (
    email: string,
    confirmationCode: string,
    password: string
  ) => {
    console.log(
      "email:",
      email,
      "password:",
      password,
      "confirmationCode:",
      confirmationCode
    );
    const result = await ConfirmSignUp(email, confirmationCode, password);

    if (result.success) {
      router.push("/dashboard");
    }

    return result;
  };

  return { handleConfirmSignUp, resendConfirmationCode };
}

import { confirmSignUp, signIn, resendSignUpCode } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

interface ConfirmSignUpResponse {
  success: boolean;
  message: string;
}

export async function ConfirmSignUp(
  email: string,
  confirmationCode: string,
  password: string
): Promise<ConfirmSignUpResponse> {
  try {
    const { isSignUpComplete } = await confirmSignUp({
      username: email,
      confirmationCode,
    });

    if (isSignUpComplete) {
      try {
        const signInResponse = await signIn({
          username: email,
          password: password,
        });

        if (signInResponse.isSignedIn) {
          return {
            success: true,
            message: "Account confirmed and signed in successfully",
          };
        }
      } catch (signInError) {
        console.error("Error signing in after confirmation:", signInError);
        return {
          success: false,
          message: "Account confirmed but unable to sign in automatically",
        };
      }
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
    const result = await ConfirmSignUp(email, confirmationCode, password);

    if (result.success) {
      router.push("/dashboard");
    }

    return result;
  };

  return { handleConfirmSignUp, resendConfirmationCode };
}

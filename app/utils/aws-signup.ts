// $ aws amplify user registration function to the application

import { Amplify } from "aws-amplify";
import config from "../../config.json";
import { signUp, SignUpOutput } from "aws-amplify/auth";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

interface SignUpResponse {
  success: boolean;
  message: string;
  data?: SignUpOutput;
  error?: string;
}

// Email validation function
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function awsSignUp(
  email: string,
  password: string,
  name: string
): Promise<SignUpResponse> {
  try {
    // Validate and format email
    const trimmedEmail = email.trim().toLowerCase();
    if (!isValidEmail(trimmedEmail)) {
      throw new Error("Invalid email format");
    }

    const result = await signUp({
      username: email,
      password: password,
      options: {
        userAttributes: {
          name: name,
        },
        autoSignIn: true, // Enable auto sign-in after successful sign-up
      },
    });

    console.log("Sign up result:", result);

    if (result.isSignUpComplete) {
      return {
        success: true,
        data: result,
        message: "Sign up successful",
      };
    }

    return {
      success: true,
      message:
        "Sign up successful. Please check your email for confirmation code.",
      data: result,
    };
  } catch (error) {
    console.error("Error during sign up:", error);
    return {
      success: false,
      message: "Failed to sign up",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

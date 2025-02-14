// $ aws amplify user registration function to the application
// import { signUp, SignUpOutput } from "aws-amplify/auth";

import { useRouter } from "next/router";

// $ Basic Form Handling without AWS Cognito

export function SignUp(email: string, password: string, name: string): boolean {
  const router = useRouter();

  // Check if all parameters are provided
  if (email && password && name) {
    router.push("/confirm-signup");
    return true;
  }

  return false;
}

// export async function awsSignUp(
//   email: string,
//   password: string,
//   name: string
// ): Promise<SignUpResponse> {
//   try {
//     // Validate and format email
//     const trimmedEmail = email.trim().toLowerCase();
//     if (!isValidEmail(trimmedEmail)) {
//       throw new Error("Invalid email format");
//     }

//     const result = await signUp({
//       username: email,
//       password: password,
//       options: {
//         userAttributes: {
//           name: name,
//         },
//         autoSignIn: true, // Enable auto sign-in after successful sign-up
//       },
//     });

//     console.log("Sign up result:", result);

//     if (result.isSignUpComplete) {
//       return {
//         success: true,
//         data: result,
//         message: "Sign up successful",
//       };
//     }

//     return {
//       success: true,
//       message:
//         "Sign up successful. Please check your email for confirmation code.",
//       data: result,
//     };
//   } catch (error) {
//     console.error("Error during sign up:", error);
//     return {
//       success: false,
//       message: "Failed to sign up",
//       error: error instanceof Error ? error.message : "Unknown error occurred",
//     };
//   }
// }

// export async function awsSignUp(
//   email: string,
//   password: string,
//   name: string
// ): Promise<SignUpResponse> {
//   try {
//     // Validate and format email
//     const trimmedEmail = email.trim().toLowerCase();
//     if (!isValidEmail(trimmedEmail)) {
//       throw new Error("Invalid email format");
//     }

//     const result = await signUp({
//       username: email,
//       password: password,
//       options: {
//         userAttributes: {
//           name: name,
//         },
//         autoSignIn: true, // Enable auto sign-in after successful sign-up
//       },
//     });

//     console.log("Sign up result:", result);

//     if (result.isSignUpComplete) {
//       return {
//         success: true,
//         data: result,
//         message: "Sign up successful",
//       };
//     }

//     return {
//       success: true,
//       message:
//         "Sign up successful. Please check your email for confirmation code.",
//       data: result,
//     };
//   } catch (error) {
//     console.error("Error during sign up:", error);
//     return {
//       success: false,
//       message: "Failed to sign up",
//       error: error instanceof Error ? error.message : "Unknown error occurred",
//     };
//   }
// }

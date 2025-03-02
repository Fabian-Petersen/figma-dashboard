// $ aws amplify user registration function to the application
import { signUp, SignUpOutput } from "aws-amplify/auth";

// import { useRouter } from "next/router";

// $ Basic Form Handling without AWS Cognito

export async function awsCognitoSignUp(
  name: string,
  email: string,
  password: string
): Promise<SignUpOutput> {
  try {
    // $ Validate and format email
    const trimmedEmail = email.trim().toLowerCase();
    const signUpResult = await signUp({
      username: trimmedEmail,
      password: password,
      options: {
        userAttributes: {
          name: name,
        },
        autoSignIn: true, // Enable auto sign-in after successful sign-up
      },
    });

    if (signUpResult.isSignUpComplete) {
      console.log("Signup Successfull");
    }

    return signUpResult;
  } catch (error) {
    alert(error);
    throw error;
  }
}

// export async function awsSignUp(
//   email: string,
//   password: string,
//   name: string
// ): Promise<SignUpResponse> {
//   try {
//     // Validate and format email
//     const trimmedEmail = email.trim().toLowerCase();
//! Check the function !isValid and remove if necessary
//    if (!isValidEmail(trimmedEmail)) {
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

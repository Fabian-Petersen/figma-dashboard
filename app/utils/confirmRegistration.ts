// $ aws amplify sign in function to the application
// import { confirmSignUp } from "aws-amplify/auth";
// import { Amplify } from "aws-amplify";

// // Configure Amplify
// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID as string,
//       userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
//     },
//   },
// });

// export const confirmRegistration = async ({
//   username,
//   code,
// }: {
//   username: string;
//   code: string;
// }) => {
//   const input = {
//     username: username,
//     confirmationCode: code,
//   };
//   try {
//     // console.log(input);
//     await confirmSignUp(input);
//   } catch (error) {
//     console.log("error confirming sign up", error);
//   }
// };

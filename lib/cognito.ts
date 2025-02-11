import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const REGION = process.env.REGION as string;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

const cognitoClient = new CognitoIdentityProviderClient({
  region: REGION,
});

export async function signInWithCognito(email: string, password: string) {
  const command = new InitiateAuthCommand({
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: CLIENT_ID,
    AuthParameters: {
      EMAIL: email,
      PASSWORD: password,
    },
  });

  const response = await cognitoClient.send(command);
  return response.AuthenticationResult || {};
}

export async function signUp(
  username: string,
  email: string,
  password: string,
  name: string
) {
  try {
    const command = new SignUpCommand({
      ClientId: CLIENT_ID,
      Password: password,
      Username: username,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
        {
          Name: "name",
          Value: name,
        },
      ],
    });

    const response = await cognitoClient.send(command);
    return {
      success: true,
      data: response.UserSub,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Sign up failed",
    };
  }
}

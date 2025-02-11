import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPoolID = process.env.NEXT_PUBLIC_USERPOOL_ID as string;
const ClientID = process.env.NEXT_PUBLIC_CLIENT_ID as string;
const poolData = {
  UserPoolId: userPoolID,
  ClientId: ClientID,
};

export const userPool = new CognitoUserPool(poolData);

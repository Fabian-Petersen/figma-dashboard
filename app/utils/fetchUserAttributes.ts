import {
  fetchUserAttributes,
  FetchUserAttributesOutput,
} from "aws-amplify/auth";

export async function FetchUserAttributes(): Promise<
  FetchUserAttributesOutput | undefined
> {
  try {
    const userAttributes = await fetchUserAttributes();
    return userAttributes;
  } catch (err) {
    console.error("Error fetching user attributes:", err);
  }
}

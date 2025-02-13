import { useState, useEffect } from "react";
import { fetchUserAttributes } from "aws-amplify/auth";

interface UserAttributes {
  name?: string;
  email?: string;
  sub?: string;
}

interface UseUserAttributesReturn {
  userAttributes: UserAttributes | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useUserAttributes = (): UseUserAttributesReturn => {
  const [userAttributes, setUserAttributes] = useState<UserAttributes | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAttributes = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const attributes = await fetchUserAttributes();
      setUserAttributes(attributes);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch user data"
      );
      console.error("Error fetching user attributes:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAttributes();
  }, []);

  return {
    userAttributes,
    isLoading,
    error,
    refetch: fetchAttributes,
  };
};

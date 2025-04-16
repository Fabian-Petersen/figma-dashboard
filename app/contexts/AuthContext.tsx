"use client";

// $ This Context Provided handles the Amplify Global state for the application.

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getCurrentUser,
  fetchUserAttributes,
  signOut,
  AuthUser,
  FetchUserAttributesOutput,
} from "aws-amplify/auth";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  userAttributes: FetchUserAttributesOutput | null;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userAttributes, setUserAttributes] =
    useState<FetchUserAttributesOutput | null>(null);

  const refreshUserData = async () => {
    // $ Get the current user details
    try {
      setIsLoading(true);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(true);
      // $ Get the attributes of the users for the application
      try {
        const attributes = await fetchUserAttributes();
        setUserAttributes(attributes);
      } catch (attrError) {
        console.error("Error fetching user attributes:", attrError);
      }
    } catch (error) {
      // User is not authenticated
      setUser(null);
      console.log(error);
      setUserAttributes(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUserData();
  }, []);

  // $ Logging the user out of the application
  const logout = async () => {
    try {
      await signOut({ global: true });
      setUser(null);
      setUserAttributes(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        userAttributes,
        logout,
        refreshUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

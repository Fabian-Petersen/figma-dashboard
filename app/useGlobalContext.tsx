"use client";

// use the react context hook to manage the state of navOpen (true or false) and setNavOpen to change the state
import React from "react";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  useEffect,
  SetStateAction,
} from "react";

import {
  fetchUserAttributes,
  FetchUserAttributesOutput,
  signOut,
} from "aws-amplify/auth";

// $ Step 0: Define the types and specify the navOpen type and set it to false initially'

export type Theme = "light" | "dark";

export type T = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  attributes: FetchUserAttributesOutput | null;
  logout: () => Promise<void>;
};

// $ Step 1: Create the context
// % The ThemeContext type takes in the ThemeContext type or null
export const AppContext = createContext<T | undefined>(undefined);

// $ Step 2: Create the provider for the context
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // $ Step 3: Create the state and set the initial state value
  // ? The navOpen state toggles the navbar on and off on mobile devices
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [attributes, setAttributes] =
    useState<FetchUserAttributesOutput | null>(null);

  const userData = async () => {
    try {
      // $ Get the attributes of the users for the application
      try {
        const attributes = await fetchUserAttributes();
        setAttributes(attributes);
      } catch (attrError) {
        console.error("Error fetching user attributes:", attrError);
      }
    } catch (error) {
      // User is not authenticated
      console.log(error);
      setAttributes(null);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  // $ Logging the user out of the application
  const logout = async () => {
    try {
      await signOut({ global: true });
      // setUser(null);
      // setUserAttributes(null);
      // setIsAuthenticated(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        navOpen,
        setNavOpen,
        attributes,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// $ Step 3: Export the custom hook to be used in other components
export const useGlobalContext = () => {
  const context = useContext(AppContext);

  // $ Throw an error if the hook is used outside of the ThemeContextProvider or does not exist
  if (!context) {
    throw new Error("useAppContext must be used within the AppContextProvider");
  }
  // $ Return the context so it can be used in the components
  return context;
};

export default AppProvider;

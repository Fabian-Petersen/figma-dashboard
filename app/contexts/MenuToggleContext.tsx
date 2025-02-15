import { createContext, useContext, useState, ReactNode } from "react";

// $ Create the context to pass the state to the mobile and desktop navar to open the nav menu. this is to use the mobile button on a screen size where the buttons signin and signup takes too much space for screen sizes 640px-740px

// Define the type for the context value
interface NavContextType {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const NavContext = createContext<NavContextType>({
  openNav: false,
  setOpenNav: () => {},
});

// Define props type for the provider component
interface NavProviderProps {
  children: ReactNode;
}

// Create the provider component
export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook to use the NavContext
export const useNav = () => {
  return useContext(NavContext);
};

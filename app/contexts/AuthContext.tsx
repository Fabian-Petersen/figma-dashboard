// src/contexts/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { signIn, signOut, getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: { username: string; id: string } | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ username: string; id: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser();
      setUser({
        username: currentUser.username,
        id: currentUser.userId,
      });
    } catch (error) {
      setUser(null);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(username: string, password: string) {
    try {
      setIsLoading(true);
      const signInOutput = await signIn({
        username: username,
        password: password,
      });

      if (signInOutput.isSignedIn) {
        await checkUser();
        toast({
          title: "Success!",
          description: "Successfully logged in",
          duration: 3000,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to login. Please check your credentials.",
        duration: 3000,
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await signOut();
      setUser(null);
      toast({
        title: "Success!",
        description: "Successfully logged out",
        duration: 3000,
      });
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to logout. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

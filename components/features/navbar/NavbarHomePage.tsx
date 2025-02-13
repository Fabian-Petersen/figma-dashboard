"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button";
import { fetchAuthSession } from "aws-amplify/auth";
import { Loader2 } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const session = await fetchAuthSession();

      if (session.tokens?.idToken) {
        router.push("/dashboard");
        // $ Return here to prevent the /login redirect
        return;
      }

      // $ Only redirect to login page if no valid session exists
      router.push("/login");
    } catch (error) {
      console.error("Error checking session:", error);
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  };

  // $ Check session on component mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await fetchAuthSession();
        if (session.tokens?.idToken) {
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error checking initial session:", error);
      }
    };

    checkSession();
  }, [router]);

  return (
    <nav className="fixed top-0 left-0 h-[var(--navbar-height)] w-full flex items-center bg-clr_primary_landing px-8">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/images/landingPage/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="object-cover"
        />
        <ul className="h-[var(--navbar-height)] flex items-center gap-4">
          {/* Fixed width container for consistent button sizes */}
          <Button
            type="button"
            className="hover:bg-clr_landing_red bg-transparent border-clr_landing_red border text-white tracking-wider px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors max-w-28 flex-1"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" />
                Loading...
              </span>
            ) : (
              "Login"
            )}
          </Button>

          {/* Fixed width container for consistent button sizes */}
          <Button
            className="w-full border border-white text-white tracking-wider px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors max-w-28"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

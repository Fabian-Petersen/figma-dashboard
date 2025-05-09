// $ Button used in the sidebar to sign users out of their session
"use client";
import React from "react";

import { LogOutIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/useGlobalContext";

const SignOutButton = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { logout } = useGlobalContext();

  const handleSignOut = async () => {
    try {
      await logout();
      router.push("/");
      toast({
        variant: "success",
        title: "Success!",
        description: "Successfully Signed Out",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
        duration: 3000,
      });
    }
  };

  return (
    <li className="tracking-wider flex items-center gap-4 justify-start hover:cursor-pointer lg:hover:bg-clr_primary_900 py-4 px-4 mx-auto lg:mx-0 hover:lg:text-white hover:rounded-lg">
      <button
        onClick={handleSignOut}
        className="hover:text-clr_primary_900 lg:hover:text-white"
      >
        <LogOutIcon />
      </button>
      <button
        type="button"
        onClick={handleSignOut}
        className="w-full text-left hidden lg:block"
      >
        Sign Out
      </button>
    </li>
  );
};

export default SignOutButton;

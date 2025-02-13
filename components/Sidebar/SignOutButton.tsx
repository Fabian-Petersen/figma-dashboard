// $ Button used in the sidebar to sign users out of their session
"use client";
import React from "react";
import { signOut } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from "@/config.json";
import { LogOutIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

const SignOutButton = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut()
      .then(() => {
        router.push("/");
        toast({
          title: "Success!",
          description: "Successfully Signed Out",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to sign out. Please try again.",
          duration: 3000,
        });
      });
  };

  return (
    <li className="tracking-wider flex items-center gap-4 justify-start hover:cursor-pointer hover:bg-clr_primary_900 py-4 px-4 hover:text-white hover:rounded-lg">
      <LogOutIcon />
      <button
        type="button"
        onClick={handleSignOut}
        className="w-full text-left"
      >
        Sign Out
      </button>
    </li>
  );
};

export default SignOutButton;

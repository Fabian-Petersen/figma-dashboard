"use client";

// $ Button used in the sidebar to sign users out of their session

import React from "react";
import { signOut } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from "@/config.json";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.amplify.userPoolId,
      userPoolClientId: config.amplify.userPoolClientId,
    },
  },
});

function SignOutButton() {
  const { toast } = useToast();
  const router = useRouter();
  const handleSignOut: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await signOut();
      toast({
        style: { color: "#3CD856" },
        title: "Success!",
        description: "Successfully Signed Out",
        duration: 3000,
      });
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <li className="tracking-wider flex items-center gap-4 justify-start hover:cursor-pointer hover:bg-clr_primary_900 py-4 px-4 hover:text-white hover:rounded-lg">
      <LogOutIcon />
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </li>
  );
}

export default SignOutButton;

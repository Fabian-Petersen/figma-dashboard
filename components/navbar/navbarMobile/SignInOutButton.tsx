"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function SignInOutButton() {
  const router = useRouter();
  const path = usePathname();

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleSignOut = () => {
    router.push("/");
  };

  return path === "/" ? (
    <button className="text-[#8794BA]" onClick={handleSignIn}>
      Sign In
    </button>
  ) : (
    <button className="text-[#8794BA]" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignInOutButton;

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/features/Button";

// Define the form status type
type FormStatus = "idle" | "error" | "success";

interface LoginButtonProps {
  formStatus: FormStatus;
}

const LoginButton = ({ formStatus }: LoginButtonProps) => {
  const { data: session, status } = useSession();

  const handleLogin = () => {
    if (formStatus === "error") {
      return;
    }
    signIn();
  };

  if (status === "loading") {
    return (
      <Button
        type="button"
        buttonLabel="Loading..."
        disabled={true}
        className="w-full border border-clr_sup_pink text-white tracking-wider px-4 py-2 rounded-lg opacity-50 cursor-not-allowed max-w-28"
      />
    );
  }

  if (session) {
    return (
      <Button
        buttonLabel="Sign Out"
        onClick={() => signOut()}
        className="w-full border border-white text-white tracking-wider px-4 py-2 rounded-lg transition-colors max-w-28"
      />
    );
  }

  return (
    <Button
      type="submit"
      disabled={formStatus === "error"}
      buttonLabel="Sign In"
      onClick={handleLogin}
      className={`w-full text-white tracking-wider px-4 py-2 rounded-lg ${
        formStatus === "error"
          ? "bg-red-500 cursor-not-allowed"
          : "bg-clr_primary_landing hover:bg-blue-600"
      }`}
    />
  );
};

export default LoginButton;

"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { User2 } from "lucide-react";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="hover:cursor-pointer">
      <Button type="button" onClick={handleLogin} className=" text-slate-500">
        <User2 />
      </Button>
    </div>
  );
};

export default LoginButton;

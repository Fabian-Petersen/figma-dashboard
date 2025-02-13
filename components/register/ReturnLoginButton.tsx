import React from "react";
import { useRouter } from "next/navigation";

function ReturnLoginButton() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-2 text-xs">
      <p>Already have an account?</p>
      <button
        type="button"
        className="hover:cursor-pointer"
        onClick={() => {
          router.push("/login");
        }}
      >
        <span>Sign In</span>
      </button>
    </div>
  );
}

export default ReturnLoginButton;

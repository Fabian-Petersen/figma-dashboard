import React from "react";
import { useRouter } from "next/navigation";

function RegisterButton() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-2 text-xs">
      <p>Don&apos;t have an account?</p>
      <button
        type="button"
        className="hover:cursor-pointer"
        onClick={() => {
          router.push("/register");
        }}
      >
        <span>Register Here</span>
      </button>
    </div>
  );
}

export default RegisterButton;

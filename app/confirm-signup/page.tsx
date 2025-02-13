"use client";

import ConfirmRegistration from "@/components/confirmSignUp/ConfirmRegistrationForm";
import { isValidEmail } from "../utils/aws-signup";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
export default function ConfirmSignUpPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  // Validate and format email
  const trimmedEmail = email.trim().toLowerCase();
  if (!isValidEmail(trimmedEmail)) {
    throw new Error("Invalid email format");
  }
  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-[#f6f7f9] dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <ConfirmRegistration username={email} />
        </Suspense>
      </div>
    </section>
  );
}

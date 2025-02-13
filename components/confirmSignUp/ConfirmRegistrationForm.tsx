"use client";

// $ - This form is used to authenticate the user's email address and validate the input. The form can also be used to resend a verification code to the users email address.

// $ - The Form is rendered in the confirm-signup page.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmRegistration } from "@/app/utils/confirmRegistration";
import FormRowInput from "@/components/features/forms/FormRowInput";
import Button from "@/components/features/Button";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import ResendCodeButton from "./ResendCodeButton";
import { useSearchParams } from "next/navigation";

const ConfirmRegistrationForm = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const username = params.get("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!code) {
        throw new Error("Please provide a confirmation code");
      }

      if (!username) {
        throw new Error("Username is required");
      }
      const confirmation = confirmRegistration({ username, code });

      if (!confirmation) {
        setSuccess("Registration Failed");
      }

      setSuccess("Email confirmed successfully!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to confirm signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[35rem] flex flex-col py-6 px-4 gap-4 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH3">
        Enter Confirmation Code
      </h2>

      <div className="space-y-1 flex items-center">
        <FormRowInput
          id="code"
          labelText="Enter Code"
          name="code"
          type="text"
          placeholderText=""
          className=" bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-left gap-2 items-center w-1/2">
        <Button
          type="submit"
          className="py-3 px-2 rounded tracking-wider uppercase transition-colors duration-200 dark:text-fontLight text-white bg-clr_landing_red hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-[0.8rem] flex-1 h-full"
          disabled={isLoading}
          buttonLabel={isLoading ? "Confirming..." : "Confirm Email"}
        />
        <ResendCodeButton className="py-3 px-2 rounded-md tracking-wider uppercase transition-colors duration-200 dark:text-fontLight hover:bg-blue-500 hover:text-white border border-blue-500 text-clr_blueGray_700disabled:bg-gray-400 text-[0.8rem] flex-1" />
      </div>
      <FormError message={error} />
      <FormSuccess message={success} />
    </form>
  );
};

export default ConfirmRegistrationForm;

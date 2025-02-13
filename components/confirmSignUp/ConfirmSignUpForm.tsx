"use client";

import { useState } from "react";
import { useConfirmSignUp } from "@/app/utils/aws-confirm-signup";
import FormRowInput from "@/components/features/forms/FormRowInput";
import Button from "@/components/features/Button";
import { useSearchParams } from "next/navigation";

const ConfirmSignup = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const password = searchParams.get("password") || "";
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { handleConfirmSignUp, resendConfirmationCode } = useConfirmSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await handleConfirmSignUp(
        email,
        confirmationCode,
        password
      );

      if (!result.success) {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to confirm signup. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError("");
    setSuccess("");

    try {
      const result = await resendConfirmationCode(email);
      if (result.success) {
        setSuccess(result.message);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to resend code. Please try again.");
      console.log(error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[30rem] w-[25rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH2">
        Confirm Your Account
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        Please enter the confirmation code sent to your email: {email}
      </p>

      <div className="space-y-1">
        <FormRowInput
          id="confirmationCode"
          labelText="Confirmation Code"
          name="confirmationCode"
          type="text"
          placeholderText="Enter confirmation code"
          className="bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark"
          onChange={(e) => {
            setConfirmationCode(e.target.value);
            setError("");
          }}
          value={confirmationCode}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        {success && <p className="text-green-500 text-xs mt-1">{success}</p>}
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          disabled={isLoading || !confirmationCode}
          className="py-2 px-4 rounded tracking-wider uppercase transition-colors duration-200 dark:text-fontLight text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          buttonLabel={isLoading ? "Confirming..." : "Confirm Account"}
        />

        <Button
          type="button"
          onClick={handleResendCode}
          disabled={isResending}
          className="py-2 px-4 rounded tracking-wider uppercase transition-colors duration-200 text-blue-500 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          buttonLabel={isResending ? "Sending..." : "Resend Code"}
        />
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Didnt receive a code? Check your spam folder or click &quot;Resend
        Code&quot; above.
      </p>
    </form>
  );
};

export default ConfirmSignup;

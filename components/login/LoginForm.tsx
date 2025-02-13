"use client";
import FormRowInput from "../features/forms/FormRowInput";
import { FormEvent } from "react";
// import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useFormValidation } from "@/app/hooks/useValidateForm";
import AWSLoginButton from "./LoginButtonAWS";
import { awsLogin } from "@/app/utils/aws-login";
import { useRouter } from "next/navigation";
// import config from "../../config.json";

const LoginForm = () => {
  const {
    formErrors,
    // formStatus,
    validateForm,
    clearError,
    setFormStatus,
    getInputStyle,
  } = useFormValidation("login");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (!validateForm(formDataObject)) {
      return;
    }

    try {
      const result = awsLogin(formDataObject.email, formDataObject.password);
      if (!result) {
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      router.push("/dashboard");
    } catch (error) {
      setFormStatus("error");
      console.error("Login error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] w-[20rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH2">
        Login
      </h2>

      <div className="space-y-1">
        <FormRowInput
          id="email"
          labelText="email"
          name="email"
          type="email"
          placeholderText="email"
          className={`${getInputStyle(
            "email"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => clearError("email")}
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs">{formErrors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <FormRowInput
          id="password"
          labelText="password"
          name="password"
          type="password"
          placeholderText="password"
          className={`${getInputStyle(
            "password"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => {
            clearError("password");
          }}
        />
        {formErrors.password && (
          <p className="text-red-500 text-xs">{formErrors.password}</p>
        )}
      </div>
      {/* <LoginButton formStatus={formStatus} /> */}
      <AWSLoginButton />
      <RegisterButton />
    </form>
  );
};

export default LoginForm;

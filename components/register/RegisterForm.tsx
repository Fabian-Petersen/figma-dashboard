"use client";
import FormRowInput from "../features/forms/FormRowInput";
import { FormEvent } from "react";
import ReturnLoginButton from "./ReturnLoginButton";
import { useFormValidation } from "@/app/hooks/useValidateForm";
import RegisterFormButton from "./RegisterFormButton";
import { useRouter } from "next/navigation";
// import { SignUp } from "@/app/utils/aws-signup";

const RegisterForm = () => {
  //$ Validate the form entries with the registerFormSchema using zod
  const { formErrors, validateForm, clearError, setFormStatus, getInputStyle } =
    useFormValidation("register");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    // $ Save the user's name to localStorage to be used in Dashboard. This will be retrieved from Cognito later.
    localStorage.setItem("name", formDataObject.name);

    //$ Direct to the confirm email form.
    if (validateForm(formDataObject)) {
      router.push("/confirm-signup");
      setFormStatus("error");
      return;
    }
  };

  // $  ==================== AWS SignUp Form Code using Cognito ====================
  // import { awsSignUp } from "@/app/utils/aws-signup";
  // import { useRouter } from "next/navigation";
  // try {
  //   const result = await awsSignUp(
  //     formDataObject.email,
  //     formDataObject.password,
  //     formDataObject.name
  //   );

  //   if (result.success) {
  //     // Redirect to confirmation page with credentials
  //     const params = new URLSearchParams({
  //       email: formDataObject.email,
  //       password: formDataObject.password,
  //     });
  //     router.push(`/confirm-signup?${params.toString()}`);
  //   } else {
  //     setFormStatus("error");
  //   }
  // } catch (error) {
  //   setFormStatus("error");
  //   console.error("Registration error:", error);
  // }
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] w-[20rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="py-2 font-semibold text-gray-600 dark:text-white tracking-[2px] capitalize text-clampH2">
        Create Account
      </h2>
      <div className="space-y-1">
        <FormRowInput
          id="name"
          labelText="name"
          name="name"
          type="text"
          placeholderText="name"
          className={`${getInputStyle(
            "name"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => clearError("name")}
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs">{formErrors.name}</p>
        )}
      </div>
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
          autoComplete="new-password"
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
      <div className="space-y-1">
        <FormRowInput
          id="confirmPassword"
          labelText="confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholderText="confirm password"
          className={`${getInputStyle(
            "password"
          )} bg-gray-200 dark:bg-gray-700 dark:text-fontLight text-fontDark dark:caret-fontLight caret-fontDark`}
          onChange={() => {
            clearError("confirmPassword");
          }}
        />
        {formErrors.confirmPassword && (
          <p className="text-red-500 text-xs">{formErrors.confirmPassword}</p>
        )}
      </div>
      <RegisterFormButton />
      <ReturnLoginButton />
    </form>
  );
};

export default RegisterForm;

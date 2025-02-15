"use client";
import FormRowInput from "../features/forms/FormRowInput";
import { FormEvent } from "react";
import RegisterButton from "./RegisterButton";
import { useFormValidation } from "@/app/hooks/useValidateForm";
// import AWSLoginButton from "./LoginButtonAWS";
import { awsLogin } from "@/app/utils/aws-login";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    formErrors,
    // formStatus,
    validateForm,
    clearError,
    setFormStatus,
    getInputStyle,
  } = useFormValidation("login");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // $ Get the form input values to be passed to the signIn function
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // $ Validate the form inputs with the login schema using zod.
    if (!validateForm(formDataObject)) {
      return;
    }

    // $ try-catch to sign into aws cognito
    try {
      console.log(
        "Credentials from Login Form:",
        "email:",
        formDataObject.email,
        "password:",
        formDataObject.password
      );
      //$ awsLogin is the function handling the singin to aws cognito using amplify "/utils/aws-login.ts"
      const result = awsLogin(formDataObject.email, formDataObject.password);
      if (!result) {
        setFormStatus("error");
      } else {
        setFormStatus("success");
        toast({
          variant: "default",
          title: `Welcome Back ${formDataObject.email.split("@")[0]}`,
          description: "Please Provide a Valid Code",
          duration: 3000,
        });
        router.push("/dashboard");
      }
      // $ Route to the dashboard page if successfull.
    } catch (error) {
      setFormStatus("error");
      console.error("Login error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] w-[20rem] flex flex-col mx-auto p-4 gap-6 outline-none rounded-md shadow-md shadow-clr_primary_200 bg-gray-100 dark:bg-gray-800"
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
      <button className="w-full text-white tracking-wider px-4 py-2 rounded-lg bg-clr_landing_red hover:bg-blue-600">
        {/* {isLoading ? "loading..." : "Sign In"} */}
        Sign In
      </button>
      <RegisterButton />
    </form>
  );
};

export default LoginForm;

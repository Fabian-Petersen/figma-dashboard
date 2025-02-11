"use client";
import { useState } from "react";
import Button from "../features/Button";
import FormRowInput from "../features/forms/FormRowInput";
import { FormEvent } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/app/schemas";

type FormErrors = {
  [key: string]: string;
};

const LoginForm = () => {
  const { login, isLoading, error: authError } = useAuth();
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<"idle" | "error" | "success">(
    "idle"
  );
  const router = useRouter();

  const validateForm = (formData: { email: string; password: string }) => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errors: FormErrors = {};
      result.error.errors.forEach((error) => {
        if (error.path) {
          errors[error.path[0]] = error.message;
        }
      });
      setFormErrors(errors);
      setFormStatus("error");
      return false;
    }
    setFormErrors({});
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formDataObject = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (!validateForm(formDataObject)) return;

    try {
      await login(formDataObject);
      setFormStatus("success");
      // form.reset();
    } catch (error) {
      setFormStatus("error");
      console.error("Login error:", error);
    }
  };

  const getInputStyle = (fieldName: string) => {
    const baseStyle =
      "w-full p-2 rounded outline-none transition-all duration-200";

    if (formErrors[fieldName]) {
      return (
        baseStyle + " border-2 border-red-500 focus:ring-2 focus:ring-red-500"
      );
    }

    if (formStatus === "success") {
      return baseStyle + " focus:ring-2 focus:ring-green-500";
    }

    return (
      baseStyle +
      " border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-700"
    );
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
          onChange={() => {
            if (formErrors.email) {
              const newErrors = { ...formErrors };
              delete newErrors.email;
              setFormErrors(newErrors);
            }
          }}
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
            if (formErrors.password) {
              const newErrors = { ...formErrors };
              delete newErrors.password;
              setFormErrors(newErrors);
            }
          }}
        />
        {formErrors.password && (
          <p className="text-red-500 text-xs">{formErrors.password}</p>
        )}
      </div>

      <Button
        type="submit"
        className={`py-2 px-4 rounded tracking-wider uppercase transition-colors duration-200 dark:text-fontLight text-white ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : formStatus === "success"
            ? "bg-green-500 hover:bg-green-700"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
        buttonLabel={isLoading ? "Logging in..." : "Submit"}
        disabled={isLoading}
      />

      {authError ? (
        <p className="text-red-500 text-xs text-center">{authError.message}</p>
      ) : null}

      <div className="flex items-center justify-center gap-2 text-xs">
        <p>Don&apos;t have an account?</p>
        <button
          type="button"
          className="hover:cursor-pointer"
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          <span>Register Here</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

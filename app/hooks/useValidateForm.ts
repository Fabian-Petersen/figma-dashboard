import { useState } from "react";
import { z } from "zod";
import { loginSchema, RegisterFormSchema } from "@/app/schemas";

type FormErrors = {
  [key: string]: string;
};

type FormStatus = "idle" | "error" | "success";

// Define union type for possible form types
type FormType = "login" | "register";

// Create a type that maps form types to their schema types
type SchemaType<T extends FormType> = T extends "login"
  ? z.infer<typeof loginSchema>
  : T extends "register"
  ? z.infer<typeof RegisterFormSchema>
  : never;

interface UseFormValidationReturn<T extends FormType> {
  formErrors: FormErrors;
  formStatus: FormStatus;
  validateForm: (data: SchemaType<T>) => boolean;
  clearError: (field: keyof SchemaType<T>) => void;
  setFormStatus: (status: FormStatus) => void;
  setFormErrors: (errors: FormErrors) => void;
  getInputStyle: (fieldName: string) => string;
}

export const useFormValidation = <T extends FormType>(
  formType: T
): UseFormValidationReturn<T> => {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  // $ Get the appropriate schema based on form type
  const getSchema = () => {
    switch (formType) {
      case "login":
        return loginSchema;
      case "register":
        return RegisterFormSchema;
      default:
        throw new Error(`Unsupported form type: ${formType}`);
    }
  };

  // $ Validate the form input fields
  const validateForm = (formData: SchemaType<T>): boolean => {
    const schema = getSchema();
    const result = schema.safeParse(formData);

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

    // $ For register form, add additional password match validation
    if (formType === "register") {
      const registerData = formData as SchemaType<"register">;
      if (registerData.password !== registerData.confirmPassword) {
        setFormErrors({
          confirmPassword: "Passwords do not match",
        });
        setFormStatus("error");
        return false;
      }
    }

    setFormErrors({});
    return true;
  };

  const clearError = (field: keyof SchemaType<T>) => {
    if (formErrors[field as string]) {
      const newErrors = { ...formErrors };
      delete newErrors[field as string];
      setFormErrors(newErrors);
    }
  };

  const getInputStyle = (fieldName: string) => {
    const baseStyle =
      "w-full p-2 rounded outline-none transition-all duration-200";

    if (formErrors[fieldName]) {
      return `${baseStyle} border-2 border-red-500 focus:ring-2 focus:ring-red-500`;
    }

    if (formStatus === "success") {
      return `${baseStyle} focus:ring-2 focus:ring-green-500`;
    }

    return `${baseStyle} border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-700`;
  };

  return {
    formErrors,
    formStatus,
    validateForm,
    clearError,
    setFormStatus,
    getInputStyle,
    setFormErrors,
  };
};

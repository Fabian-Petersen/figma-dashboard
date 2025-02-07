import * as z from "zod";

// $ Schema for the Login Form
export const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Please enter a valid password",
    })
    .refine(
      (value) => /^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/g.test(value), // Ensure 8+ chars, 1 uppercase, 1 special char
      {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character (@$!%*?&).",
      }
    ),
});

export const RegisterFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(1, {
      message: "Please enter a valid password",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value
        ),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
      }
    ),
  confirmPassword: z
    .string()
    .min(1, {
      message: "Please ensure the passwords match",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value
        ),
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
      }
    ),
});

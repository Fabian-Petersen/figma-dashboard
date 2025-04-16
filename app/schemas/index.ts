import * as z from "zod";

// $ Schema for the Login Form
export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// $ Schema for the Register Form
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
      message: "Name must be at least 1 character",
    })
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
          value
        ),
      {
        message: "The Confirmed Password must match the passord",
      }
    ),
});

// $ Schema for the Confirm Email Form
export const ConfirmEmailSchema = z.object({
  code: z.string().min(6, { message: "Please enter a valid code" }),
});

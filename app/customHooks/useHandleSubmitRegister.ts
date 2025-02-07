import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// $ Import the action from the actions folder
import login from "@/app/actions/login";

import { useForm } from "react-hook-form";
// $ Importing the form schema
import { RegisterFormSchema } from "@/app/schemas/index";

const useHandleSubmitRegister = () => {
  // $ State to manage the form submission between the pending and success states.
  const [isPending, startTransition] = useTransition();

  // $ State to manage the form error and success messages
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  // $ Logic for the Login Form
  const { reset } = useForm();

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  // $ Start the transition to the pending state
  const handleSubmit = (values: {
    email: string;
    password: string;
    name: string;
  }) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      // !:: TODO: Fix the data any type error!!!!
      login(values).then((data) => {
        const { success, error } = data;
        if (data) {
          setSuccess(success);
          console.log(data);
          router.push("/");
          // $ Reset the form fields after successful submission
          reset({
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
          });
          setError(error);
        }
      });
    });
  };
  return {
    isPending,
    error,
    success,
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
};

export default useHandleSubmitRegister;

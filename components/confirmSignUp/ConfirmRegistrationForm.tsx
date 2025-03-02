"use client";

// $ - This form is used to authenticate the user's email address and validate the input. The form can also be used to resend a verification code to the users email address.

// $ - The Form is rendered in the confirm-signup page.

import { useRouter } from "next/navigation";
import { useState } from "react";
import FormRowInput from "@/components/features/forms/FormRowInput";
import Button from "@/components/features/Button";
// // import FormError from "@/components/FormError";
// // import FormSuccess from "@/components/FormSuccess";
import ResendCodeButton from "./ResendCodeButton";
// import { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { awsCognitoConfirmRegistration } from "@/app/utils/confirmRegistration";
import { useSearchParams } from "next/navigation";

const ConfirmRegistrationForm = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  // $ aws amplify cognito signin logic
  const params = useSearchParams();
  const email = params.get("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!code) {
        throw new Error("Please provide a confirmation code");
      }

      if (!email) {
        throw new Error("Username is required");
      }
      const confirmSignUp = awsCognitoConfirmRegistration(email, code);

      if (!confirmSignUp) {
        console.log("Error Signing Up");
      }

      toast({
        variant: "default",
        title: `Email Successfully Confirmed`,
        description: "",
        duration: 3000,
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.log("error registering email", err);
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
          // disabled={isLoading}
        />
      </div>
      <div className="flex justify-left gap-2 items-center w-1/2">
        <Button
          type="submit"
          className="py-3 px-2 rounded tracking-wider uppercase transition-colors duration-200 dark:text-fontLight text-white bg-clr_landing_red hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-[0.8rem] flex-1 h-full"
          // disabled={isLoading}
          // buttonLabel={isLoading ? "Confirming..." : "Confirm Email"}
          buttonLabel="Confirm Email"
        />
        <ResendCodeButton className="py-3 px-2 rounded-md tracking-wider uppercase transition-colors duration-200 dark:text-fontLight hover:bg-blue-500 hover:text-white border border-blue-500 text-clr_blueGray_700disabled:bg-gray-400 text-[0.8rem] flex-1" />
      </div>
      {/* <FormError message={error} /> */}
      {/* <FormSuccess message={success} /> */}
    </form>
  );
};

export default ConfirmRegistrationForm;

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const formDataObject = {
//       code: formData.get("code") as string,
//     };

//     //$ Direct to the confirm email form.
//     if (formDataObject.code) {
//       setIsLoading(false);
//       router.push("/dashboard");
//     } else {
//       toast({
//         variant: "destructive",
//         title: "No Code Provided!",
//         description: "Please Provide a Valid Code",
//         duration: 3000,
//       });
//     }
//     return;
//   };

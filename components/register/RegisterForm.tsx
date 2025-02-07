"use client";

import { Button } from "@/components/ui/button";
import useHandleSubmitRegister from "@/app/customHooks/useHandleSubmitRegister";
import { useRouter } from "next/navigation";

// $ Importing the Form Components
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

const RegisterForm = () => {
  const { error, form, isPending, success, handleSubmit } =
    useHandleSubmitRegister();
  const router = useRouter();

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-8 rounded-lg max-w-xl text-gray-500"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mt-auto space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="name"
                  className="dark:text-gray-300 text-slate-500"
                >
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="text"
                    placeholder="John Doe"
                    className="text-slate-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder-gray-500 dark:border-gray-200 border-slate-400"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="email"
                  className="dark:text-gray-300 text-slate-500"
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="john.doe@email.com"
                    className="text-slate-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder-gray-500 dark:border-gray-200 border-slate-400"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="confirmPassword"
                  className="placeholder:tracking-wider dark:text-gray-300 text-slate-500"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={isPending}
                    placeholder="********"
                    className="text-slate-400 dark:text-gray-200 dark:placeholder-gray-500 focus:border-blue-300 dark:border-gray-200 border-slate-400 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 dark:focus:bg-gray-800"
                  />
                </FormControl>
                {<FormMessage className="text-red-500 text-xs font-normal" />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="tracking-wider">
                <FormLabel
                  htmlFor="confirmPassword"
                  className="placeholder:tracking-wider dark:text-gray-300 text-slate-500"
                >
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={isPending}
                    placeholder="********"
                    className="text-slate-400 dark:text-gray-200 dark:placeholder-gray-500 focus:border-blue-300 dark:border-gray-200 border-slate-400 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 dark:focus:bg-gray-800"
                  />
                </FormControl>
                {form.getValues("password") !==
                form.getValues("confirmPassword") ? (
                  <p className="text-red-500 text-xs font-normal">
                    Please enter a valid password
                  </p>
                ) : (
                  <FormMessage className="text-red-500 text-xs font-normal" />
                )}
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            className="bg-[#3a7ff9] dark:text-white hover:bg-blue-400"
            type="submit"
            disabled={isPending}
          >
            Register
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs">
          <p>Already have an account</p>
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <span>Login Here</span>
          </button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;

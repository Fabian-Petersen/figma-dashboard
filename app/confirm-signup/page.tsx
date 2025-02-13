// $ The page for the confirm registration form.

import ConfirmRegistrationForm from "@/components/confirmSignUp/ConfirmRegistrationForm";
import { Suspense } from "react";

export default function ConfirmSignUpPage() {
  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-[#f6f7f9] dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <ConfirmRegistrationForm />
        </Suspense>
      </div>
    </section>
  );
}

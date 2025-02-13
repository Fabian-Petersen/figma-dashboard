"use client";
import Login from "@/components/login/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchAuthSession } from "aws-amplify/auth";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    checkAuthAndRedirect();
  });

  const checkAuthAndRedirect = async () => {
    try {
      const session = await fetchAuthSession();
      if (session.tokens?.idToken) {
        router.push("/dashboard");
      }
    } catch (error) {
      // User is not authenticated, stay on login page
      console.error("Auth check failed:", error);
    }
  };

  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-[#f6f7f9] dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;

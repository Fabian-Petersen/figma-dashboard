"use client";
import Login from "@/components/login/LoginForm";
import LargeFeature from "@/components/landingPage/features/LargeFeature";

// $ Check if route is public or not? pass in true if it is a public route

const LoginPage = () => {
  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-clr_primary_landing dark:bg-bgDark overflow-hidden relative z-0">
      <div className="h-full flex justify-center items-center">
        <Login />
      </div>
      <LargeFeature />
    </section>
  );
};

export default LoginPage;

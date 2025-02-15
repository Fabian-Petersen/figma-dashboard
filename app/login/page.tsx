"use client";
import Login from "@/components/login/LoginForm";

// $ Check if route is public or not? pass in true if it is a public route

const LoginPage = () => {
  // $ public route

  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-clr_primary_landing dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;

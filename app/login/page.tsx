import Login from "@/components/login/LoginForm";

const Register = () => {
  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-[#f6f7f9] dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <Login />
      </div>
    </section>
  );
};

export default Register;

import RegisterForm from "@/components/register/RegisterForm";

const Register = () => {
  return (
    <section className="px-4 h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-clr_primary_landing dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;

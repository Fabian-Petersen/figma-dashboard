import SmallFeautre from "@/components/landingPage/features/SmallFeautre";
import RegisterForm from "@/components/register/RegisterForm";

const Register = () => {
  return (
    <section className="relative px-4 h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-clr_primary_landing dark:bg-bgDark z-[20]">
      <div className="h-full flex justify-center items-center">
        <RegisterForm />
      </div>
      <SmallFeautre />
      {/* <LargeFeature /> */}
    </section>
  );
};

export default Register;

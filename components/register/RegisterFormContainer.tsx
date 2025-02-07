import RegisterForm from "./RegisterForm";
import CardWrapper from "./CardWrapper";

function LoginFormContainer() {
  return (
    <CardWrapper headerLabel="🔐 Register Account" backButtonHref="">
      <RegisterForm />
    </CardWrapper>
  );
}
export default LoginFormContainer;

import { useRouter } from "next/navigation";

function SignInButton() {
  const router = useRouter();

  const handleLogin = async () => {
    router.push("/login");
  };
  return (
    <button
      type="button"
      className="hover:bg-clr_landing_red bg-transparent text-[#8794BA] tracking-wider px-4 py-2 rounded-full text-clampNavMenuText hover:border-clr_landing_red hover:text-white transition-colors"
      onClick={handleLogin}
    >
      Sign In
    </button>
  );
}

export default SignInButton;

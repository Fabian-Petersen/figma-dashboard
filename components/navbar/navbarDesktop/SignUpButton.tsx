import { useRouter } from "next/navigation";

function SignUpButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="hover:bg-clr_landing_red bg-transparent text-[#8794BA] tracking-wider py-2 px-8 hover:border-clr_landing_red hover:text-white transition-colors 
  border border-gray-600 rounded-full text-clampNavMenuText"
      onClick={() => router.push("/register")}
    >
      Sign Up
    </button>
  );
}

export default SignUpButton;

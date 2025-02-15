// $ This code is from the cognito documentation when creating a userpool

import { useAuth } from "react-oidc-context";

function AWSLoginButton() {
  const auth = useAuth();

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
    <div>
      <button className="w-full text-white tracking-wider px-4 py-2 rounded-lg bg-clr_landing_red hover:bg-blue-600">
        {auth.isLoading ? "loading..." : "Sign In"}
      </button>
    </div>
  );
}

export default AWSLoginButton;

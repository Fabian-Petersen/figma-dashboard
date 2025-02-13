// $ This code is from the cognito documentation when creating a userpool

import { useAuth } from "react-oidc-context";

function AWSLoginButton() {
  const auth = useAuth();

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button className="w-full text-white tracking-wider px-4 py-2 rounded-lg bg-clr_primary_landing hover:bg-blue-600">
        {auth.isLoading ? "loading..." : "Sign In"}
      </button>
    </div>
  );
}

export default AWSLoginButton;

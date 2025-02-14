import React from "react";

function RegisterFormButton() {
  return (
    <div>
      <button className="w-full text-white tracking-wider px-4 py-2 rounded-lg bg-clr_primary_landing hover:bg-blue-600">
        Sign Up
      </button>
    </div>
  );
}

export default RegisterFormButton;

// $ This code is from the cognito documentation when creating a userpool
// $ Function to Register Users with Cognito
// import { useAuth } from "react-oidc-context";

// function RegisterFormButton() {
//   const auth = useAuth();

//   if (auth.error) {
//     return <div>Encountering error... {auth.error.message}</div>;
//   }

//   return (
//     <div>
//       <button className="w-full text-white tracking-wider px-4 py-2 rounded-lg bg-clr_primary_landing hover:bg-blue-600">
//         {auth.isLoading ? "loading..." : "Sign Up"}
//       </button>
//     </div>
//   );
// }

// export default RegisterFormButton;

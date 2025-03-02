// //? This hook is used to login the user from the login component

// "use client";
// import supabase from "@/app/lib/initSupabase";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useMutation } from "@tanstack/react-query";
// // import { useGlobalContext } from "@/app/contextAPI";
// import { useGlobalContext } from "../../app/contextAPI";

// // $ hook handling the sign in of the user
// const useLoginUserHook = (userData) => {
//   const router = useRouter();
//   const { setToken } = useGlobalContext();

//   // $ The logic to handle the login user to the application/supabase
//   const loginUser = async () => {
//     const { email, password } = userData;
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       throw new Error(error.message);
//     }
//     return data;
//   };

//   // $ Use the useMutate hook from react-query to handle the login of the user to the application.

//   const { mutate, isLoading } = useMutation({
//     mutationFn: loginUser,
//     onSuccess: (data) => {
//       if (data.user && data.session !== null) {
//         setToken(data);
//         toast.success(`Welcome back ${data?.user?.user_metadata?.name}`);
//         router.push("/dashboard");
//       }
//     },
//   });

//   // $ Export the mutate function and isLoading variable to be used in the Login component.
//   return { mutate, isLoading };
// };

// export default useLoginUserHook;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { useUserAttributes } from "@/app/hooks/useFetchUserAttributes";
// import { Amplify } from "aws-amplify";

// Configure Amplify
// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID as string,
//       userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
//     },
//   },
// });

function UserInfo() {
  const [email, setEmail] = useState("");
  const [usersName, setUsersName] = useState("");
  //$ Retrieve the name attribute from Cognito
  // const { userAttributes } = useUserAttributes();

  // $ Get the users details from localstorage
  useEffect(() => {
    const usersName = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    setEmail(email ? String(email) : "");
    setUsersName(usersName ? String(usersName) : "");
  }, []);

  // $ remove the name from email if user did not sign in for logic purposes
  const nameFromEmail = email?.split("@")[0];

  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-[8px] overflow-hidden">
        <Image
          src="/images/fabian_image.jpg"
          alt="user-image"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-clr_blueGray_900 text-[14px] font-semibold capitalize">
          {usersName || nameFromEmail}
          {/* {userAttributes?.name} */}
        </p>
        <p className="text-clr_blueGray_700 text-[12px]">Admin</p>
      </div>
    </div>
  );
}

export default UserInfo;

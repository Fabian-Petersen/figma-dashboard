import React from "react";
import Image from "next/image";
import { useUserAttributes } from "@/app/hooks/useFetchUserAttributes";
import { Amplify } from "aws-amplify";

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID as string,
      userPoolClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
    },
  },
});

function UserInfo() {
  //$ Retrieve the name attribute from Cognito
  const { userAttributes } = useUserAttributes();

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
          {userAttributes?.name}
        </p>
        <p className="text-clr_blueGray_700 text-[12px]">Admin</p>
      </div>
    </div>
  );
}

export default UserInfo;

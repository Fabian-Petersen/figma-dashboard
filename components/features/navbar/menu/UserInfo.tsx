import React from "react";
import Image from "next/image";
import { getCurrentUser } from "aws-amplify/auth";

async function UserInfo() {
  const { username, userId, signInDetails } = await getCurrentUser();
  console.log("username", username);
  console.log("user id", userId);
  console.log("sign-in details", signInDetails);
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
          {username}
        </p>
        <p className="text-clr_blueGray_700 text-[12px]">Admin</p>
      </div>
    </div>
  );
}

export default UserInfo;

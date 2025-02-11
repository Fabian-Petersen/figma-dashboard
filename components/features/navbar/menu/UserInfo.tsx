import React from "react";
import Image from "next/image";

function UserInfo() {
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-[8px] overflow-hidden">
        <Image
          src="/images/fabianImage.jpg"
          alt="user-image"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-clr_blueGray_900 text-[14px] font-semibold">
          Fabian
        </p>
        <p className="text-clr_blueGray_700 text-[12px]">Admin</p>
      </div>
    </div>
  );
}

export default UserInfo;

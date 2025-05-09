"use client";
import Image from "next/image";
import { useGlobalContext } from "@/app/useGlobalContext";

function UserInfo() {
  // $ Authenticated User with user atrributes
  const { attributes } = useGlobalContext();

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
          {attributes?.name}
        </p>
        <p className="text-clr_blueGray_700 text-[12px]">Admin</p>
      </div>
    </div>
  );
}

export default UserInfo;

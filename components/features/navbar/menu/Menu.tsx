import React from "react";
import Notifications from "./Notifications";
import UserInfo from "./UserInfo";

function Menu() {
  return (
    <div className="flex gap-4 xs:gap-4 justify-end items-center">
      <Notifications />
      <UserInfo />
    </div>
  );
}

export default Menu;

import { FC } from "react";
import LogOutIcon from "../../icons/LogOutIcon";
import ButtonRounded from "../../UI/ButtonRounded";
import UserLogo from "./UserLogo";

const UserInfo: FC = () => {
  return (
    <div className="col-start-1 col-end-3 flex justify-start flex-col gap-y-5">
      <UserLogo />
      <div className="font-bold text-xl">{"(.)(.)  <—Makima🥰"}</div>
      <div className="text-sm mb-10">
        подписка <span className="font-bold">Pro</span> до 24.05.23
      </div>
      <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-1 bg-black text-white">
        <LogOutIcon />
        <span>Выйти</span>
      </ButtonRounded>
    </div>
  );
};

export default UserInfo;

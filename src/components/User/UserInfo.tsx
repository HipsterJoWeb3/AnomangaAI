import { FC } from "react";
import LogOutIcon from "../../icons/LogOutIcon";
import ButtonRounded from "../../UI/ButtonRounded";
import UserAvatar from "./UserAvatar";

interface UserInfoProps {
  imageUrl: string;
  username: string;
  subscriptionDate: string;
}

const UserInfo: FC<UserInfoProps> = ({ imageUrl, username, subscriptionDate }) => {
  return (
    <div className="col-start-1 col-end-3 flex justify-start flex-col gap-y-5">
      <UserAvatar
        classes="w-32 h-32"
        imageUrl={imageUrl}
      />
      <div className="font-bold text-xl">{username}</div>
      <div className="text-sm mb-10">
        подписка <span className="font-bold">Pro</span> до {subscriptionDate}
      </div>
      <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-1 bg-black text-white">
        <LogOutIcon />
        <span>Выйти</span>
      </ButtonRounded>
    </div>
  );
};

export default UserInfo;
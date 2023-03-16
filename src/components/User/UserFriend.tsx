import { FC } from "react";
import UserAvatar from "./UserAvatar";

type UserFriend = {
  avatarUrl: string;
  name: string;
  lastOnline: string;
};

const UserFriend: FC<UserFriend> = ({ avatarUrl, name, lastOnline }) => {
  return (
    <a className="flex gap-x-5" href="/">
      <UserAvatar imageUrl={avatarUrl} classes={"w-24 h-24"} />
      <div className="flex flex-col gap-x-1 justify-center">
        <h2 className="font-bold text-xl">{name}</h2>
        <div>{lastOnline}</div>
      </div>
    </a>
  );
};

export default UserFriend;
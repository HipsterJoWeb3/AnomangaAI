import { FC } from "react";
import ButtonRounded from "../../UI/ButtonRounded";

interface UserLeafsInfoType {
  name: string;
  date: string;
}

const UserLeafsInfo: FC<UserLeafsInfoType> = ({name, date}) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-1">
        <div className="text-sm  font-bold">{name}</div>
        <div className="text-sm "> {date}</div>
      </div>
      <div className="h-12">
        <ButtonRounded classes="px-5 py-1">подробнее</ButtonRounded>
      </div>
    </div>
  );
};

export default UserLeafsInfo;

import { FC } from "react";
import UserLeafImageList from "./UserLeafImageList";
import UserLeafsInfoList from "./UserLeafInfoList";

const UserTranslateLeafs: FC = () => {
  return (
    <div className="grid grid-cols-10">
      <UserLeafsInfoList />
      <UserLeafImageList />
    </div>
  );
};

export default UserTranslateLeafs;

import { FC } from "react";
import UserLeafsInfoList from "./UserLeafInfoList";

const UserTranslateLeafs: FC = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-start-1 col-end-5 flex flex-col gap-y-4">
         <UserLeafsInfoList/>
      </div>
    </div>
  );
};

export default UserTranslateLeafs;

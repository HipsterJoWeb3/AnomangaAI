import { FC } from "react";
import UserLeafImage from "./UserLeafImage";

const list = [
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
  "../../../src/assets/images/mangaleaf.png",
];

const UserLeafImageList: FC = () => {
  return (
    <div className="grid grid-cols-3 col-start-6 col-end-12 gap-y-5">
      {list.map((el) => (
        <UserLeafImage imageUrl={el} />
      ))}
    </div>
  );
};

export default UserLeafImageList;

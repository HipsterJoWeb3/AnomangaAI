import { FC } from "react";

interface UserLeafImageType {
  imageUrl: string;
}

const UserLeafImage: FC<UserLeafImageType> = ({ imageUrl }) => {
  return <img src={imageUrl} />;
};

export default UserLeafImage;

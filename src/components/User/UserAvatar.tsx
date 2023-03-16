import { FC } from "react";

interface UserAvatarType {
  classes: string;
  imageUrl: string;
}

const UserAvatar: FC<UserAvatarType> = ({ classes, imageUrl }) => {
  return (
    <div className={`rounded-full overflow-hidden ${classes}`}>
      <img src={imageUrl} />
    </div>
  );
};

export default UserAvatar;
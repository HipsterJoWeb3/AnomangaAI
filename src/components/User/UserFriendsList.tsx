import { FC } from "react";
import UserFriend from "./UserFriend";

const UserFriendsList: FC = () => {
  const friendList = [
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
    {
      avatarUrl: "../../../src/assets/images/Tolyan.jpg",
      name: "Анатолий Атапин",
      lastOnline: "Онлайн",
    },
  ];

  return (
    <div className="grid grid-cols-3">
      <div className="grid col-start-1 col-end-3 grid-cols-2 gap-y-10">
        {friendList.map((friend) => (
          <UserFriend
            avatarUrl={friend.avatarUrl}
            name={friend.name}
            lastOnline={friend.lastOnline}
          />
        ))}
      </div>
    </div>
  );
};

export default UserFriendsList;

import { FC} from "react";
import Tab from "../components/Tab";
import UserInfo from "../components/User/UserInfo";
import UserManga from "../components/User/UserManga";
import UserSettings from "../components/User/UserSettings";
import UserSubscribe from "../components/User/UserSubscribe";
import UserFriendsList from "../components/User/UserFriendsList";
import UserTranslateLeafs from "../components/User/UserTranslateLeafs";

const options = [
  "манга",
  "переведенные страницы",
  "подписка",
  "аккаунт",
  "друзья",
];

const page = [<UserManga />, <UserTranslateLeafs/>, <UserSubscribe/>, <UserSettings/>, <UserFriendsList/> ];

const UserPage: FC = () => {
  return (
    <div className="grid grid-cols-12">
      <UserInfo imageUrl={"../../../src/assets/images/avatar.png"} username={"(.)(.)  <—Makima🥰"} subscriptionDate={"24.5.23"}/>
      <div className="grid col-start-3 col-end-13 flex">
        <Tab selection={options} page={page} />
      </div>
    </div>
  );
};

export default UserPage;

import { FC } from "react";
import UserLeafsInfo from "./UserLeafInfo";

const list = [
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
  
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
    {
      name: "Человек-бензопила",
      date: "20:00 - 19.05.23 ",
    },
  ];


const UserLeafsInfoList: FC = () => {
 
  return (
    <div className="flex flex-col gap-y-5 col-start-1 col-end-5">
      {list.map((el) => (
        <UserLeafsInfo name={el.name} date={el.date} />
      ))}
    </div>
  );
};

export default UserLeafsInfoList;

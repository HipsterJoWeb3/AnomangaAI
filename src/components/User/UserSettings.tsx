import { FC } from "react";
import GridIcon from "../../icons/GridIcon";
import ButtonRounded from "../../UI/ButtonRounded";

const UserSettings: FC = () => {
  return (
    <div className="gap-y-10 grid col-start-1 col-end-8 grid-cols-10 ">
      <div className="flex flex-col col-start-1 col-end-10 gap-y-10">
        <h2 className="font-bold text-xl">Middle версия</h2>
        <p className="text-sm">Имя пользователя</p>
        <ButtonRounded classes="h-fit w-fit py-1 px-5 text-white bg-black flex gap-x-5 items-center">
          <GridIcon/>
          <span>Обновить аватарку</span>
        </ButtonRounded>
      </div>
    </div>
  );
};

export default UserSettings;

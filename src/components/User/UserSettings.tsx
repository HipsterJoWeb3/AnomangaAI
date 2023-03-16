import { FC } from "react";
import UpdateAvatarIcon from "../../icons/UpdateAvatarIcon";
import ButtonRounded from "../../UI/ButtonRounded";
import Input from "../../UI/Input";

const UserSettings: FC = () => {
  return (
    <div className="gap-y-10 grid col-start-1 col-end-8 grid-cols-10 ">
      <div className="col-start-1 col-end-4 gap-y-5 grid grid-cols-3">
        <div className="text-sm col-start-1 col-end-3">Имя пользователя</div>
        <div className="mb-10 col-start-1 col-end-3">
          <Input placeholder="Makima" />
        </div>

        <ButtonRounded classes="h-fit w-fit py-1 px-5 text-white bg-black flex gap-x-5 items-center col-start-1 col-end-4  ">
          <UpdateAvatarIcon />
          <span className="text-base">Обновить аватарку</span>
        </ButtonRounded>
      </div>
    </div>
  );
};

export default UserSettings;

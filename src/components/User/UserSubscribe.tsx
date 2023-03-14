import { FC } from "react";
import ButtonRounded from "../../UI/ButtonRounded";

const UserSubscribe: FC = () => {
  return (
    <div className="gap-y-10 grid col-start-1 col-end-8 grid-cols-10 ">
      <div className="flex flex-col col-start-1 col-end-4 gap-y-10">
        <h2 className="font-bold text-xl">Middle версия</h2>
        <p className="text-sm">
          Если вам нужно переводить мангу целиком, то для вас подойдет наш
          платный тарифный план, который позволяет использовать сервис перевода
          без ограничений. Это идеальный вариант для тех, кто хочет читать мангу
          на других языках, не ограничиваясь отдельными листами.
        </p>
        <ButtonRounded classes="h-fit w-fit py-3 px-5 text-white bg-black">
          1900 ₽ / мес
        </ButtonRounded>
      </div>
    </div>
  );
};

export default UserSubscribe;

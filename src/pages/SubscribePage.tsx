import { FC } from "react";
import Sidebar from "../components/Sidebar";
import ButtonRounded from "../UI/ButtonRounded";

const SubscribePage: FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-start-3 col-end-13">
        <h1 className="mb-16 font-bold text-4xl">Подписки</h1>
        <div className="grid grid-cols-3 gap-x-16">
          <div className="gap-y-10 flex flex-col">
            <h2 className="font-bold text-xl">Демо</h2>
            <p className="text-sm">
              Вы можете использовать наш сервис перевода бесплатно на 20
              попыток. Это позволит вам ознакомиться с функциональностью нашего
              сервиса и протестировать его перед тем, как перейти на платный
              тариф.
            </p>
            <ButtonRounded classes="h-fit w-fit py-3 px-5 text-white bg-black">
              Попробовать
            </ButtonRounded>
          </div>
          <div className="gap-y-10 flex flex-col">
            <h2 className="font-bold text-xl">Middle версия</h2>
            <p className="text-sm">
              Если вам нужно переводить мангу целиком, то для вас подойдет наш
              платный тарифный план, который позволяет использовать сервис
              перевода без ограничений. Это идеальный вариант для тех, кто хочет
              читать мангу на других языках, не ограничиваясь отдельными
              листами.
            </p>
            <ButtonRounded classes="h-fit w-fit py-3 px-5 text-white bg-black">
              1900 ₽ / мес
            </ButtonRounded>
          </div>
          <div className="gap-y-10 flex flex-col">
            <h2 className="font-bold text-xl">Pro версия</h2>
            <p className="text-sm">
              Если вы хотите использовать наш API на своих ресурсах, мы
              предоставляем возможность получить доступ к нему с помощью нашей
              платной подписки. Этот тарифный план позволяет интегрировать наш
              API в ваш сайт или приложение и использовать его для
              автоматического перевода манги на другие языки.
            </p>
            <ButtonRounded classes="h-fit w-fit py-3 px-5 text-white bg-black">
              4900 ₽ / мес
            </ButtonRounded>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;

import { FC } from "react";
import ButtonRounded from "../../UI/ButtonRounded";
import ArrowTopIcon from "../../icons/ArrowTopIcon";
import { Link } from "react-router-dom";

const manga = [
  {
    title: "каталог",
    path: "/manga_list",
  },
  {
    title: "новинки",
    path: "/manga_list",
  },
  {
    title: "популярное",
    path: "/manga_list",
  },
  {
    title: "рейтинг",
    path: "/manga_list",
  },
];

const services = [
  {
    title: "переводчик",
    path: "/docs",
  },
  {
    title: "подписка",
    path: "/subscribe",
  },
  {
    title: "новости и обновления",
    path: "/docs",
  },
  {
    title: "чач",
    path: "/docs",
  },
];

const developer = [
  {
    title: "доступ к API",
    path: "/docs",
  },
  {
    title: "документация",
    path: "/docs",
  },
  {
    title: "статьи",
    path: "/docs",
  },
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


const Footer: FC = () => {

  return (
    <div className="mt-48 grid grid-cols-12">
      <div className="col-start-3 col-end-9 grid grid-cols-6">
        <div className="col-start-1 col-end-3 flex flex-col gap-y-5">
          <h3 className="font-bold">Манга</h3>
          <ul className="flex flex-col gap-y-4">
            {manga.map(({ title, path }) => (
              <li>
                <Link to={path} className="text-sm">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-start-3 col-end-5 flex flex-col gap-y-5">
          <h3 className="font-bold">Сервисы</h3>
          <ul className="flex flex-col gap-y-4">
            {services.map(({ title, path }) => (
              <li>
                <Link to={path} className="text-sm">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-start-5 col-end-7 flex flex-col gap-y-5">
          <h3 className="font-bold">Разработчикам</h3>
          <ul className="flex flex-col gap-y-4">
            {developer.map(({ title, path }) => (
              <li>
                <Link to={path} className="text-sm">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-start-11 col-end-13 flex justify-end h-fit" onClick={()=>scrollToTop()}>
          <ButtonRounded classes="bg-black text-white py-3 px-5 flex gap-x-5 items-center">
            <ArrowTopIcon />
            <span>к началу</span>
          </ButtonRounded>
      </div>
    </div>
  );
};

export default Footer;
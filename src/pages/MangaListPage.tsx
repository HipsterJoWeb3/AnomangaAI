import { FC } from "react";
import MangaList from "../components/MangaList";
import FilterMangaList from "../components/PopularMangaList/FilterMangaList";
import Sidebar from "../components/Sidebar";

const MangaListPage: FC = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="grid col-start-3 col-end-9 flex">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-7 col-start-1 col-end-5">
            <h1 className="font-bold text-4xl mb-10">Популярная манга</h1>
            <MangaList classes="grid-cols-3 grid col-start-3 col-end-11 "/>
          </div>
        </div>
      </div>
      <FilterMangaList />
    </div>
  );
};

export default MangaListPage;

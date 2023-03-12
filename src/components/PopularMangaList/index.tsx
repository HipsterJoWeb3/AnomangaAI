import { FC } from "react";
import Sidebar from "../Sidebar";
import MangaList3 from "./MangaList3";
import FilterMangaList from "./FilterMangaList";


const PopularMangaList: FC = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="grid col-start-3 col-end-9 flex">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-7 col-start-1 col-end-5">
            <h1 className="font-bold text-4xl mb-10">Популярная манга</h1>
            <MangaList3 />
          </div>
        </div>
      </div>
        <FilterMangaList/>
    </div>
  );
};

export default PopularMangaList;

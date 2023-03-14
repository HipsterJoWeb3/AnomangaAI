import { FC } from "react";
import Select from "../../UI/Select";
import { useState } from "react";
import InputRange from "./InputRange";

const optionsGenres = ["манга", "манхва"];
const optionsTags = ["2", "3"];

const FilterMangaList: FC = () => {
  const [selectedValueGenres, setSelectedValueGenres] = useState("жанры");
  const [selectedValueTags, setSelectedValueTags] = useState("теги");
  return (
    <div className="col-start-10 col-end-13 mt-32 flex gap-y-10 flex-col">
      <div className="flex gap-y-5 flex-col">
        <div className="w-fit">
          <Select
            options={optionsGenres}
            selectedValue={selectedValueGenres}
            setSelectedValue={setSelectedValueGenres}
          />
        </div>
        <div className="w-fit">
          <Select
            options={optionsTags}
            selectedValue={selectedValueTags}
            setSelectedValue={setSelectedValueTags}
          />
        </div>
      </div>

      <InputRange label="Количество глав" />
      <InputRange label="Год выпуска" />
    </div>
  );
};

export default FilterMangaList;

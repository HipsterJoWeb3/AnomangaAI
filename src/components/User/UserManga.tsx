import { FC, useState } from "react";
import MangaList from "../MangaList";
import Select from "../../UI/Select";

const options1 = ["избранное"];

const options2 = ["по дате"];

const UserManga: FC = () => {
  const [selectedValue, setSelectedValue] = useState(options1[0]);
  const [selectedValue1, setSelectedValue1] = useState(options2[0]);
  return (
    <div className="col-start-1 col-end-8 flex justify-between" >
      <MangaList classes="grid-cols-3 col-start-1 col-end-3" />
      <div className="flex gap-x-4">
        <Select 
          options={options1}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <Select
          options={options2}
          selectedValue={selectedValue1}
          setSelectedValue={setSelectedValue1}
        />
      </div>
    </div>
  );
};

export default UserManga;

import { FC, useState } from "react";
import ButtonRounded from "../../UI/ButtonRounded";

interface Tab {
  selection: string[];
  page: JSX.Element[];
}

const Tab: FC<Tab> = ({ selection, page }) => {
  const [activeItem, setActiveItem] = useState<string>(selection[0]);
  const [indexItem, setIndexItem] = useState<number>(0);

  const handleItemClick = (item: string, index: number) => {
    setActiveItem(item);
    setIndexItem(index);
  };

  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex gap-x-5">
        {selection?.map((item, index) => (
          <div key={item} onClick={() => handleItemClick(item, index)}>
            <ButtonRounded
              classes={`px-5 py-1 text-base  ${
                activeItem === item ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {item}
            </ButtonRounded>
          </div>
        ))}
      </div>
      {page[indexItem]}
    </div>
  );
};

export default Tab;
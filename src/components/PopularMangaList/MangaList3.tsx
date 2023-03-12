import { FC } from "react";
import Card from "../MangaList/Card";
import { useState } from "react";
import ButtonRounded from "../../UI/ButtonRounded";
import ArrowButtomIcon from "../../icons/ArrowButtomIcon";

const MangaList: FC = () => {
  const [loadedCardsCount, setLoadedCardsCount] = useState(6);

  const handleLoadMoreClick = () => {
    setLoadedCardsCount(loadedCardsCount + 12); //
  };

  const renderCards = () => {
    const cardsToRender = [...new Array(loadedCardsCount)];
    return cardsToRender.map((_, i) => <Card key={i} i={i} />);
  };

  return (
    <div className="grid grid-cols-3 gap-y-10 mb-10">
      {renderCards()}
      <div className="flex justify-end items-start col-start-3 col-end-4" onClick={handleLoadMoreClick}>
        <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-3 bg-black text-white">
          <ArrowButtomIcon />
          <span>загрузить еще</span>
        </ButtonRounded>
      </div>
    </div>
  );
};

export default MangaList;

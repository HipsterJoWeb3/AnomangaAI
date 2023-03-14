import { FC, useState } from 'react';
import Card from './Card';
import ButtonRounded from '../../UI/ButtonRounded';
import ArrowButtomIcon from '../../icons/ArrowButtomIcon';

interface MangaList {
  classes?: string;
  hasButton?: boolean;
  cardsToLoad?: number;
}

const MangaList: FC<MangaList> = ({ classes, hasButton = true, cardsToLoad = 6 }) => {
  const [loadedCardsCount, setLoadedCardsCount] = useState(cardsToLoad);

  const handleLoadMoreClick = () => {
    setLoadedCardsCount(loadedCardsCount + cardsToLoad); 
  };

  const renderCards = () => {
    const cardsToRender = [...new Array(loadedCardsCount)];
    return cardsToRender.map((_, i) => <Card key={i} i={i} />);
  };

  return (
    <div className={`gap-x-5 gap-y-10 grid ${classes}`}>
      {renderCards()}
      {hasButton && (
        <div className="flex justify-end items-start col-start-3 col-end-4" onClick={handleLoadMoreClick}>
          <ButtonRounded classes="flex items-center gap-x-5 w-fit px-5 py-3 bg-black text-white">
            <ArrowButtomIcon />
            <span>загрузить еще</span>
          </ButtonRounded>
        </div>
      )}
    </div>
  );
};

export default MangaList;
import { Link } from "react-router-dom";
import { FC } from "react";

interface CardType {
  i: number;
}

const Card: FC<CardType> = ({ i }) => {
  return (
    <Link to="/manga_page">
      <img
        src={`../../../src/assets/images/manga${i + 1}.png`}
        className="mb-5"
      />
      <h3 className="text-sm font-bold">Одинокий Рокер!</h3>
      <span className="text-sm">Bocchi za Rokku!</span>
    </Link>
  );
};

export default Card;
